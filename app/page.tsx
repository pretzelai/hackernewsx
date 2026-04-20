import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import NewsClient from "./news-client";
import type { Story, StoryType } from "./news-utils";
import {
  HN_API_BASE,
  STORIES_PER_PAGE,
  STORY_ENDPOINTS,
} from "./news-utils";

async function fetchStories(
  page: number,
  storyType: StoryType = "top"
): Promise<{ stories: Story[]; totalStories: number; fetchedAt: number }> {
  const endpoint = STORY_ENDPOINTS[storyType];
  const fetchedAt = Math.floor(Date.now() / 1000);
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

  return { stories: validStories, totalStories: storyIds.length, fetchedAt };
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
  const { stories, totalStories, fetchedAt } = await fetchStories(page, storyType);

  const hasMore = page * STORIES_PER_PAGE < totalStories;
  const startRank = (page - 1) * STORIES_PER_PAGE + 1;

  return (
    <html lang="en" data-op="news">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              <NewsClient
                storyType={storyType}
                page={page}
                stories={stories}
                hasMore={hasMore}
                startRank={startRank}
                currentTime={fetchedAt}
              >
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
              </NewsClient>
            </tbody>
          </table>
        </center>
        <Analytics />
      </body>
    </html>
  );
}
