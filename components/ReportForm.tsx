"use client";

import { useState } from "react";
import { css } from "@/lib/css";
import { PROTOTYPE_MODE, siteConfig } from "@/lib/site";

const offices = [
  "Not about a specific office",
  "City Treasurer's Office",
  "City Accounting Office",
  "City Budget Office",
  "City Assessor's Office",
  "City Engineering Office",
  "City Health Office",
  "City Social Welfare and Development Office",
  "General Services Office",
  "Business Permits and Licensing Office",
  "Other office",
];

const subjects = [
  "General inquiry or question",
  "Request for information or assistance",
  "Feedback or suggestion",
  "Concern: weak or missing controls",
  "Concern: inefficient process or delays",
  "Concern: possible misuse of funds or property",
  "Concern: non-compliance with laws or policies",
  "Concern: records or documentation issues",
  "Other",
];

const inputStyle = css(
  "min-height:48px;padding:0 12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px 'Public Sans',sans-serif;color:#1A2B3C;",
);
const selectStyle = css(
  "min-height:48px;padding:0 12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px 'Public Sans',sans-serif;color:#1A2B3C;background:#fff;",
);
const labelStyle = css("display:flex;flex-direction:column;gap:6px;font-weight:600;");

export default function ReportForm() {
  const [anon, setAnon] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Honeypot: must stay empty for real people. Bots that auto-fill it are spam.
  const [honeypot, setHoneypot] = useState("");

  if (submitted) {
    return (
      <div
        style={css(
          "flex:2 1 520px;background:#fff;border-radius:8px;padding:clamp(22px,4vw,40px);box-shadow:0 1px 2px rgba(11,74,125,.08);",
        )}
      >
        <div role="status" style={css("display:flex;flex-direction:column;gap:16px;align-items:flex-start;")}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#0B4A7D" />
            <path d="M7 12.5l3.2 3L17 9" stroke="#7DC12B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 style={css("font-size:24px;")}>Your message has been received</h3>
          <p>
            Your reference number is{" "}
            <strong style={css("font-size:19px;color:#0B4A7D;letter-spacing:.02em;")}>
              IAS-2026-0147
            </strong>
            . Please keep it for follow-up.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setConsent(false);
            }}
            style={css(
              "min-height:44px;padding:0 18px;border:2px solid #0B4A7D;border-radius:4px;background:#fff;color:#0B4A7D;font:700 15px 'Public Sans',sans-serif;cursor:pointer;",
            )}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={css(
        "flex:2 1 520px;background:#fff;border-radius:8px;padding:clamp(22px,4vw,40px);box-shadow:0 1px 2px rgba(11,74,125,.08);",
      )}
    >
      {PROTOTYPE_MODE ? (
        <p
          role="status"
          style={css(
            "margin:0 0 22px;background:#F6FAFE;border:1px solid #CFDDEA;border-left:4px solid #0B4A7D;border-radius:6px;padding:14px 16px;font-size:15.5px;color:#2C3E52;",
          )}
        >
          <strong>Online submissions are not yet available.</strong> Please visit
          or call the office directly.
        </p>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // No backend yet: never transmit form data. Prototype mode and a
          // filled honeypot both block the (placeholder) submission entirely.
          if (PROTOTYPE_MODE || honeypot) return;
          setSubmitted(true);
        }}
        style={css("display:flex;flex-direction:column;gap:22px;")}
      >
        {/* Honeypot field: positioned off-screen, hidden from assistive tech and
            keyboard users. A real backend must reject any submission where this
            has a value. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label>
            Company (leave this blank)
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <label style={css("display:flex;gap:12px;align-items:flex-start;cursor:pointer;")}>
          <input
            type="checkbox"
            checked={anon}
            onChange={() => setAnon((a) => !a)}
            style={css("width:24px;height:24px;margin:2px 0 0;accent-color:#0B4A7D;flex-shrink:0;")}
          />
          <span>
            <strong>Submit anonymously</strong>
            <br />
            <span style={css("font-size:15px;color:#3D5166;")}>
              We will not be able to contact you for more information or updates.
            </span>
          </span>
        </label>

        {/* When anonymous, these fields are removed from the form entirely, so
            they are hidden, cannot be edited, are not required, and are never
            submitted. */}
        {!anon ? (
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:18px;",
            )}
          >
            <label style={labelStyle}>
              Full name
              <input
                type="text"
                required
                autoComplete="name"
                className="inp"
                style={inputStyle}
              />
            </label>
            <label style={labelStyle}>
              Email address
              <input
                type="email"
                required
                autoComplete="email"
                className="inp"
                style={inputStyle}
              />
            </label>
            <label style={labelStyle}>
              Mobile number{" "}
              <span style={css("font-weight:400;font-size:14px;color:#4A5D70;margin-top:-6px;")}>
                Optional
              </span>
              <input
                type="tel"
                autoComplete="tel"
                placeholder="09XX XXX XXXX"
                className="inp"
                style={inputStyle}
              />
            </label>
          </div>
        ) : null}

        <div
          style={css(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px;",
          )}
        >
          <label style={labelStyle}>
            Office involved
            <select required defaultValue="" className="inp" style={selectStyle}>
              <option value="">Select an office</option>
              {offices.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label style={labelStyle}>
            Subject
            <select required defaultValue="" className="inp" style={selectStyle}>
              <option value="">Select a subject</option>
              {subjects.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>

        <label style={labelStyle}>
          Your message
          <span style={css("font-weight:400;font-size:15px;color:#3D5166;")}>
            Tell us how we can help. If you are reporting a concern, include what
            happened, when, and where. Do not include personal information about
            other people unless necessary.
          </span>
          <textarea
            required
            rows={6}
            className="inp"
            style={css(
              "padding:12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px/1.5 'Public Sans',sans-serif;color:#1A2B3C;resize:vertical;",
            )}
          />
        </label>

        <label style={labelStyle}>
          Supporting files{" "}
          <span style={css("font-weight:400;font-size:15px;color:#3D5166;margin-top:-4px;")}>
            Optional. PDF, JPG, or PNG, up to 10 MB in total.
          </span>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            style={css(
              "font:400 16px 'Public Sans',sans-serif;padding:10px;border:2px dashed #9DB8D2;border-radius:4px;background:#F6FAFE;",
            )}
          />
        </label>

        <div
          style={css(
            "border:1px solid #CFDDEA;border-radius:6px;padding:18px 20px;background:#F6FAFE;display:flex;flex-direction:column;gap:14px;",
          )}
        >
          <h3 style={css("font-size:16px;font-family:'Public Sans',sans-serif;font-weight:700;")}>
            Data Privacy Notice
          </h3>
          <p style={css("font-size:15px;color:#2C3E52;")}>
            In accordance with the Data Privacy Act of 2012 (Republic Act No.
            10173), the City Internal Audit Services Department collects the
            information in this form only to respond to and act on your message. It is
            stored securely, accessed only by authorized IAS personnel, kept for
            no longer than necessary, and not shared outside the City Government
            except as required by law. You may contact our Data Protection Officer
            at {siteConfig.contact.dpoEmail} to exercise your rights as a data
            subject.
          </p>
          <label style={css("display:flex;gap:12px;align-items:flex-start;cursor:pointer;font-size:16px;")}>
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={() => setConsent((c) => !c)}
              style={css("width:24px;height:24px;margin:0;accent-color:#0B4A7D;flex-shrink:0;")}
            />
            <span>
              I have read the Data Privacy Notice and consent to the collection and
              processing of the information I provided.
            </span>
          </label>
        </div>

        {/*
          TODO: CAPTCHA before launch.
          Add a bot challenge here (for example, Cloudflare Turnstile) before
          live submissions are enabled. Render the widget, then require a valid
          verification token both in this component and when the backend
          processes the submission. Example widget container:
            <div className="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
        */}

        <div style={css("display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center;")}>
          <button
            type="submit"
            disabled={!consent || PROTOTYPE_MODE}
            className="hvr-btn-submit"
            style={{
              ...css(
                "min-height:52px;padding:0 28px;border:0;border-radius:4px;background:#3F7412;color:#fff;font:700 17px 'Public Sans',sans-serif;cursor:pointer;",
              ),
              opacity: !consent || PROTOTYPE_MODE ? 0.55 : 1,
            }}
          >
            Send message
          </button>
          <span style={css("font-size:14px;color:#4A5D70;")}>
            {anon
              ? "Fields marked optional can be left blank; all others are required."
              : "Full name and email are required. Fields marked optional can be left blank."}
          </span>
        </div>
      </form>
    </div>
  );
}
