"use client";
import { useState, useTransition } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [, startTransition] = useTransition();

  return (
    <section id="faq" className="rsp-section" style={{ background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="eyebrow reveal">FAQ</div>
        <h2 className="reveal d1" style={{ fontSize: "clamp(36px, 4vw, 58px)", marginBottom: "20px", color: "var(--black)" }}>
          What clients ask before engaging.
        </h2>
        <div style={{ marginTop: "48px", borderTop: "1px solid var(--border)" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className={`faq-item reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                <button
                  onClick={() => startTransition(() => setOpenFaq(isOpen ? null : i))}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", fontFamily: "var(--font-ibm-plex-sans)", fontSize: "17px", fontWeight: 600, color: "var(--black)", gap: "20px", textAlign: "left" }}
                >
                  {item.q}
                  <span style={{ fontSize: "22px", fontWeight: 300, color: "var(--black)", flexShrink: 0, transition: "transform 0.25s", lineHeight: "1", display: "inline-block", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                <div className={`faq-body${isOpen ? " open" : ""}`}>
                  <div>
                    <p style={{ fontSize: "15px", color: "#5a5a56", lineHeight: 1.75, padding: "0 0 24px", maxWidth: "700px", margin: 0 }}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
