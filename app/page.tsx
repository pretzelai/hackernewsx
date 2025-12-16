interface Article {
  id: number;
  title: string;
  url: string;
  site: string;
  points: number;
  author: string;
  timeAgo: string;
  comments: number;
}

const articles: Article[] = [
  {
    id: 46288371,
    title: "This is not the future",
    url: "https://blog.mathieui.net/this-is-not-the-future.html",
    site: "mathieui.net",
    points: 234,
    author: "ericdanielski",
    timeAgo: "1 hour ago",
    comments: 91,
  },
  {
    id: 46287542,
    title: "Show HN: I built a real-time collaborative code editor",
    url: "https://github.com/example/collab-editor",
    site: "github.com",
    points: 187,
    author: "devbuilder",
    timeAgo: "2 hours ago",
    comments: 64,
  },
  {
    id: 46286891,
    title: "Why SQLite is the most deployed database in the world",
    url: "https://sqlite.org/mostdeployed.html",
    site: "sqlite.org",
    points: 312,
    author: "drhsqlite",
    timeAgo: "3 hours ago",
    comments: 145,
  },
  {
    id: 46285723,
    title: "The decline of usability in modern software",
    url: "https://medium.com/@uxdesigner/decline-usability",
    site: "medium.com",
    points: 156,
    author: "uxenthusiast",
    timeAgo: "4 hours ago",
    comments: 203,
  },
  {
    id: 46284912,
    title: "Rust 2.0 announced with major performance improvements",
    url: "https://blog.rust-lang.org/2025/12/rust-2.html",
    site: "rust-lang.org",
    points: 521,
    author: "rustacean",
    timeAgo: "5 hours ago",
    comments: 287,
  },
  {
    id: 46283456,
    title: "How we scaled our startup to 1M users with a $50/month server",
    url: "https://startupstory.dev/scaling-cheap",
    site: "startupstory.dev",
    points: 423,
    author: "frugalfounder",
    timeAgo: "6 hours ago",
    comments: 178,
  },
  {
    id: 46282134,
    title: "The mathematics behind neural network optimization",
    url: "https://arxiv.org/abs/2025.12345",
    site: "arxiv.org",
    points: 89,
    author: "mlresearcher",
    timeAgo: "7 hours ago",
    comments: 42,
  },
  {
    id: 46281567,
    title: "Apple announces Vision Pro 2 with 8K displays",
    url: "https://www.apple.com/newsroom/vision-pro-2",
    site: "apple.com",
    points: 678,
    author: "applefan",
    timeAgo: "8 hours ago",
    comments: 534,
  },
];

export default function Home() {
  return (
    <html lang="en" data-op="news">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
                        <td style={{ width: "18px", paddingRight: "4px" }}>
                          <a href="https://news.ycombinator.com/">
                            <img
                              src="y18.svg"
                              width="18"
                              height="18"
                              style={{
                                border: "1px white solid",
                                display: "block",
                              }}
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
                  <table border={0} cellPadding={0} cellSpacing={0}>
                    <tbody>
                      {articles.map((article, index) => (
                        <>
                          <tr
                            key={article.id}
                            className="athing submission"
                            id={String(article.id)}
                          >
                            <td align="right" valign="top" className="title">
                              <span className="rank">{index + 1}.</span>
                            </td>
                            <td valign="top" className="votelinks">
                              <center>
                                <a
                                  id={`up_${article.id}`}
                                  href={`https://news.ycombinator.com/vote?id=${article.id}&how=up&goto=news`}
                                >
                                  <div
                                    className="votearrow"
                                    title="upvote"
                                  ></div>
                                </a>
                              </center>
                            </td>
                            <td className="title">
                              <span className="titleline">
                                <a href={article.url}>{article.title}</a>
                                <span className="sitebit comhead">
                                  {" "}
                                  (
                                  <a
                                    href={`https://news.ycombinator.com/from?site=${article.site}`}
                                  >
                                    <span className="sitestr">
                                      {article.site}
                                    </span>
                                  </a>
                                  )
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr key={`${article.id}-subtext`}>
                            <td colSpan={2}></td>
                            <td className="subtext">
                              <span className="subline">
                                <span
                                  className="score"
                                  id={`score_${article.id}`}
                                >
                                  {article.points} points
                                </span>{" "}
                                by{" "}
                                <a
                                  href={`https://news.ycombinator.com/user?id=${article.author}`}
                                  className="hnuser"
                                >
                                  {article.author}
                                </a>{" "}
                                <span className="age">
                                  <a
                                    href={`https://news.ycombinator.com/item?id=${article.id}`}
                                  >
                                    {article.timeAgo}
                                  </a>
                                </span>
                                <span id={`unv_${article.id}`}></span> |{" "}
                                <a
                                  href={`https://news.ycombinator.com/hide?id=${article.id}&goto=news`}
                                >
                                  hide
                                </a>{" "}
                                |{" "}
                                <a
                                  href={`https://news.ycombinator.com/item?id=${article.id}`}
                                >
                                  {article.comments}&nbsp;comments
                                </a>
                              </span>
                            </td>
                          </tr>
                          <tr
                            key={`${article.id}-spacer`}
                            className="spacer"
                            style={{ height: "5px" }}
                          ></tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </body>
    </html>
  );
}
