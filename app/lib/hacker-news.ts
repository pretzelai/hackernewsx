import type { Story, StoryType } from "../news-utils";
import {
  HN_API_BASE,
  STORIES_PER_PAGE,
  STORY_ENDPOINTS,
} from "../news-utils";

interface HackerNewsStory extends Story {
  deleted?: boolean;
  dead?: boolean;
}

export function isStoryType(value: string): value is StoryType {
  return value in STORY_ENDPOINTS;
}

async function fetchHackerNewsJson<T>(path: string): Promise<T> {
  const response = await fetch(`${HN_API_BASE}/${path}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Hacker News request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchStories(
  page: number,
  storyType: StoryType = "top"
): Promise<{ stories: Story[]; totalStories: number; fetchedAt: number }> {
  const storyIds = await fetchHackerNewsJson<number[]>(
    STORY_ENDPOINTS[storyType]
  );
  const startIndex = (page - 1) * STORIES_PER_PAGE;
  const idsToFetch = storyIds.slice(startIndex, startIndex + STORIES_PER_PAGE);

  const fetchedStories = await Promise.all(
    idsToFetch.map((id) =>
      fetchHackerNewsJson<HackerNewsStory | null>(`item/${id}.json`)
    )
  );
  const stories = fetchedStories.filter(
    (story): story is HackerNewsStory =>
      Boolean(story && !story.deleted && !story.dead)
  );

  return {
    stories,
    totalStories: storyIds.length,
    fetchedAt: Math.floor(Date.now() / 1000),
  };
}
