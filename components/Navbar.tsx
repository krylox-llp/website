"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Why Krylox", href: "/#why-krylox" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Krylox" width={120} height={32} className="h-8 w-auto" priority />
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive(href) ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="hidden md:inline-flex rounded-md bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
          >
            Get Started
          </Link>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-100 px-6 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-black py-1.5"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMobileOpen(false)}
          className="block rounded-md bg-black text-center px-5 py-2.5 text-sm font-semibold text-white mt-3"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
