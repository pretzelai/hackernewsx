import { NextRequest, NextResponse } from "next/server";
import {
  fetchStories,
  isStoryType,
} from "../../lib/hacker-news";
import { STORIES_PER_PAGE } from "../../news-utils";

export async function GET(request: NextRequest) {
  const pageParam = request.nextUrl.searchParams.get("page") ?? "1";
  const typeParam = request.nextUrl.searchParams.get("type") ?? "top";
  const page = Number(pageParam);

  if (!Number.isInteger(page) || page < 1 || !isStoryType(typeParam)) {
    return NextResponse.json(
      { error: "Invalid page or story type" },
      { status: 400 }
    );
  }

  try {
    const { stories, totalStories, fetchedAt } = await fetchStories(
      page,
      typeParam
    );

    return NextResponse.json({
      stories,
      page,
      hasMore: page * STORIES_PER_PAGE < totalStories,
      fetchedAt,
    });
  } catch (error) {
    console.error("Unable to fetch Hacker News stories", error);
    return NextResponse.json(
      { error: "Unable to load more stories" },
      { status: 502 }
    );
  }
}
