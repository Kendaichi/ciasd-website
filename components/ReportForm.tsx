"use client";

import { useState } from "react";
import { css } from "@/lib/css";

const offices = [
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

const natures = [
  "Weak or missing controls",
  "Inefficient process or delays",
  "Possible misuse of funds or property",
  "Non-compliance with laws or policies",
  "Records or documentation issues",
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
          <h3 style={css("font-size:24px;")}>Your concern has been received</h3>
          <p>
            Your reference number is{" "}
            <strong style={css("font-size:19px;color:#0B4A7D;letter-spacing:.02em;")}>
              IAS-RC-2026-0147
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
            Submit another concern
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        style={css("display:flex;flex-direction:column;gap:22px;")}
      >
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

        {!anon ? (
          <div
            style={css(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:18px;",
            )}
          >
            <label style={labelStyle}>
              Full name
              <input type="text" autoComplete="name" className="inp" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Email address
              <input type="email" autoComplete="email" className="inp" style={inputStyle} />
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
            Office concerned
            <select required defaultValue="" className="inp" style={selectStyle}>
              <option value="">Select an office</option>
              {offices.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label style={labelStyle}>
            Nature of concern
            <select required defaultValue="" className="inp" style={selectStyle}>
              <option value="">Select a category</option>
              {natures.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>

        <label style={labelStyle}>
          Describe your concern
          <span style={css("font-weight:400;font-size:15px;color:#3D5166;")}>
            Include what happened, when, and where. Do not include personal
            information about other people unless necessary.
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
            information in this form only to assess and act on your concern. It is
            stored securely, accessed only by authorized IAS personnel, kept for
            no longer than necessary, and not shared outside the City Government
            except as required by law. You may contact our Data Protection Officer
            at dpo@butuan.gov.ph to exercise your rights as a data subject.
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

        <div style={css("display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center;")}>
          <button
            type="submit"
            disabled={!consent}
            className="hvr-btn-submit"
            style={{
              ...css(
                "min-height:52px;padding:0 28px;border:0;border-radius:4px;background:#3F7412;color:#fff;font:700 17px 'Public Sans',sans-serif;cursor:pointer;",
              ),
              opacity: consent ? 1 : 0.55,
            }}
          >
            Submit concern
          </button>
          <span style={css("font-size:14px;color:#4A5D70;")}>
            All fields are required unless marked optional.
          </span>
        </div>
      </form>
    </div>
  );
}
