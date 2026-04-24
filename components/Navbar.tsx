"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "GPU Hosting", href: "/#hosting" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = document.querySelectorAll("section[id], div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startTransition(() => setActiveSection(entry.target.id));
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/blog") return pathname.startsWith("/blog");
    if (pathname !== "/") return false;
    return activeSection === href.replace("/#", "");
  };

  return (
    <header style={{ position: "fixed", inset: "0 0 auto 0", zIndex: 200, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div className="rsp-nav-inner">
        <div style={{ display: "flex", height: "64px", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Link href="/" className="md:static absolute left-1/2 md:left-auto md:translate-x-0 -translate-x-1/2" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/logo.png" alt="Krylox" width={120} height={32} style={{ height: "30px", width: "auto" }} priority />
          </Link>

          <nav aria-label="Main navigation" style={{ alignItems: "center", gap: "32px" }} className="hidden md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive(href) ? "var(--black)" : "#5a5a56",
                  transition: "color .2s",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--black)")}
                onMouseOut={e => (e.currentTarget.style.color = isActive(href) ? "var(--black)" : "#5a5a56")}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href="https://calendar.app.google/3QEmmNd7hzfVYk6K8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "var(--red)", color: "white", padding: "8px 20px", fontSize: "13px", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-ibm-plex-sans)", transition: "background .2s" }}
            className="hidden md:inline-flex"
            onMouseOver={e => (e.currentTarget.style.background = "var(--red-hover)")}
            onMouseOut={e => (e.currentTarget.style.background = "var(--red)")}
          >
            Get Started
          </a>

          <button
            className="md:hidden ml-auto"
            style={{ padding: "8px", color: "#5a5a56", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg aria-hidden="true" style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 py-4" : "max-h-0"}`}
        style={{ background: "white", borderTop: "1px solid var(--border)", padding: mobileOpen ? "16px 24px" : "0 24px" }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMobileOpen(false)}
            style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#5a5a56", textDecoration: "none", padding: "8px 0", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://calendar.app.google/3QEmmNd7hzfVYk6K8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          style={{ display: "block", textAlign: "center", background: "var(--red)", color: "white", padding: "10px 20px", fontSize: "14px", fontWeight: 600, textDecoration: "none", marginTop: "12px" }}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
