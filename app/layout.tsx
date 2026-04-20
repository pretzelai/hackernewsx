import type { Metadata } from "next";
import "./globals.css";
import "./news.css";

export const metadata: Metadata = {
  title: "Hacker News X",
  description: "Enhanced HN Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
