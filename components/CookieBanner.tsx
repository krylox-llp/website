"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_KEY, setConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  function accept() {
    setConsent("accepted");
    setVisible(false);
  }

  function decline() {
    setConsent("declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999,
      background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "16px 24px", display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
      animation: "slideUp 0.3s ease",
    }}>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: "640px", lineHeight: 1.6 }}>
        We store one functional preference to remember this choice. If you accept, we also load
        Apollo, a third-party service that identifies visiting organisations for our sales
        outreach. Decline and it is never loaded.{" "}
        <Link href="/privacy" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
      </p>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button onClick={decline} style={{
          padding: "8px 18px", fontSize: "13px", fontWeight: 600,
          fontFamily: "var(--font-ibm-plex-sans)", background: "none",
          border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)",
          cursor: "pointer", transition: "border-color .2s, color .2s",
        }}
          onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "white"; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
        >
          Decline
        </button>
        <button onClick={accept} style={{
          padding: "8px 18px", fontSize: "13px", fontWeight: 600,
          fontFamily: "var(--font-ibm-plex-sans)", background: "white",
          border: "none", color: "var(--black)", cursor: "pointer",
          transition: "background .2s",
        }}
          onMouseOver={e => (e.currentTarget.style.background = "#e2e2e0")}
          onMouseOut={e => (e.currentTarget.style.background = "white")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
