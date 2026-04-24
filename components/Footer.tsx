"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rsp-footer" style={{ background: "white", borderTop: "1px solid var(--border)" }}>
      <div className="rsp-footer-inner">
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Krylox" width={120} height={32} style={{ height: "28px", width: "auto" }} />
        </a>

        <span style={{ fontSize: "12.5px", color: "#9a9a96" }} suppressHydrationWarning>
          © {new Date().getFullYear()} Krylox LLP. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/privacy" style={{ fontSize: "12.5px", color: "#9a9a96", textDecoration: "none", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--black)")}
            onMouseOut={e => (e.currentTarget.style.color = "#9a9a96")}>
            Privacy Policy
          </a>
          <a href="/terms" style={{ fontSize: "12.5px", color: "#9a9a96", textDecoration: "none", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--black)")}
            onMouseOut={e => (e.currentTarget.style.color = "#9a9a96")}>
            Terms
          </a>
          <a href="https://www.linkedin.com/company/krylox-hq" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "12.5px", color: "#9a9a96", textDecoration: "none", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--black)")}
            onMouseOut={e => (e.currentTarget.style.color = "#9a9a96")}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
