"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

import type { Story, StoryType } from "./news-utils";
import {
  getScoreHighlightStyle,
  getSearchTags,
  getSiteDomain,
  getTimeAgo,
} from "./news-utils";

interface SearchHit {
  objectID: string;
  title?: string;
  url?: string;
  author: string;
  points?: number | null;
  num_comments?: number | null;
  created_at_i: number;
  _tags: string[];
}

interface SearchResponse {
  hits: SearchHit[];
  nbHits: number;
}

interface StoriesResponse {
  stories: Story[];
  page: number;
  hasMore: boolean;
}

interface NewsClientProps {
  children: ReactNode;
  storyType: StoryType;
  page: number;
  stories: Story[];
  hasMore: boolean;
  startRank: number;
  currentTime: number;
}

const SEARCH_API_BASE = "https://hn.algolia.com/api/v1/search";
const SEARCH_BY_DATE_API_BASE = "https://hn.algolia.com/api/v1/search_by_date";
const SEARCH_DEBOUNCE_MS = 250;
const SEARCH_RESULTS_PER_PAGE = 30;

function getSearchPlaceholder(storyType: StoryType): string {
  switch (storyType) {
    case "ask":
      return "search ask";
    case "show":
      return "search show";
    case "job":
      return "search jobs";
    default:
      return "search stories";
  }
}

function getStoryTypeLabel(storyType: StoryType): string {
  switch (storyType) {
    case "ask":
      return "ask posts";
    case "show":
      return "show posts";
    case "job":
      return "jobs";
    default:
      return "stories";
  }
}

function mapSearchHitToStory(hit: SearchHit): Story | null {
  if (!hit.title) {
    return null;
  }

  const id = Number.parseInt(hit.objectID, 10);

  if (Number.isNaN(id)) {
    return null;
  }

  return {
    id,
    title: hit.title,
    url: hit.url,
    score: hit.points ?? 0,
    by: hit.author,
    time: hit.created_at_i,
    descendants: hit.num_comments ?? 0,
    type: hit._tags.includes("job") ? "job" : "story",
  };
}

