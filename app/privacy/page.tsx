import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import LastUpdated from "@/components/LastUpdated";
import { css } from "@/lib/css";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How the City Internal Audit Services Department collects, uses, protects, and retains personal data under the Data Privacy Act of 2012 (Republic Act No. 10173).",
  path: "/privacy",
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

export default function PrivacyPage() {
  const c = siteConfig.contact;
  return (
    <main id="main">
      <PageHeader
        title="Privacy Policy"
        intro="How we collect, use, protect, and retain personal data when you use this website and our services, in line with the Data Privacy Act of 2012."
      />

      <section>
        <div style={wrap}>
          <p style={note}>
            This is sample content for a prototype and is pending review by the
            City Government&apos;s Data Protection Officer. It is not yet an
            official privacy policy of the {siteConfig.parentOrganization.name}.
          </p>

          <p>
            The {siteConfig.name} ({siteConfig.shortName}) respects your right to
            privacy. This policy explains how we handle personal data in
            accordance with the Data Privacy Act of 2012 (Republic Act No. 10173),
            its Implementing Rules and Regulations, and issuances of the National
            Privacy Commission.
          </p>

          <div>
            <h2 style={h2}>Information we collect</h2>
            <p>We only collect personal data that you choose to give us, through:</p>
            <ul style={list}>
              <li>
                <strong>The contact form (also used to report a concern).</strong>{" "}
                If you do not submit anonymously, this may include your name,
                email address, mobile number, and the details of your message.
              </li>
              <li>
                <strong>Feedback and the Client Satisfaction Measurement survey.</strong>{" "}
                Your responses, and any contact details you choose to share.
              </li>
              <li>
                <strong>Email, phone, and walk-in inquiries.</strong> Any
                information you provide when you contact the office directly.
              </li>
              <li>
                <strong>Basic website analytics.</strong> We use a privacy-friendly
                analytics service that collects aggregated, anonymized usage data
                (such as page views and general location). It does not use cookies
                to identify individual visitors, and we do not build profiles of
                you.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>Why we collect it</h2>
            <ul style={list}>
              <li>To receive, assess, and respond to your messages and concerns.</li>
              <li>To provide audit, review, advisory, and training services.</li>
              <li>To improve our services and this website.</li>
              <li>To comply with legal and audit requirements.</li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>Legal basis</h2>
            <p>
              We process personal data based on your consent, the performance of
              the department&apos;s mandate as a public authority, and compliance
              with legal obligations, as allowed under Sections 12 and 13 of the
              Data Privacy Act.
            </p>
          </div>

          <div>
            <h2 style={h2}>Who can access your data</h2>
            <p>
              Access is limited to authorized {siteConfig.shortName} personnel who
              need it to act on your request. We do not sell or rent your personal
              data. We share it outside the City Government only when required by
              law or lawful order, for example with the Office of the Ombudsman or
              the Commission on Audit.
            </p>
          </div>

          <div>
            <h2 style={h2}>How long we keep it</h2>
            <p>
              We keep personal data only for as long as necessary to fulfill the
              purpose it was collected for, or as required by records-retention
              rules for government records, after which it is securely disposed of.
            </p>
          </div>

          <div>
            <h2 style={h2}>How we protect it</h2>
            <p>
              We apply reasonable organizational, physical, and technical measures
              to protect personal data against loss, misuse, and unauthorized
              access, including access controls and secure storage. This website is
              served over an encrypted (HTTPS) connection.
            </p>
          </div>

          <div>
            <h2 style={h2}>Your rights as a data subject</h2>
            <p>Under the Data Privacy Act, you have the right to:</p>
            <ul style={list}>
              <li>Be informed about how your data is processed.</li>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or outdated information.</li>
              <li>Object to processing or withdraw your consent.</li>
              <li>Have your data erased or blocked, where allowed by law.</li>
              <li>Be notified of, and seek redress for, a data breach.</li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>Contact our Data Protection Officer</h2>
            <p>
              To exercise your rights or ask about this policy, contact the Data
              Protection Officer at{" "}
              <a href={`mailto:${c.dpoEmail}`} style={css("font-weight:700;")}>
                {c.dpoEmail}
              </a>
              , or write to the {siteConfig.name}, {c.addressOneLine}.
            </p>
          </div>

          <div>
            <h2 style={h2}>Changes to this policy</h2>
            <p>
              We may update this policy as our services or legal requirements
              change. The date below shows when it was last reviewed.
            </p>
          </div>
        </div>
      </section>

      <LastUpdated path="/privacy" />
    </main>
  );
}
