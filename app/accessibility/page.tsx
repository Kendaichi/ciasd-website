import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Accessibility Statement",
  description:
    "The City Internal Audit Services Department is committed to making this website usable by everyone, in line with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.",
  path: "/accessibility",
});

const wrap = css(
  "max-width:860px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:30px;",
);
const h2 = css("font-size:clamp(21px,2.6vw,27px);");
const list = css(
  "margin:10px 0 0;padding-left:22px;display:flex;flex-direction:column;gap:8px;",
);
const note = css(
  "background:#FEF6E0;border:1px solid #EBD9A6;border-left:4px solid #B88709;border-radius:8px;padding:16px 18px;font-size:15.5px;color:#4A3B12;",
);

const features = [
  "A skip link that lets keyboard users jump straight to the main content.",
  "Full keyboard navigation, so the site can be used without a mouse.",
  "Visible focus outlines that show where you are on the page.",
  "Text alternatives (alt text) for images that carry meaning.",
  "Color combinations chosen to meet AA contrast ratios for text.",
  "A responsive layout that reflows for small screens and supports zooming to 200 percent without loss of content.",
  "Clear headings, labelled form fields, and descriptive link text.",
  "Semantic landmarks (header, navigation, main, and footer) for screen readers.",
];

const limitations = [
  "This is a prototype with sample content, so some pages are still being refined.",
  "Some images and maps are placeholders and will be replaced with final, captioned versions.",
  "Downloadable documents are not yet published; accessible (tagged) PDF versions will follow.",
  "Third-party embeds, if added later, may not fully meet our accessibility target.",
];

export default function AccessibilityPage() {
  const c = siteConfig.contact;
  return (
    <main id="main">
      <PageHeader
        title="Accessibility Statement"
        intro="We want everyone to be able to find and use the information and services on this website, whatever device or assistive technology they use."
      />

      <section>
        <div style={wrap}>
          <p style={note}>
            This is sample content for a prototype. The commitments below describe
            the accessibility target for this website and will be confirmed before
            the site goes live.
          </p>

          <div>
            <h2 style={h2}>Our commitment</h2>
            <p>
              The {siteConfig.name} ({siteConfig.shortName}) is committed to making
              this website accessible to the widest possible audience, in line with
              the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the
              Philippine policies that promote equal access to government
              information and services.
            </p>
          </div>

          <div>
            <h2 style={h2}>What we have done</h2>
            <p>We have built this website with the following features:</p>
            <ul style={list}>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={h2}>Known limitations</h2>
            <p>
              We are aware that some parts of the site do not yet fully meet our
              target. We are working to resolve these:
            </p>
            <ul style={list}>
              {limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={h2}>Tips for using this site</h2>
            <ul style={list}>
              <li>
                Press the Tab key to move through links, buttons, and form fields,
                and Enter or Space to activate them.
              </li>
              <li>
                Use your browser or device settings to increase text size, zoom, or
                turn on a high-contrast mode.
              </li>
              <li>
                Most browsers and operating systems include a built-in screen
                reader and other assistive tools you can switch on.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>Report an accessibility problem</h2>
            <p>
              If you find a barrier on this website, or you need information in a
              different format, please tell us so we can help and fix the problem.
            </p>
            <ul style={list}>
              <li>
                Email{" "}
                <a href={`mailto:${c.email}`} style={css("font-weight:700;")}>
                  {c.email}
                </a>
              </li>
              <li>Call {c.phoneLandline}</li>
              <li>
                Write to the {siteConfig.name}, {c.addressOneLine}
              </li>
            </ul>
            <p style={css("margin-top:10px;")}>
              Please include the page address (URL), a short description of the
              problem, and the device or assistive technology you were using. We
              aim to respond within office hours ({c.hours}).
            </p>
          </div>
        </div>
      </section>

      <LastUpdated path="/accessibility" />
    </main>
  );
}
