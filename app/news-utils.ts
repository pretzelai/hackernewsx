import type { CSSProperties } from "react";

export interface Story {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number;
  descendants?: number;
  type: string;
}

export type StoryType = "top" | "new" | "best" | "ask" | "show" | "job";

export const STORIES_PER_PAGE = 90;
export const HN_API_BASE = "https://hacker-news.firebaseio.com/v0";

export const STORY_ENDPOINTS: Record<StoryType, string> = {
  top: "topstories.json",
  new: "newstories.json",
  best: "beststories.json",
  ask: "askstories.json",
  show: "showstories.json",
  job: "jobstories.json",
};

export function getTimeAgo(
  timestamp: number,
  now = Math.floor(Date.now() / 1000)
): string {
  const diff = Math.max(0, now - timestamp);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  return `${Math.floor(diff / 2592000)} months ago`;
}

export function getSiteDomain(url?: string): string {
  if (!url) return "";

  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function getScoreHighlightStyle(score: number): CSSProperties {
  const bucket = Math.floor(score / 50);
  const cappedBucket = Math.min(bucket, 10);
  const opacity = 0.05 + cappedBucket * 0.045;

  return {
    backgroundColor: `rgba(255, 102, 0, ${opacity})`,
    padding: "1px 4px",
    borderRadius: "3px",
  };
}

export function getSearchTags(storyType: StoryType): string {
  switch (storyType) {
    case "ask":
      return "ask_hn";
    case "show":
      return "show_hn";
    case "job":
      return "job";
    default:
      return "story";
  }
}
