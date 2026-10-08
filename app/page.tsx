import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { css } from "@/lib/css";

const NEWS = [
  {
    slot: "news-1",
    ph: "Training photo",
    cat: "Activities",
    date: "September 26, 2026",
    title:
      "IAS conducts risk-based internal control training for 14 city offices",
    excerpt:
      "Accountable officers and section chiefs completed a two-day workshop on identifying and documenting process risks.",
  },
  {
    slot: "news-2",
    ph: "Announcement graphic",
    cat: "Announcements",
    date: "September 15, 2026",
    title:
      "Schedule of entrance conferences for the fourth-quarter audit cycle",
    excerpt:
      "Offices included in the Q4 audit plan will receive formal notices from the IAS starting October 1.",
  },
  {
    slot: "news-3",
    ph: "Report cover or team photo",
    cat: "Accomplishment Reports",
    date: "August 29, 2026",
    title: "First semester 2026 accomplishment report now available",
    excerpt:
      "A summary of engagements completed, trainings held, and recommendations monitored from January to June.",
  },
];

const STATS = [
  { n: "46", label: "Audits and reviews completed" },
  { n: "38", label: "City offices assisted" },
  { n: "24", label: "Trainings conducted" },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        style={css(
          "position:relative;overflow:hidden;background:#E3F0FB;border-bottom:1px solid #CFE0F0;"
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          fill="none"
          stroke="#0B4A7D"
          strokeOpacity=".08"
          strokeWidth="2"
          style={css(
            "position:absolute;right:-180px;top:50%;width:760px;height:760px;transform:translateY(-50%);pointer-events:none;"
          )}
        >
          <circle cx="300" cy="300" r="290" />
          <ellipse cx="300" cy="300" rx="205" ry="290" />
          <ellipse cx="300" cy="300" rx="110" ry="290" />
          <path d="M300 10v580M10 300h580M40 165q260 40 520 0M40 435q260-40 520 0M110 75q190 28 380 0M110 525q190-28 380 0" />
        </svg>
        <div
          style={css(
            "position:relative;max-width:1200px;margin:0 auto;padding:clamp(40px,7vw,88px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:48px;align-items:center;"
          )}
        >
          <div
            style={css(
              "flex:1 1 440px;display:flex;flex-direction:column;gap:22px;max-width:640px;"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/ias-logo-192.png"
              alt=""
              width={96}
              height={96}
              style={css("width:96px;height:96px;display:block;")}
            />
            <div style={css("display:flex;flex-direction:column;gap:10px;")}>
              <span
                style={css(
                  "font-size:14px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0B4A7D;"
                )}
              >
                City Government of Butuan
              </span>
              <h1
                id="hero-title"
                style={css(
                  "font-size:clamp(34px,5.2vw,54px);line-height:1.12;font-weight:900;color:#0B4A7D;"
                )}
              >
                City Internal Audit Services Department
              </h1>
            </div>
            <p
              style={css(
                "display:flex;align-items:center;gap:12px;font-family:Merriweather,Georgia,serif;font-style:italic;font-size:clamp(19px,2.2vw,23px);color:#0B4A7D;"
              )}
            >
              <span
                aria-hidden="true"
                style={css(
                  "width:32px;height:4px;background:#7DC12B;border-radius:2px;flex-shrink:0;"
                )}
              />
              Your Enabling Partner Towards a City Ascending
            </p>
            <p
              style={css(
                "font-size:clamp(17px,1.6vw,19px);line-height:1.65;color:#1A2B3C;max-width:560px;"
              )}
            >
              We provide independent, objective assurance and advice that helps
              every office of the City Government of Butuan strengthen its
              internal controls and serve the public better.
            </p>
            <div
              style={css(
                "display:flex;flex-wrap:wrap;gap:12px;padding-top:6px;"
              )}
            >
              <Link
                href="/services"
                className="hvr-btn-primary"
                style={css(
                  "display:inline-flex;align-items:center;min-height:48px;padding:0 22px;background:#0B4A7D;color:#fff;font-weight:700;text-decoration:none;border-radius:4px;"
                )}
              >
                Explore our services
              </Link>
              <Link
                href="/about"
                className="hvr-btn-secondary"
                style={css(
                  "display:inline-flex;align-items:center;min-height:48px;padding:0 22px;background:#fff;color:#0B4A7D;font-weight:700;text-decoration:none;border-radius:4px;border:2px solid #0B4A7D;"
                )}
              >
                About the department
              </Link>
            </div>
          </div>
          <div
            style={css(
              "flex:1 1 360px;max-width:520px;aspect-ratio:4/5;position:relative;"
            )}
          >
            <ImageSlot
              shape="rounded"
              radius={8}
              placeholder="Photo: Butuan City Hall or IAS team at work"
              style={css(
                "position:absolute;inset:0;width:100%;height:100%;box-shadow:0 24px 48px -24px rgba(11,74,125,.45);"
              )}
            />
          </div>
        </div>
      </section>

      {/* How can we help you? */}
      <section aria-labelledby="quick-title" style={css("background:#fff;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:28px;"
          )}
        >
          <h2 id="quick-title" style={css("font-size:clamp(24px,3vw,30px);")}>
            How can we help you?
          </h2>
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:20px;"
            )}
          >
            {[
              {
                href: "/services",
                title: "Our Services",
                body: "Audit, review, advisory, and training services available to city offices, with requirements and processing times.",
                cta: "View services",
                icon: (
                  <>
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 3h6v3H9zM9 13l2 2 4-4" />
                  </>
                ),
              },
              {
                href: "/city-offices",
                title: "For City Offices",
                body: "What to expect during an audit, how to prepare, your rights as an auditee, and forms you can download.",
                cta: "Prepare for an audit",
                icon: (
                  <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 10h.01M15 10h.01" />
                ),
              },
              {
                href: "/contact#report",
                title: "Report a Concern",
                body: "Tell us about a possible control weakness or irregularity in a city office. Reports are handled confidentially.",
                cta: "Submit a concern",
                icon: <path d="M4 22V4M4 4h12l-2 4 2 4H4" />,
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="hvr-card"
                style={css(
                  "display:flex;flex-direction:column;gap:14px;padding:28px;border:1px solid #CFDDEA;border-radius:8px;text-decoration:none;color:#1A2B3C;background:#fff;"
                )}
              >
                <span
                  style={css(
                    "width:52px;height:52px;border-radius:50%;background:#0B4A7D;display:flex;align-items:center;justify-content:center;"
                  )}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7DC12B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span
                  style={css(
                    "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:21px;color:#0B4A7D;"
                  )}
                >
                  {card.title}
                </span>
                <span style={css("color:#3D5166;")}>{card.body}</span>
                <span
                  style={css(
                    "margin-top:auto;font-weight:700;color:#1878B0;display:flex;align-items:center;gap:6px;"
                  )}
                >
                  {card.cta} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Message from the Department Head */}
      <section
        aria-labelledby="msg-title"
        style={css("background:#fff;border-top:1px solid #E1EAF2;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,88px) clamp(16px,4vw,32px);display:flex;flex-wrap:wrap;gap:clamp(32px,5vw,64px);align-items:flex-start;"
          )}
        >
          <figure
            style={css(
              "flex:0 1 340px;margin:0;display:flex;flex-direction:column;gap:16px;"
            )}
          >
            <div style={css("width:100%;aspect-ratio:4/5;position:relative;")}>
              <ImageSlot
                shape="rounded"
                radius={8}
                placeholder="Portrait of the Department Head"
                style={css("position:absolute;inset:0;width:100%;height:100%;")}
              />
            </div>
            <figcaption
              style={css(
                "display:flex;flex-direction:column;gap:2px;border-top:4px solid #7DC12B;padding-top:14px;"
              )}
            >
              <span
                style={css(
                  "font-family:Merriweather,Georgia,serif;font-weight:700;font-size:19px;color:#0B4A7D;"
                )}
              >
                March Belle F. Lor, CPA
              </span>
              <span style={css("color:#3D5166;font-size:15px;")}>
                Department Head II
                <br />
                City Internal Audit Services Department
              </span>
            </figcaption>
          </figure>
          <div
            style={css(
              "flex:1 1 440px;display:flex;flex-direction:column;gap:20px;max-width:680px;"
            )}
          >
            <span
              style={css(
                "font-size:14px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4E6278;"
              )}
            >
              Message from the Department Head
            </span>
            <h2
              id="msg-title"
              style={css("font-size:clamp(26px,3.4vw,36px);line-height:1.25;")}
            >
              Good governance is built one sound process at a time.
            </h2>
            <p style={css("font-size:18px;line-height:1.75;")}>
              Maayong adlaw! The City Internal Audit Services Department exists
              to help every office of the City Government of Butuan work with
              integrity, efficiency, and accountability. We do not audit to find
              fault. We audit so that the systems serving our people are
              reliable, and so that public resources are used as the law and the
              public intend.
            </p>
            <p style={css("font-size:18px;line-height:1.75;")}>
              Our team works alongside department heads and personnel as
              partners: reviewing controls, sharing practical recommendations,
              and following through until improvements take hold. If your office
              would like our assistance, or if you have a concern about how a
              city process is being carried out, our door is open.
            </p>
            <Link
              href="/about"
              style={css("font-weight:700;align-self:flex-start;")}
            >
              Read about our mandate and independence
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section
        aria-labelledby="glance-title"
        style={css("background:#E3F0FB;")}
      >
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,80px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:32px;"
          )}
        >
          <div
            style={css(
              "display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;justify-content:space-between;"
            )}
          >
            <h2
              id="glance-title"
              style={css("font-size:clamp(24px,3vw,30px);")}
            >
              At a Glance
            </h2>
            <span style={css("color:#3D5166;font-size:15px;")}>
              Calendar Year 2025
            </span>
          </div>
          <dl
            style={css(
              "margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:20px;"
            )}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={css(
                  "background:#fff;border-radius:8px;padding:28px;display:flex;flex-direction:column-reverse;gap:6px;"
                )}
              >
                <dt
                  style={css("font-size:17px;font-weight:600;color:#1A2B3C;")}
                >
                  {stat.label}
                </dt>
                <dd
                  style={css(
                    "margin:0;font-family:Merriweather,Georgia,serif;font-weight:900;font-size:clamp(44px,5vw,56px);line-height:1;color:#0B4A7D;display:flex;align-items:flex-end;gap:12px;"
                  )}
                >
                  {stat.n}
                  <span
                    aria-hidden="true"
                    style={css(
                      "width:10px;height:10px;border-radius:50%;background:#7DC12B;margin-bottom:8px;"
                    )}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Latest News */}
      <section aria-labelledby="news-title" style={css("background:#fff;")}>
        <div
          style={css(
            "max-width:1200px;margin:0 auto;padding:clamp(48px,7vw,88px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:28px;"
          )}
        >
          <div
            style={css(
              "display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;justify-content:space-between;"
            )}
          >
            <h2 id="news-title" style={css("font-size:clamp(24px,3vw,30px);")}>
              Latest News &amp; Updates
            </h2>
            <Link href="/news" style={css("font-weight:700;")}>
              View all news
            </Link>
          </div>
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:28px;"
            )}
          >
            {NEWS.map((post) => (
              <article
                key={post.slot}
                style={css("display:flex;flex-direction:column;gap:14px;")}
              >
                <div
                  style={css(
                    "width:100%;aspect-ratio:16/10;position:relative;"
                  )}
                >
                  <ImageSlot
                    shape="rounded"
                    radius={8}
                    placeholder={post.ph}
                    style={css(
                      "position:absolute;inset:0;width:100%;height:100%;"
                    )}
                  />
                </div>
                <div
                  style={css(
                    "display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;font-size:14px;"
                  )}
                >
                  <span
                    style={css(
                      "background:#E3F0FB;color:#0B4A7D;font-weight:700;padding:3px 10px;border-radius:999px;"
                    )}
                  >
                    {post.cat}
                  </span>
                  <time style={css("color:#4A5D70;")}>{post.date}</time>
                </div>
                <h3 style={css("font-size:20px;line-height:1.4;")}>
                  <Link
                    href="/news"
                    className="hvr-underline"
                    style={css("color:#0B4A7D;text-decoration:none;")}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p style={css("color:#3D5166;font-size:16px;")}>
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
