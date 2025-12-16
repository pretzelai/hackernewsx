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
                                Hacker News
                              </a>
                            </b>
                            <a href="https://news.ycombinator.com/newest">
                              new
                            </a>{" "}
                            |
                            <a href="https://news.ycombinator.com/front">
                              past
                            </a>{" "}
                            |
                            <a href="https://news.ycombinator.com/newcomments">
                              comments
                            </a>
                            | <a href="https://news.ycombinator.com/ask">ask</a>{" "}
                            |
                            <a href="https://news.ycombinator.com/show">show</a>{" "}
                            |
                            <a href="https://news.ycombinator.com/jobs">jobs</a>{" "}
                            |
                            <a
                              href="https://news.ycombinator.com/submit"
                              rel="nofollow"
                            >
                              submit
                            </a>
                          </span>
                        </td>
                        <td style={{ textAlign: "right", paddingRight: "4px" }}>
                          <span className="pagetop">
                            <a href="https://news.ycombinator.com/login?goto=news">
                              login
                            </a>
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
                      <tr className="athing submission" id="46288371">
                        <td align="right" valign="top" className="title">
                          <span className="rank">1.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288371"
                              href="https://news.ycombinator.com/vote?id=46288371&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://blog.mathieui.net/this-is-not-the-future.html">
                              This is not the future
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=mathieui.net">
                                <span className="sitestr">mathieui.net</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288371">
                              234 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=ericdanielski"
                              className="hnuser"
                            >
                              ericdanielski
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:42:24 1765892544"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288371">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288371"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288371&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288371">
                              91&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288415">
                        <td align="right" valign="top" className="title">
                          <span className="rank">2.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288415"
                              href="https://news.ycombinator.com/vote?id=46288415&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.tum.de/en/news-and-events/all-news/press-releases/details/40-percent-of-mri-signals-do-not-correspond-to-actual-brain-activity">
                              40 percent of fMRI signals do not correspond to
                              actual brain activity
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=tum.de">
                                <span className="sitestr">tum.de</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288415">
                              113 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=geox"
                              className="hnuser"
                            >
                              geox
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:46:57 1765892817"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288415">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288415"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288415&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288415">
                              45&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288291">
                        <td align="right" valign="top" className="title">
                          <span className="rank">3.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288291"
                              href="https://news.ycombinator.com/vote?id=46288291&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://blog.guillaume-gomez.fr/articles/2025-12-15+Rust+GCC+backend%3A+Why+and+how">
                              Rust GCC back end: Why and how
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=guillaume-gomez.fr">
                                <span className="sitestr">
                                  guillaume-gomez.fr
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288291">
                              43 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=ahlCVA"
                              className="hnuser"
                            >
                              ahlCVA
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:33:25 1765892005"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288291">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288291"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288291&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288291">
                              16&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46276826">
                        <td align="right" valign="top" className="title">
                          <span className="rank">4.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46276826"
                              href="https://news.ycombinator.com/vote?id=46276826&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://ashvardanian.com/posts/search-utf8/">
                              Full Unicode Search at 50× ICU Speed with AVX‑512
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=ashvardanian.com">
                                <span className="sitestr">
                                  ashvardanian.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46276826">
                              82 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=ashvardanian"
                              className="hnuser"
                            >
                              ashvardanian
                            </a>
                            <span
                              className="age"
                              title="2025-12-15T16:42:55 1765816975"
                            >
                              <a href="https://news.ycombinator.com/item?id=46276826">
                                3 hours ago
                              </a>
                            </span>
                            <span id="unv_46276826"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46276826&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46276826">
                              38&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288351">
                        <td align="right" valign="top" className="title">
                          <span className="rank">5.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288351"
                              href="https://news.ycombinator.com/vote?id=46288351&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://vilgot-huhn.github.io/mywebsite/posts/20251206_p_circle_lindley/">
                              I don&apos;t think Lindley&apos;s paradox supports
                              p-circling
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=vilgot-huhn.github.io">
                                <span className="sitestr">
                                  vilgot-huhn.github.io
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288351">
                              15 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=speckx"
                              className="hnuser"
                            >
                              speckx
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:40:02 1765892402"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288351">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288351"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288351&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288351">
                              1&nbsp;comment
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288185">
                        <td align="right" valign="top" className="title">
                          <span className="rank">6.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288185"
                              href="https://news.ycombinator.com/vote?id=46288185&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.sherryning.com/p/youre-overspending-because-you-lack-values">
                              You&apos;re overspending because you lack values
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=sherryning.com">
                                <span className="sitestr">sherryning.com</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288185">
                              39 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=speckx"
                              className="hnuser"
                            >
                              speckx
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:20:51 1765891251"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288185">
                                2 hours ago
                              </a>
                            </span>
                            <span id="unv_46288185"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288185&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288185">
                              19&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46284658">
                        <td align="right" valign="top" className="title">
                          <span className="rank">7.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46284658"
                              href="https://news.ycombinator.com/vote?id=46284658&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://apple.github.io/ml-sharp/">
                              SHARP, an approach to photorealistic view
                              synthesis from a single image
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=apple.github.io">
                                <span className="sitestr">apple.github.io</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46284658">
                              407 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=dvrp"
                              className="hnuser"
                            >
                              dvrp
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T04:06:51 1765858011"
                            >
                              <a href="https://news.ycombinator.com/item?id=46284658">
                                11 hours ago
                              </a>
                            </span>
                            <span id="unv_46284658"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46284658&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46284658">
                              93&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288286">
                        <td align="right" valign="top" className="title">
                          <span className="rank">8.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288286"
                              href="https://news.ycombinator.com/vote?id=46288286&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://h4x0r.org/ring/">
                              Put a ring on it: a lock-free MPMC ring buffer
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=h4x0r.org">
                                <span className="sitestr">h4x0r.org</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288286">
                              30 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=signa11"
                              className="hnuser"
                            >
                              signa11
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:32:42 1765891962"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288286">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288286"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288286&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288286">
                              16&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46286407">
                        <td align="right" valign="top" className="title">
                          <span className="rank">9.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46286407"
                              href="https://news.ycombinator.com/vote?id=46286407&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://a2ui.org/">
                              A2UI: A Protocol for Agent-Driven Interfaces
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=a2ui.org">
                                <span className="sitestr">a2ui.org</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46286407">
                              98 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=makeramen"
                              className="hnuser"
                            >
                              makeramen
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T09:16:31 1765876591"
                            >
                              <a href="https://news.ycombinator.com/item?id=46286407">
                                6 hours ago
                              </a>
                            </span>
                            <span id="unv_46286407"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46286407&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46286407">
                              30&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288024">
                        <td align="right" valign="top" className="title">
                          <span className="rank">10.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288024"
                              href="https://news.ycombinator.com/vote?id=46288024&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://gamehistory.org/segachannel/">
                              Sega Channel: VGHF Recovers over 100 Sega Channel
                              ROMs (and More)
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=gamehistory.org">
                                <span className="sitestr">gamehistory.org</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288024">
                              30 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=wicket"
                              className="hnuser"
                            >
                              wicket
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:07:14 1765890434"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288024">
                                2 hours ago
                              </a>
                            </span>
                            <span id="unv_46288024"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288024&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288024">
                              2&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46285376">
                        <td align="right" valign="top" className="title">
                          <span className="rank">11.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46285376"
                              href="https://news.ycombinator.com/vote?id=46285376&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.bbc.com/news/articles/ckgz318y8elo">
                              Children with cancer scammed out of millions
                              fundraised for their treatment
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=bbc.com">
                                <span className="sitestr">bbc.com</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46285376">
                              419 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=1659447091"
                              className="hnuser"
                            >
                              1659447091
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T06:17:37 1765865857"
                            >
                              <a href="https://news.ycombinator.com/item?id=46285376">
                                9 hours ago
                              </a>
                            </span>
                            <span id="unv_46285376"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46285376&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46285376">
                              332&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46289115">
                        <td align="right" valign="top" className="title">
                          <span className="rank">12.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46289115"
                              href="https://news.ycombinator.com/vote?id=46289115&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.theverge.com/tech/845216/mozilla-ceo-anthony-enzor-demeo">
                              Mozilla&apos;s new CEO is doubling down on an AI
                              future for Firefox
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=theverge.com">
                                <span className="sitestr">theverge.com</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46289115">
                              20 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=latexr"
                              className="hnuser"
                            >
                              latexr
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T14:43:18 1765896198"
                            >
                              <a href="https://news.ycombinator.com/item?id=46289115">
                                38 minutes ago
                              </a>
                            </span>
                            <span id="unv_46289115"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46289115&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46289115">
                              25&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span
                            className="age"
                            title="2025-12-16T12:01:55 1765886515"
                          >
                            <a href="https://news.ycombinator.com/item?id=46287521">
                              3 hours ago
                            </a>
                          </span>
                          |
                          <a href="https://news.ycombinator.com/hide?id=46287521&amp;goto=news">
                            hide
                          </a>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46288414">
                        <td align="right" valign="top" className="title">
                          <span className="rank">14.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46288414"
                              href="https://news.ycombinator.com/vote?id=46288414&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a
                              href="https://typographyforlawyers.com/a-brief-history-of-times-new-roman.html"
                              rel="nofollow"
                            >
                              A brief history of Times New Roman
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=typographyforlawyers.com">
                                <span className="sitestr">
                                  typographyforlawyers.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46288414">
                              17 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=tosh"
                              className="hnuser"
                            >
                              tosh
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T13:46:55 1765892815"
                            >
                              <a href="https://news.ycombinator.com/item?id=46288414">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46288414"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46288414&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46288414">
                              3&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46256504">
                        <td align="right" valign="top" className="title">
                          <span className="rank">15.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46256504"
                              href="https://news.ycombinator.com/vote?id=46256504&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://github.com/cmontella/purrtran">
                              Purrtran – ᓚᘏᗢ – A Programming Language for Cat
                              People
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=github.com/cmontella">
                                <span className="sitestr">
                                  github.com/cmontella
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46256504">
                              21 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=simonpure"
                              className="hnuser"
                            >
                              simonpure
                            </a>
                            <span
                              className="age"
                              title="2025-12-13T18:02:46 1765648966"
                            >
                              <a href="https://news.ycombinator.com/item?id=46256504">
                                1 hour ago
                              </a>
                            </span>
                            <span id="unv_46256504"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46256504&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46256504">
                              2&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46226779">
                        <td align="right" valign="top" className="title">
                          <span className="rank">16.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46226779"
                              href="https://news.ycombinator.com/vote?id=46226779&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://blog.julik.nl/2025/12/a-trap-with-global-ids">
                              Be Careful with GIDs in Rails
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=julik.nl">
                                <span className="sitestr">julik.nl</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46226779">
                              23 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=julik"
                              className="hnuser"
                            >
                              julik
                            </a>
                            <span
                              className="age"
                              title="2025-12-11T02:03:58 1765418638"
                            >
                              <a href="https://news.ycombinator.com/item?id=46226779">
                                4 hours ago
                              </a>
                            </span>
                            <span id="unv_46226779"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46226779&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46226779">
                              13&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46283016">
                        <td align="right" valign="top" className="title">
                          <span className="rank">17.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46283016"
                              href="https://news.ycombinator.com/vote?id=46283016&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://quill-os.org/">
                              Quill OS: An open-source OS for Kobo&apos;s
                              eReaders
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=quill-os.org">
                                <span className="sitestr">quill-os.org</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46283016">
                              365 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=Curiositry"
                              className="hnuser"
                            >
                              Curiositry
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T00:22:41 1765844561"
                            >
                              <a href="https://news.ycombinator.com/item?id=46283016">
                                14 hours ago
                              </a>
                            </span>
                            <span id="unv_46283016"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46283016&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46283016">
                              116&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46285319">
                        <td align="right" valign="top" className="title">
                          <span className="rank">18.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46285319"
                              href="https://news.ycombinator.com/vote?id=46285319&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://github.com/scallyw4g/bonsai">
                              Bonsai: A Voxel Engine, from scratch
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=github.com/scallyw4g">
                                <span className="sitestr">
                                  github.com/scallyw4g
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46285319">
                              139 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=jesse__"
                              className="hnuser"
                            >
                              jesse__
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T06:06:43 1765865203"
                            >
                              <a href="https://news.ycombinator.com/item?id=46285319">
                                9 hours ago
                              </a>
                            </span>
                            <span id="unv_46285319"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46285319&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46285319">
                              24&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46286666">
                        <td align="right" valign="top" className="title">
                          <span className="rank">19.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46286666"
                              href="https://news.ycombinator.com/vote?id=46286666&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://github.com/mantisfury/ArkhamMirror">
                              ArkhamMirror: Airgapped investigation platform
                              with CIA-style hypothesis testing
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=github.com/mantisfury">
                                <span className="sitestr">
                                  github.com/mantisfury
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46286666">
                              59 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=ArkhamMirror"
                              className="hnuser"
                            >
                              ArkhamMirror
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T09:51:31 1765878691"
                            >
                              <a href="https://news.ycombinator.com/item?id=46286666">
                                5 hours ago
                              </a>
                            </span>
                            <span id="unv_46286666"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46286666&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46286666">
                              26&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46227641">
                        <td align="right" valign="top" className="title">
                          <span className="rank">20.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46227641"
                              href="https://news.ycombinator.com/vote?id=46227641&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.psc.edu/hpn-ssh-home/">
                              High Performance SSH/SCP
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=psc.edu">
                                <span className="sitestr">psc.edu</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46227641">
                              47 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=gslin"
                              className="hnuser"
                            >
                              gslin
                            </a>
                            <span
                              className="age"
                              title="2025-12-11T04:23:46 1765427026"
                            >
                              <a href="https://news.ycombinator.com/item?id=46227641">
                                6 hours ago
                              </a>
                            </span>
                            <span id="unv_46227641"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46227641&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46227641">
                              24&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46285535">
                        <td align="right" valign="top" className="title">
                          <span className="rank">21.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46285535"
                              href="https://news.ycombinator.com/vote?id=46285535&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://medium.com/@roman.f/a-linear-time-alternative-to-t-sne-for-dimensionality-reduction-and-fast-visualisation-5cd1a7219d6f">
                              A linear-time alternative for Dimensionality
                              Reduction and fast visualisation
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=medium.com/roman.f">
                                <span className="sitestr">
                                  medium.com/roman.f
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46285535">
                              86 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=romanfll"
                              className="hnuser"
                            >
                              romanfll
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T06:47:09 1765867629"
                            >
                              <a href="https://news.ycombinator.com/item?id=46285535">
                                8 hours ago
                              </a>
                            </span>
                            <span id="unv_46285535"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46285535&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46285535">
                              28&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46284897">
                        <td align="right" valign="top" className="title">
                          <span className="rank">22.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46284897"
                              href="https://news.ycombinator.com/vote?id=46284897&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/">
                              Erdős Problem #1026
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=terrytao.wordpress.com">
                                <span className="sitestr">
                                  terrytao.wordpress.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46284897">
                              129 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=tzury"
                              className="hnuser"
                            >
                              tzury
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T04:49:03 1765860543"
                            >
                              <a href="https://news.ycombinator.com/item?id=46284897">
                                10 hours ago
                              </a>
                            </span>
                            <span id="unv_46284897"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46284897&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46284897">
                              18&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46241500">
                        <td align="right" valign="top" className="title">
                          <span className="rank">23.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46241500"
                              href="https://news.ycombinator.com/vote?id=46241500&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://blog.owenlacey.dev/posts/are-you-the-one-is-free-money/">
                              “Are you the one?” is free money
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=owenlacey.dev">
                                <span className="sitestr">owenlacey.dev</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46241500">
                              410 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=samwho"
                              className="hnuser"
                            >
                              samwho
                            </a>
                            <span
                              className="age"
                              title="2025-12-12T06:47:45 1765522065"
                            >
                              <a href="https://news.ycombinator.com/item?id=46241500">
                                18 hours ago
                              </a>
                            </span>
                            <span id="unv_46241500"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46241500&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46241500">
                              102&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46284266">
                        <td align="right" valign="top" className="title">
                          <span className="rank">24.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46284266"
                              href="https://news.ycombinator.com/vote?id=46284266&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://www.koi.ai/blog/urban-vpn-browser-extension-ai-conversations-data-collection">
                              8M users&apos; AI conversations sold for profit by
                              &quot;privacy&quot; extensions
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=koi.ai">
                                <span className="sitestr">koi.ai</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46284266">
                              658 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=takira"
                              className="hnuser"
                            >
                              takira
                            </a>
                            <span
                              className="age"
                              title="2025-12-16T03:03:49 1765854229"
                            >
                              <a href="https://news.ycombinator.com/item?id=46284266">
                                12 hours ago
                              </a>
                            </span>
                            <span id="unv_46284266"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46284266&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46284266">
                              210&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46221016">
                        <td align="right" valign="top" className="title">
                          <span className="rank">25.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46221016"
                              href="https://news.ycombinator.com/vote?id=46221016&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://highimpactengineering.substack.com/p/the-illusion-of-shared-understanding">
                              Internal RFCs saved us months of wasted work
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=highimpactengineering.substack.com">
                                <span className="sitestr">
                                  highimpactengineering.substack.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46221016">
                              74 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=romannikolaev"
                              className="hnuser"
                            >
                              romannikolaev
                            </a>
                            <span
                              className="age"
                              title="2025-12-10T17:57:43 1765389463"
                            >
                              <a href="https://news.ycombinator.com/item?id=46221016">
                                8 hours ago
                              </a>
                            </span>
                            <span id="unv_46221016"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46221016&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46221016">
                              52&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46235699">
                        <td align="right" valign="top" className="title">
                          <span className="rank">26.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46235699"
                              href="https://news.ycombinator.com/vote?id=46235699&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://lowkpro.com/blog/creating-c-closures-from-lua-closures.html">
                              Creating C closures from Lua closures
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=lowkpro.com">
                                <span className="sitestr">lowkpro.com</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46235699">
                              47 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=publicdebates"
                              className="hnuser"
                            >
                              publicdebates
                            </a>
                            <span
                              className="age"
                              title="2025-12-11T19:08:33 1765480113"
                            >
                              <a href="https://news.ycombinator.com/item?id=46235699">
                                10 hours ago
                              </a>
                            </span>
                            <span id="unv_46235699"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46235699&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46235699">
                              11&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46282679">
                        <td align="right" valign="top" className="title">
                          <span className="rank">27.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46282679"
                              href="https://news.ycombinator.com/vote?id=46282679&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://rkblog.dev/posts/pc-hardware/pc-on-arm/x86_versus_arm_native_game/">
                              Native vs. emulation: World of Warcraft game
                              performance on Snapdragon X Elite
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=rkblog.dev">
                                <span className="sitestr">rkblog.dev</span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46282679">
                              94 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=geekman7473"
                              className="hnuser"
                            >
                              geekman7473
                            </a>
                            <span
                              className="age"
                              title="2025-12-15T23:47:37 1765842457"
                            >
                              <a href="https://news.ycombinator.com/item?id=46282679">
                                13 hours ago
                              </a>
                            </span>
                            <span id="unv_46282679"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46282679&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46282679">
                              42&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46212450">
                        <td align="right" valign="top" className="title">
                          <span className="rank">28.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46212450"
                              href="https://news.ycombinator.com/vote?id=46212450&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a
                              href="https://www.scientificamerican.com/article/mathematicians-crack-a-fractal-conjecture-on-chaos/"
                              rel="nofollow"
                            >
                              Mathematicians Crack a Fractal Conjecture on Chaos
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=scientificamerican.com">
                                <span className="sitestr">
                                  scientificamerican.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46212450">
                              5 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=mikhael"
                              className="hnuser"
                            >
                              mikhael
                            </a>
                            <span
                              className="age"
                              title="2025-12-10T00:10:20 1765325420"
                            >
                              <a href="https://news.ycombinator.com/item?id=46212450">
                                3 hours ago
                              </a>
                            </span>
                            <span id="unv_46212450"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46212450&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46212450">
                              3&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46281288">
                        <td align="right" valign="top" className="title">
                          <span className="rank">29.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46281288"
                              href="https://news.ycombinator.com/vote?id=46281288&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://andrewmccalip.com/space-datacenters">
                              Economics of Orbital vs. Terrestrial Data Centers
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=andrewmccalip.com">
                                <span className="sitestr">
                                  andrewmccalip.com
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46281288">
                              157 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=flinner"
                              className="hnuser"
                            >
                              flinner
                            </a>
                            <span
                              className="age"
                              title="2025-12-15T21:56:03 1765835763"
                            >
                              <a href="https://news.ycombinator.com/item?id=46281288">
                                17 hours ago
                              </a>
                            </span>
                            <span id="unv_46281288"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46281288&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46281288">
                              211&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="athing submission" id="46174949">
                        <td align="right" valign="top" className="title">
                          <span className="rank">30.</span>
                        </td>
                        <td valign="top" className="votelinks">
                          <center>
                            <a
                              id="up_46174949"
                              href="https://news.ycombinator.com/vote?id=46174949&amp;how=up&amp;goto=news"
                            >
                              <div className="votearrow" title="upvote"></div>
                            </a>
                          </center>
                        </td>
                        <td className="title">
                          <span className="titleline">
                            <a href="https://github.com/KaiPereira/Cheetah-MX4-Mini">
                              Show HN: I designed my own 3D printer motherboard
                            </a>
                            <span className="sitebit comhead">
                              (
                              <a href="https://news.ycombinator.com/from?site=github.com/kaipereira">
                                <span className="sitestr">
                                  github.com/kaipereira
                                </span>
                              </a>
                              )
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="subtext">
                          <span className="subline">
                            <span className="score" id="score_46174949">
                              98 points
                            </span>
                            by
                            <a
                              href="https://news.ycombinator.com/user?id=kaipereira"
                              className="hnuser"
                            >
                              kaipereira
                            </a>
                            <span
                              className="age"
                              title="2025-12-06T17:21:03 1765041663"
                            >
                              <a href="https://news.ycombinator.com/item?id=46174949">
                                13 hours ago
                              </a>
                            </span>
                            <span id="unv_46174949"></span> |
                            <a href="https://news.ycombinator.com/hide?id=46174949&amp;goto=news">
                              hide
                            </a>
                            |
                            <a href="https://news.ycombinator.com/item?id=46174949">
                              26&nbsp;comments
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="spacer" style={{ height: "5px" }}></tr>
                      <tr className="morespace" style={{ height: "10px" }}></tr>
                      <tr>
                        <td colSpan={2}></td>
                        <td className="title">
                          <a
                            href="https://news.ycombinator.com/?p=2"
                            className="morelink"
                            rel="next"
                          >
                            More
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellSpacing={0} cellPadding={1}>
                    <tbody>
                      <tr>
                        <td style={{ backgroundColor: "#ff6600" }}></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <center>
                    <span className="yclinks">
                      <a href="https://news.ycombinator.com/newsguidelines.html">
                        Guidelines
                      </a>
                      |
                      <a href="https://news.ycombinator.com/newsfaq.html">
                        FAQ
                      </a>{" "}
                      |<a href="https://news.ycombinator.com/lists">Lists</a> |
                      <a href="https://github.com/HackerNews/API">API</a> |
                      <a href="https://news.ycombinator.com/security.html">
                        Security
                      </a>
                      | <a href="https://www.ycombinator.com/legal/">Legal</a> |
                      <a href="https://www.ycombinator.com/apply/">
                        Apply to YC
                      </a>{" "}
                      |<a href="mailto:hn@ycombinator.com">Contact</a>
                    </span>
                    <br />
                    <br />
                    <form method="get" action="https://hn.algolia.com/">
                      Search:
                      <input
                        type="text"
                        name="q"
                        size={17}
                        autoCorrect="off"
                        spellCheck={false}
                        autoCapitalize="off"
                        autoComplete="off"
                      />
                    </form>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </body>
    </html>
  );
}
