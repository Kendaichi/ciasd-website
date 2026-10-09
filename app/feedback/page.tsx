import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import LastUpdated from "@/components/LastUpdated";
import FeedbackForm from "@/components/FeedbackForm";
import { css } from "@/lib/css";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Client Satisfaction Survey",
  description:
    "Tell the City Internal Audit Services Department how we did. Our Client Satisfaction Measurement survey takes about three minutes.",
  path: "/feedback",
});

const wrap = css(
  "max-width:760px;margin:0 auto;padding:clamp(40px,6vw,64px) clamp(16px,4vw,32px);display:flex;flex-direction:column;gap:24px;",
);

export default function FeedbackPage() {
  const c = siteConfig.contact;
  return (
    <main id="main">
      <PageHeader
        title="Client Satisfaction Survey"
        intro="If you recently availed of an IAS service, please take about three minutes to tell us how we did. Your feedback helps us serve city offices and the public better."
      />

      <section>
        <div style={wrap}>
          <p style={css("color:#2C3E52;")}>
            This is our Client Satisfaction Measurement (CSM) survey. Answering is
            voluntary and your responses are confidential. You may also give
            feedback in person or by phone at {c.phoneLandline}, or by email at{" "}
            <a href={`mailto:${c.email}`} style={css("color:#0B4A7D;font-weight:600;")}>
              {c.email}
            </a>
            .
          </p>
          <FeedbackForm />
        </div>
      </section>

      <LastUpdated path="/feedback" />
    </main>
  );
}
