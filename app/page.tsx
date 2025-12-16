"use client";

import { useState, useEffect } from "react";

interface Story {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number;
  descendants?: number;
  type: string;
}

const STORIES_PER_PAGE = 30;
const HN_API_BASE = "https://hacker-news.firebaseio.com/v0";

function getTimeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  return `${Math.floor(diff / 2592000)} months ago`;
}

function getSiteDomain(url?: string): string {
  if (!url) return "";
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function Home() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Fetch all story IDs on mount
  useEffect(() => {
    async function fetchStoryIds() {
      try {
        const response = await fetch(`${HN_API_BASE}/topstories.json`);
        const ids: number[] = await response.json();
        setStoryIds(ids);
      } catch (error) {
        console.error("Failed to fetch story IDs:", error);
      }
    }
    fetchStoryIds();
  }, []);

  // Fetch stories for current page when storyIds or page changes
  useEffect(() => {
    if (storyIds.length === 0) return;

    async function fetchStories() {
      const isFirstPage = page === 1;
      if (isFirstPage) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      try {
        const startIndex = (page - 1) * STORIES_PER_PAGE;
        const endIndex = startIndex + STORIES_PER_PAGE;
        const idsToFetch = storyIds.slice(startIndex, endIndex);

        const storyPromises = idsToFetch.map(async (id) => {
          const response = await fetch(`${HN_API_BASE}/item/${id}.json`);
          return response.json();
        });

        const fetchedStories = await Promise.all(storyPromises);
        const validStories = fetchedStories.filter(
          (story) => story && !story.deleted && !story.dead
        );

        if (isFirstPage) {
          setStories(validStories);
        } else {
          setStories((prev) => [...prev, ...validStories]);
        }
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    }

    fetchStories();
  }, [storyIds, page]);

  const hasMore = page * STORIES_PER_PAGE < storyIds.length;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <html lang="en" data-op="news">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="news.css" />
        <link rel="icon" href="y18.svg" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://news.ycombinator.com/rss"
        />
        <title>Hacker News</title>
      </head>
      <body>
        <center>
          <table
            id="hnmain"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="85%"
            bgcolor="#f6f6ef"
            className="mt-2"
          >
            <tbody>
              <tr>
                <td style={{ backgroundColor: "#ff6600" }}>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ padding: "2px" }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ width: "25px", paddingRight: "4px" }}>
                          <a href="https://news.ycombinator.com/">
                            <img
                              src="y18.svg"
                              width="24"
                              height="24"
                              style={{
                                border: "1px white solid",
                                display: "block",
                                margin: "2px",
                              }}
                              alt="Y Combinator"
                            />
                          </a>
                        </td>
                        <td style={{ lineHeight: "12pt", height: "10px" }}>
                          <span className="pagetop">
                            <b className="hnname">
                              <a href="https://news.ycombinator.com/news">
                                Hacker News X
                              </a>
                            </b>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr style={{ height: "10px" }}></tr>
              <tr id="bigbox">
                <td>
                  {loading ? (
                    <div style={{ padding: "20px", color: "#828282" }}>
                      Loading stories...
                    </div>
                  ) : (
                    <table border={0} cellPadding={0} cellSpacing={0}>
                      <tbody>
                        {stories.map((story, index) => {
                          const site = getSiteDomain(story.url);
                          return (
                            <tr key={story.id}>
                              <td colSpan={2}>
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      className="athing submission"
                                      id={String(story.id)}
                                    >
                                      <td
                                        align="right"
                                        valign="top"
                                        className="title rank-cell"
                                      >
                                        <span className="rank">
                                          {index + 1}.
                                        </span>
                                      </td>
                                      <td className="title">
                                        <span className="titleline">
                                          <a
                                            href={
                                              story.url ||
                                              `https://news.ycombinator.com/item?id=${story.id}`
                                            }
                                          >
                                            {story.title}
                                          </a>
                                          {site && (
                                            <span className="sitebit comhead">
                                              {" "}
                                              (
                                              <a
                                                href={`https://news.ycombinator.com/from?site=${site}`}
                                              >
                                                <span className="sitestr">
                                                  {site}
                                                </span>
                                              </a>
                                              )
                                            </span>
                                          )}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td className="subtext">
                                        <span className="subline">
                                          <span
                                            className="score"
                                            id={`score_${story.id}`}
                                          >
                                            {story.score} points
                                          </span>{" "}
                                          by{" "}
                                          <a
                                            href={`https://news.ycombinator.com/user?id=${story.by}`}
                                            className="hnuser"
                                          >
                                            {story.by}
                                          </a>{" "}
                                          <span className="age">
                                            <a
                                              href={`https://news.ycombinator.com/item?id=${story.id}`}
                                            >
                                              {getTimeAgo(story.time)}
                                            </a>
                                          </span>
                                          <span id={`unv_${story.id}`}></span> |{" "}
                                          <a
                                            href={`https://news.ycombinator.com/hide?id=${story.id}&goto=news`}
                                          >
                                            hide
                                          </a>{" "}
                                          |{" "}
                                          <a
                                            href={`https://news.ycombinator.com/item?id=${story.id}`}
                                          >
                                            {story.descendants ?? 0}
                                            &nbsp;comments
                                          </a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr
                                      className="spacer"
                                      style={{ height: "5px" }}
                                    ></tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          );
                        })}
                        {hasMore && (
                          <tr className="morespace" style={{ height: "10px" }}>
                            <td colSpan={2}></td>
                          </tr>
                        )}
                        {hasMore && (
                          <tr>
                            <td colSpan={2} style={{ paddingLeft: "30px" }}>
                              <a
                                href="#"
                                className="morelink"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleLoadMore();
                                }}
                                style={{
                                  color: "#828282",
                                  cursor: loadingMore ? "wait" : "pointer",
                                }}
                              >
                                {loadingMore ? "Loading..." : "More"}
                              </a>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </body>
    </html>
  );
}
