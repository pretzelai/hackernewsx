import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

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

const STORIES_PER_PAGE = 90;
const HN_API_BASE = "https://hacker-news.firebaseio.com/v0";

type StoryType = "top" | "new" | "best" | "ask" | "show" | "job";

const STORY_ENDPOINTS: Record<StoryType, string> = {
  top: "topstories.json",
  new: "newstories.json",
  best: "beststories.json",
  ask: "askstories.json",
  show: "showstories.json",
  job: "jobstories.json",
};

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

function getScoreHighlightStyle(score: number): React.CSSProperties {
  // Bucket scores by 50 points (0-49, 50-99, 100-149, etc.)
  const bucket = Math.floor(score / 50);
  // Cap at 10 buckets (500+ points all get max intensity)
  const cappedBucket = Math.min(bucket, 10);
  // Orange with varying opacity based on bucket (0.05 to 0.5 range)
  const opacity = 0.05 + cappedBucket * 0.045;
  return {
    backgroundColor: `rgba(255, 102, 0, ${opacity})`,
    padding: "1px 4px",
    borderRadius: "3px",
  };
}

async function fetchStories(
  page: number,
  storyType: StoryType = "top"
): Promise<{ stories: Story[]; totalStories: number }> {
  const endpoint = STORY_ENDPOINTS[storyType];
  const response = await fetch(`${HN_API_BASE}/${endpoint}`, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });
  const storyIds: number[] = await response.json();

  const startIndex = (page - 1) * STORIES_PER_PAGE;
  const endIndex = startIndex + STORIES_PER_PAGE;
  const idsToFetch = storyIds.slice(startIndex, endIndex);

  const storyPromises = idsToFetch.map(async (id) => {
    const res = await fetch(`${HN_API_BASE}/item/${id}.json`, {
      next: { revalidate: 60 },
    });
    return res.json();
  });

  const fetchedStories = await Promise.all(storyPromises);
  const validStories = fetchedStories.filter(
    (story) => story && !story.deleted && !story.dead
  );

  return { stories: validStories, totalStories: storyIds.length };
}

interface PageProps {
  searchParams: Promise<{ p?: string; type?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.p || "1", 10));
  const typeParam = params.type || "top";
  const storyType: StoryType = Object.keys(STORY_ENDPOINTS).includes(typeParam)
    ? (typeParam as StoryType)
    : "top";
  const { stories, totalStories } = await fetchStories(page, storyType);

  const hasMore = page * STORIES_PER_PAGE < totalStories;
  const startRank = (page - 1) * STORIES_PER_PAGE + 1;

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
        <title>
          {storyType === "top"
            ? "Hacker News"
            : `${storyType.charAt(0).toUpperCase() + storyType.slice(1)} | Hacker News`}
        </title>
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
                          <a href="https://hackernewsx.com/">
                            <Image
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
                              <a href="https://hackernewsx.com/">
                                Hacker News X
                              </a>
                            </b>
                            {" | "}
                            {storyType === "new" ? (
                              <span className="topsel">
                                <a href="/?type=new">new</a>
                              </span>
                            ) : (
                              <a href="/?type=new">new</a>
                            )}
                            {" | "}
                            {storyType === "best" ? (
                              <span className="topsel">
                                <a href="/?type=best">best</a>
                              </span>
                            ) : (
                              <a href="/?type=best">best</a>
                            )}
                            {" | "}
                            {storyType === "ask" ? (
                              <span className="topsel">
                                <a href="/?type=ask">ask</a>
                              </span>
                            ) : (
                              <a href="/?type=ask">ask</a>
                            )}
                            {" | "}
                            {storyType === "show" ? (
                              <span className="topsel">
                                <a href="/?type=show">show</a>
                              </span>
                            ) : (
                              <a href="/?type=show">show</a>
                            )}
                            {" | "}
                            {storyType === "job" ? (
                              <span className="topsel">
                                <a href="/?type=job">jobs</a>
                              </span>
                            ) : (
                              <a href="/?type=job">jobs</a>
                            )}
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
                                        {startRank + index}.
                                      </span>
                                    </td>
                                    <td className="title">
                                      <span className="titleline">
                                        <a
                                          href={
                                            story.url ||
                                            `https://news.ycombinator.com/item?id=${story.id}`
                                          }
                                          style={getScoreHighlightStyle(
                                            story.score
                                          )}
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
                              href={`?type=${storyType}&p=${page + 1}`}
                              className="morelink"
                              style={{ color: "#828282" }}
                            >
                              More
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <Analytics />
      </body>
    </html>
  );
}
