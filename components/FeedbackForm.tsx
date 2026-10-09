"use client";

import { useState } from "react";
import { css } from "@/lib/css";
import { PROTOTYPE_MODE, siteConfig } from "@/lib/site";

const services = [
  "Audit engagement",
  "Review or validation",
  "Advisory or consulting service",
  "Training or orientation",
  "General inquiry or assistance",
  "Other",
];

// Service quality dimensions, rated on a five-point agreement scale. Mirrors the
// Anti-Red Tape Authority Client Satisfaction Measurement format.
const dimensions = [
  ["responsiveness", "The staff responded to my needs promptly."],
  ["reliability", "The service was delivered as described in the Citizen's Charter."],
  ["access", "The office and its staff were easy to reach and deal with."],
  ["communication", "I was given clear information about the service and its steps."],
  ["integrity", "I was treated fairly, and no improper payment was asked of me."],
  ["assurance", "The staff were courteous, knowledgeable, and professional."],
  ["outcome", "I got what I needed from the office, or was told why not."],
] as const;

const scale = [
  "Strongly disagree",
  "Disagree",
  "Neither",
  "Agree",
  "Strongly agree",
];

const inputStyle = css(
  "min-height:48px;padding:0 12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px 'Public Sans',sans-serif;color:#1A2B3C;",
);
const selectStyle = css(
  "min-height:48px;padding:0 12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px 'Public Sans',sans-serif;color:#1A2B3C;background:#fff;",
);
const labelStyle = css("display:flex;flex-direction:column;gap:6px;font-weight:600;");

export default function FeedbackForm() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Honeypot: must stay empty for real people.
  const [honeypot, setHoneypot] = useState("");

  if (submitted) {
    return (
      <div
        style={css(
          "background:#fff;border:1px solid #CFDDEA;border-radius:8px;padding:clamp(22px,4vw,40px);box-shadow:0 1px 2px rgba(11,74,125,.08);",
        )}
      >
        <div role="status" style={css("display:flex;flex-direction:column;gap:16px;align-items:flex-start;")}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#0B4A7D" />
            <path d="M7 12.5l3.2 3L17 9" stroke="#7DC12B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={css("font-size:24px;")}>Thank you for your feedback</h2>
          <p>
            Your responses help us improve our services. We appreciate the time
            you took to answer.
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
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={css(
        "background:#fff;border:1px solid #CFDDEA;border-radius:8px;padding:clamp(22px,4vw,40px);box-shadow:0 1px 2px rgba(11,74,125,.08);",
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
          or call the office directly to share your feedback.
        </p>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // No backend yet: never transmit. Prototype mode and a filled honeypot
          // both block the (placeholder) submission entirely.
          if (PROTOTYPE_MODE || honeypot) return;
          setSubmitted(true);
        }}
        style={css("display:flex;flex-direction:column;gap:26px;")}
      >
        {/* Honeypot field: off-screen, hidden from assistive tech and keyboard. */}
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

        <div
          style={css(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px;",
          )}
        >
          <label style={labelStyle}>
            Which service did you avail?
            <select required defaultValue="" className="inp" style={selectStyle}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label style={labelStyle}>
            Date of service{" "}
            <span style={css("font-weight:400;font-size:14px;color:#4A5D70;margin-top:-6px;")}>
              Optional
            </span>
            <input type="date" className="inp" style={inputStyle} />
          </label>
        </div>

        <fieldset style={css("border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:16px;")}>
          <legend style={css("font-weight:700;font-size:17px;padding:0;")}>
            How much do you agree with each statement?
          </legend>
          <div style={css("display:flex;flex-direction:column;gap:18px;")}>
            {dimensions.map(([key, text]) => (
              <fieldset key={key} style={css("border:0;margin:0;padding:0;")}>
                <legend style={css("font-weight:600;font-size:16px;padding:0 0 8px;")}>
                  {text}
                </legend>
                <div
                  style={css(
                    "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,130px),1fr));gap:8px;",
                  )}
                >
                  {scale.map((label, i) => (
                    <label
                      key={label}
                      style={css(
                        "display:flex;align-items:center;gap:8px;min-height:44px;padding:0 12px;border:1px solid #CFDDEA;border-radius:4px;font-weight:400;font-size:14px;cursor:pointer;background:#F6FAFE;",
                      )}
                    >
                      <input
                        type="radio"
                        name={key}
                        value={i + 1}
                        style={css("width:20px;height:20px;accent-color:#0B4A7D;flex-shrink:0;")}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </fieldset>

        <label style={labelStyle}>
          Suggestions or comments{" "}
          <span style={css("font-weight:400;font-size:15px;color:#3D5166;margin-top:-4px;")}>
            Optional. Tell us what we did well, or how we can do better.
          </span>
          <textarea
            rows={5}
            className="inp"
            style={css(
              "padding:12px;border:2px solid #6B7F93;border-radius:4px;font:400 17px/1.5 'Public Sans',sans-serif;color:#1A2B3C;resize:vertical;",
            )}
          />
        </label>

        <div
          style={css(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:18px;",
          )}
        >
          <label style={labelStyle}>
            Name{" "}
            <span style={css("font-weight:400;font-size:14px;color:#4A5D70;margin-top:-6px;")}>
              Optional
            </span>
            <input type="text" autoComplete="name" className="inp" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Email{" "}
            <span style={css("font-weight:400;font-size:14px;color:#4A5D70;margin-top:-6px;")}>
              Optional
            </span>
            <input type="email" autoComplete="email" className="inp" style={inputStyle} />
          </label>
        </div>

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
            10173), the City Internal Audit Services Department collects your
            responses only to measure and improve the quality of its services.
            Answering is voluntary, you may leave contact details blank, and your
            feedback is handled in line with our Privacy Policy. You may contact our
            Data Protection Officer at {siteConfig.contact.dpoEmail} to exercise
            your rights as a data subject.
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
              I have read the Data Privacy Notice and consent to the processing of
              the information I provided.
            </span>
          </label>
        </div>

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
            Submit feedback
          </button>
          <span style={css("font-size:14px;color:#4A5D70;")}>
            All ratings are optional; you can submit as much or as little as you
            like.
          </span>
        </div>
      </form>
    </div>
  );
}
