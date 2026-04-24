"use client";
import { useState, useTransition } from "react";

const FAQ_ITEMS = [
  { q: "What exactly does Krylox do?", a: "Krylox LLP is a specialist MLOps and AI inference optimization engineering firm. We help technical startups and enterprises ship ML models that are fast, cost-efficient, and reliable in production, handling everything from pipeline design to live drift monitoring. We also host models on our own GPU fleet." },
  { q: "Will we have to change our cloud provider or ML framework?", a: "No. We operate on BYOC (Bring Your Own Cloud) and BYOM (Bring Your Own Model) principles. We deploy within your existing AWS, GCP, or Azure environment and optimize whatever framework you're running, PyTorch, TensorFlow, JAX, or fine-tuned LLMs." },
  { q: "How long does a typical engagement take?", a: "A discovery audit takes approximately 2 weeks and delivers a full optimization roadmap. A full implementation, pipeline build, inference optimization, monitoring setup, typically runs 4 to 6 weeks. Embedded engineering engagements are flexible and ongoing." },
  { q: "Will we own everything after the project ends?", a: "Yes, completely. Every system we build uses open standards with no proprietary dependencies. You receive full source code, documentation, runbooks, and team walkthroughs. We measure success by how little you need us after we leave." },
  { q: "Where are you based and what regions do you serve?", a: "Krylox operates globally with active clients across EMEA, UAE, India, and the United States. We work across time zones without friction." },
];

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
                  <span style={{ fontSize: "22px", fontWeight: 300, color: "var(--black)", flexShrink: 0, transition: "transform 0.25s", lineHeight: "1", display: "inline-block", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {isOpen && (
                  <p style={{ fontSize: "15px", color: "#5a5a56", lineHeight: 1.75, padding: "0 0 24px", maxWidth: "700px", margin: 0 }}>{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