function StoryRows({
  stories,
  startRank,
  currentTime,
}: {
  stories: Story[];
  startRank: number;
  currentTime: number;
}) {
  return stories.map((story, index) => {
    const site = getSiteDomain(story.url);

    return (
      <tr key={story.id}>
        <td colSpan={2}>
          <table border={0} cellPadding={0} cellSpacing={0} width="100%">
            <tbody>
              <tr className="athing submission" id={String(story.id)}>
                <td align="right" valign="top" className="title rank-cell">
                  <span className="rank">{startRank + index}.</span>
                </td>
                <td className="title">
                  <span className="titleline">
                    <a
                      href={
                        story.url ||
                        `https://news.ycombinator.com/item?id=${story.id}`
                      }
                      style={getScoreHighlightStyle(story.score)}
                    >
                      {story.title}
                    </a>
                    {site && (
                      <span className="sitebit comhead">
                        {" "}(
                        <a
                          href={`https://news.ycombinator.com/from?site=${site}`}
                        >
                          <span className="sitestr">{site}</span>
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
                    <span className="score" id={`score_${story.id}`}>
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
                      <a href={`https://news.ycombinator.com/item?id=${story.id}`}>
                        {getTimeAgo(story.time, currentTime)}
                      </a>
                    </span>
                    <span id={`unv_${story.id}`}></span> |{" "}
                    <a
                      href={`https://news.ycombinator.com/hide?id=${story.id}&goto=news`}
                    >
                      hide
                    </a>{" "}
                    |{" "}
                    <a href={`https://news.ycombinator.com/item?id=${story.id}`}>
                      {story.descendants ?? 0}
                      &nbsp;comments
                    </a>
                  </span>
                </td>
              </tr>
              <tr className="spacer" style={{ height: "5px" }}></tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  });
}

export default function NewsClient({
  children,
  storyType,
  page,
  stories,
  hasMore,
  startRank,
  currentTime,
}: NewsClientProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Story[]>([]);
  const [totalSearchHits, setTotalSearchHits] = useState(0);
  const [orderByRecent, setOrderByRecent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedStories, setFeedStories] = useState(stories);
  const [nextPage, setNextPage] = useState(page + 1);
  const [feedHasMore, setFeedHasMore] = useState(hasMore);
  const [isFeedLoading, setIsFeedLoading] = useState(false);
  const [feedError, setFeedError] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextQuery = query.trim();
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(nextQuery);

      if (nextQuery) {
        setIsLoading(true);
        setError("");
        setSearchResults([]);
        setTotalSearchHits(0);
      } else {
        setIsLoading(false);
        setError("");
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) {
      return;
    }

    const controller = new AbortController();
    const searchParams = new URLSearchParams({
      query: debouncedQuery,
      tags: getSearchTags(storyType),
      hitsPerPage: String(SEARCH_RESULTS_PER_PAGE),
    });
    const searchApiBase = orderByRecent ? SEARCH_BY_DATE_API_BASE : SEARCH_API_BASE;

    fetch(`${searchApiBase}?${searchParams.toString()}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Search failed with status ${response.status}`);
        }

        return (await response.json()) as SearchResponse;
      })
      .then((data) => {
        setSearchResults(
          data.hits
            .map(mapSearchHitToStory)
            .filter((story): story is Story => story !== null)
        );
        setTotalSearchHits(data.nbHits ?? 0);
      })
      .catch((fetchError: unknown) => {
        if (controller.signal.aborted) {
          return;
        }

        console.error(fetchError);
        setSearchResults([]);
        setTotalSearchHits(0);
        setError("Search is unavailable right now.");
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [debouncedQuery, orderByRecent, storyType]);

  const trimmedQuery = query.trim();
  const isSearchMode = trimmedQuery.length > 0;
  const isPendingSearch = isSearchMode && trimmedQuery !== debouncedQuery;

  const loadMore = useCallback(async () => {
    if (isFeedLoading || !feedHasMore || isSearchMode) {
      return;
    }

    setIsFeedLoading(true);
    setFeedError("");

    try {
      const response = await fetch(
        `/api/stories?type=${encodeURIComponent(storyType)}&page=${nextPage}`
      );

      if (!response.ok) {
        throw new Error(`Loading stories failed with status ${response.status}`);
      }

      const data = (await response.json()) as StoriesResponse;
      setFeedStories((current) => [...current, ...data.stories]);
      setNextPage(data.page + 1);
      setFeedHasMore(data.hasMore);
    } catch (fetchError: unknown) {
      console.error(fetchError);
      setFeedError("Couldn’t load more stories.");
    } finally {
      setIsFeedLoading(false);
    }
  }, [feedHasMore, isFeedLoading, isSearchMode, nextPage, storyType]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (
      !sentinel ||
      !feedHasMore ||
      isFeedLoading ||
      feedError ||
      isSearchMode
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void loadMore();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [feedError, feedHasMore, isFeedLoading, isSearchMode, loadMore]);

  const displayedStories = useMemo(
    () =>
      isSearchMode ? (isPendingSearch ? [] : searchResults) : feedStories,
    [feedStories, isPendingSearch, isSearchMode, searchResults]
  );
  const resultLabel = getStoryTypeLabel(storyType);

  return (
    <>
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
                <td style={{ width: "25px", paddingRight: "4px" }}>{children}</td>
                <td style={{ lineHeight: "12pt", height: "10px" }}>
                  <span className="pagetop">
                    <b className="hnname">
                      <a href="https://hackernewsx.com/">Hacker News X</a>
                    </b>
                    {" | "}
                    {storyType === "new" ? (
                      <span className="topsel">
                        <Link href="/?type=new">new</Link>
                      </span>
                    ) : (
                      <Link href="/?type=new">new</Link>
                    )}
                    {" | "}
                    {storyType === "best" ? (
                      <span className="topsel">
                        <Link href="/?type=best">best</Link>
                      </span>
                    ) : (
                      <Link href="/?type=best">best</Link>
                    )}
                    {" | "}
                    {storyType === "ask" ? (
                      <span className="topsel">
                        <Link href="/?type=ask">ask</Link>
                      </span>
                    ) : (
                      <Link href="/?type=ask">ask</Link>
                    )}
                    {" | "}
                    {storyType === "show" ? (
                      <span className="topsel">
                        <Link href="/?type=show">show</Link>
                      </span>
                    ) : (
                      <Link href="/?type=show">show</Link>
                    )}
                    {" | "}
                     {storyType === "job" ? (
                       <span className="topsel">
                         <Link href="/?type=job">jobs</Link>
                       </span>
                     ) : (
                       <Link href="/?type=job">jobs</Link>
                     )}
                     {" | "}
                     <a
                       href="https://github.com/pretzelai/hackernewsx"
                       target="_blank"
                       rel="noreferrer"
                     >
                       Github
                     </a>
                   </span>
                 </td>
                <td className="search-nav-cell">
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={getSearchPlaceholder(storyType)}
                    aria-label={`Search ${resultLabel}`}
                    className="hn-search-input"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr style={{ height: "10px" }}></tr>

      <tr id="bigbox">
        <td>
          <table border={0} cellPadding={0} cellSpacing={0} width="100%">
            <tbody>
              {query.trim() && (
                <tr>
                  <td colSpan={2} className="subtext search-status-row">
                    {isPendingSearch || isLoading ? (
                      <>Searching {resultLabel}…</>
                    ) : error ? (
                      <span className="ca2">{error}</span>
                    ) : debouncedQuery ? (
                      <>
                        Found {new Intl.NumberFormat().format(totalSearchHits)} {resultLabel}
                        {` for “${debouncedQuery}”`}
                        {" "}
                        <button
                          type="button"
                          className="search-sort-button"
                          aria-pressed={orderByRecent}
                          onClick={() => {
                            setOrderByRecent((current) => !current);
                            setIsLoading(true);
                            setError("");
                          }}
                        >
                          {orderByRecent ? "Most recent first ✓" : "Most recent first"}
                        </button>
                      </>
                    ) : (
                      <>Searching {resultLabel}…</>
                    )}
                  </td>
                </tr>
              )}

              {!error && isSearchMode && displayedStories.length === 0 && !isPendingSearch && !isLoading && (
                <tr>
                  <td colSpan={2} className="subtext search-status-row">
                    No {resultLabel} found for “{debouncedQuery}”.
                  </td>
                </tr>
              )}

              <StoryRows
                stories={displayedStories}
                startRank={isSearchMode ? 1 : startRank}
                currentTime={currentTime}
              />

              {!isSearchMode && (
                <tr>
                  <td colSpan={2} className="infinite-scroll-status">
                    <div
                      ref={sentinelRef}
                      className="infinite-scroll-sentinel"
                    />
                    {isFeedLoading && <span>Loading more stories…</span>}
                    {feedError && (
                      <span>
                        {feedError}{" "}
                        <button type="button" onClick={() => void loadMore()}>
                          Try again
                        </button>
                      </span>
                    )}
                    {!feedHasMore && <span>You’ve reached the end.</span>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
