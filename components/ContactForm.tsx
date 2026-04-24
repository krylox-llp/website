"use client";
import { useState } from "react";
import type { CSSProperties } from "react";

const darkInput: CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1.5px solid rgba(255,255,255,0.12)",
  padding: "12px 14px",
  color: "white",
  fontSize: "14px",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  transition: "border-color .2s",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: fd.get("firstName"),
        lastName: fd.get("lastName"),
        email: fd.get("email"),
        company: fd.get("company"),
        service: fd.get("service"),
        message: fd.get("message"),
        honeypot: fd.get("honeypot"),
      }),
    });
    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(true);
    }
  }

  return (
    <form className="reveal d1" onSubmit={handleSubmit} autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Honeypot, hidden from real users, bots fill it in */}
      <input name="honeypot" type="text" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="rsp-form-name-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>First name</label>
          <input name="firstName" type="text" placeholder="Ada" style={darkInput} required />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>Last name</label>
          <input name="lastName" type="text" placeholder="Lovelace" style={darkInput} />
        </div>
      </div>

      {[
        { label: "Work email", type: "email", name: "email", placeholder: "ada@startup.ai", required: true },
        { label: "Company", type: "text", name: "company", placeholder: "Your company", required: false },
      ].map(f => (
        <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>{f.label}</label>
          <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.required} style={darkInput} />
        </div>
      ))}

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>I need help with</label>
        <select name="service" defaultValue="" style={{ ...darkInput, cursor: "pointer", color: "rgba(255,255,255,0.6)" }}>
          <option value="">Select a service…</option>
          <option>Inference Optimization</option>
          <option>MLOps Pipeline Design</option>
          <option>Drift Protection &amp; Monitoring</option>
          <option>Cloud Cost Optimization</option>
          <option>Managed GPU Hosting</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>Tell us about your stack</label>
        <textarea
          name="message"
          placeholder="2–3 sentences is plenty: your current stack, what's slow or expensive, and your goal."
          style={{ ...darkInput, resize: "vertical", minHeight: "90px" }}
          required
        />
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "4px" }}>
        <input name="consent" type="checkbox" required style={{ marginTop: "3px", flexShrink: 0, accentColor: "white", cursor: "pointer" }} />
        <label style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          I agree to the{" "}
          <a href="/privacy" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "underline" }}>Privacy Policy</a>
          {" "}and consent to Krylox contacting me about my enquiry.
        </label>
      </div>

      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", margin: "4px 0 0" }}>
        We respond within 24 hours with a specific recommendation, not a sales pitch.
      </p>

      {submitError && (
        <p style={{ fontSize: "13px", color: "#f87171", margin: 0 }}>
          Something went wrong. Please email us directly at hello@krylox.ai
        </p>
      )}

      <button type="submit" disabled={submitting || submitted}
        style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: submitted ? "#2a2a28" : "white", color: submitted ? "rgba(255,255,255,0.7)" : "var(--black)", padding: "14px 28px", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-ibm-plex-sans)", border: "none", cursor: (submitting || submitted) ? "default" : "pointer", width: "fit-content", transition: "background .2s, color .2s", opacity: submitting ? 0.6 : 1 }}>
        {submitted ? "Message sent ✓" : submitting ? "Sending…" : (
          <>Send message <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></>
        )}
      </button>
    </form>
  );
}
