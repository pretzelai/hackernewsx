import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import NewsClient from "./news-client";
import { fetchStories, isStoryType } from "./lib/hacker-news";
import { STORIES_PER_PAGE } from "./news-utils";

interface PageProps {
  searchParams: Promise<{ p?: string; type?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const parsedPage = Number.parseInt(params.p || "1", 10);
  const page = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const typeParam = params.type || "top";
  const storyType = isStoryType(typeParam) ? typeParam : "top";
  const { stories, totalStories, fetchedAt } = await fetchStories(
    page,
    storyType
  );

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
                key={`${storyType}-${page}`}
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
