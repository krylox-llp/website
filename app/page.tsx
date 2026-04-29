import type { CSSProperties } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

/* ── Data ─────────────────────────────────────────── */

const WHY = [
  { num: "01", title: "Rare specialization", desc: "MLOps and inference optimization is a narrow, technically demanding domain. Most agencies don't go near it." },
  { num: "02", title: "Big tech pedigree", desc: "Google, Meta, Bloomberg. We've shipped ML infrastructure at scale. Same standards, smaller team, more attention." },
  { num: "03", title: "Your cloud. Your model.", desc: "BYOC and BYOM, we deploy within your AWS, GCP, or Azure environment, or host on our own GPU fleet. We optimize whatever framework you're running. No migration required." },
  { num: "04", title: "Zero vendor lock-in", desc: "Every system we build uses open standards. No proprietary wrappers, no mandatory subscriptions, no dependencies that require us to stay involved. You own the code and the pipeline." },
  { num: "05", title: "Results, measured", desc: "Every engagement begins with a baseline and ends with measured results. Up to 10× inference improvement and up to 60% cost reduction, grounded in benchmarks and our team's production experience." },
  { num: "06", title: "Full ownership transfer", desc: "Every engagement ends with complete documentation, team walkthroughs, and runbooks. We measure success by how little you need us after we leave." },
];

const PROCESS = [
  { step: "Phase 01", num: "01", title: "Discovery Audit", desc: "We profile your stack, latency, cost, and pipeline bottlenecks, then tell you exactly what to fix first and what it's worth." },
  { step: "Phase 02", num: "02", title: "Strategy & Roadmap", desc: "A prioritized technical plan: tooling decisions, milestones, and cost-benefit analysis. You know exactly what we're building and why." },
  { step: "Phase 03", num: "03", title: "Implementation", desc: "We oversee and execute the technical work, optimisation, automation, monitoring setup, working alongside your team or as the lead engineer." },
  { step: "Phase 04", num: "04", title: "Handover & Support", desc: "Full documentation, team walkthroughs, and runbooks. You own the system completely, with the confidence to run it independently." },
];

const HOSTING_STEPS = [
  { n: "01", title: "Optimize your model", desc: "We compress and optimize your model for maximum throughput on our GPU fleet, up to 10× faster than a naive deployment." },
  { n: "02", title: "Deploy to Krylox infrastructure", desc: "Your model runs on our managed GPU fleet with auto-scaling, load balancing, and 99.9% uptime SLA, all handled by Krylox." },
  { n: "03", title: "Call your endpoint. Pay per use.", desc: "A simple REST or gRPC endpoint. Plans start from a single day, pay only for what you use, no surprise bills." },
];

const HOSTING_BENEFITS = [
  { title: "Zero cloud overhead", desc: "No AWS/GCP accounts, IAM roles, VPCs, or reserved instances to manage. We handle all infrastructure operations." },
  { title: "Cost-efficient at any scale", desc: "Plans start from a single day. No contracts to renegotiate, no capacity to reserve upfront." },
  { title: "Optimized hardware", desc: "Our fleet is tuned for ML inference, not general compute. Your model runs on hardware selected and configured specifically for it." },
  { title: "99.9% uptime SLA", desc: "Live monitoring, automatic failover, and Krylox on-call for any incident. Production reliability is our responsibility." },
];

const TECH_ROWS = [
  { cat: "Frameworks", chips: ["PyTorch", "TensorFlow", "JAX", "ONNX", "OpenVINO"] },
  { cat: "Serving", chips: ["TensorRT", "vLLM", "Triton Inference Server", "KServe", "Ray Serve", "BentoML"] },
  { cat: "MLOps", chips: ["MLflow", "Weights & Biases", "DVC", "Kubeflow", "Airflow", "Prefect"] },
  { cat: "Cloud", chips: ["AWS SageMaker", "GCP Vertex AI", "Azure ML", "Kubernetes", "Docker"] },
  { cat: "Monitoring", chips: ["Prometheus", "Grafana", "Evidently AI", "Arize", "OpenTelemetry"] },
];

/* ── Shared style helpers ── */
const S = {
  section: (bg: string): CSSProperties => ({ background: bg }),
  inner: (): CSSProperties => ({ maxWidth: "1200px", margin: "0 auto" }),
  h2: (color = "var(--black)"): CSSProperties => ({ fontSize: "clamp(36px, 4vw, 58px)", marginBottom: "20px", color }),
  lead: (color = "#5a5a56"): CSSProperties => ({ fontSize: "17px", color, maxWidth: "500px", lineHeight: 1.7 }),
};

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Navbar />
      <RevealObserver />
      <main>

        {/* ── HERO ── */}
        <section id="hero" className="rsp-hero" style={{ background: "var(--black)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div className="hero-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-200px", right: "-100px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,43,32,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "32px" }}>
              <span style={{ width: "20px", height: "1.5px", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />
              MLOps &amp; Inference Optimization
            </div>

            <h1 style={{ fontSize: "clamp(52px, 6.5vw, 92px)", color: "white", maxWidth: "900px", marginBottom: "28px", fontWeight: 700 }}>
              Your AI in production.<br /><span style={{ color: "white", opacity: 0.7 }}>Fast, cost-efficient, and drift-proof.</span>
            </h1>

            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "48px" }}>
              Krylox engineers MLOps pipelines and optimizes inference, then hosts your models on our own GPU fleet, billed by the day.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <a href="https://calendar.app.google/3QEmmNd7hzfVYk6K8" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "var(--red)", color: "white", padding: "14px 28px", fontWeight: 700, fontSize: "14px", textDecoration: "none", fontFamily: "var(--font-ibm-plex-sans)" }}>
                Book a diagnostic call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#services"
                style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "14px 26px", fontWeight: 500, fontSize: "14px", textDecoration: "none", fontFamily: "var(--font-ibm-plex-sans)" }}>
                See what we do
              </a>
            </div>

            <div style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>Team experience from</span>
              <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
                {["Google", "Meta", "Bloomberg"].map(n => (
                  <span key={n} style={{ fontFamily: "var(--font-ibm-plex-sans)", fontWeight: 700, fontSize: "15px", color: "rgba(255,255,255,0.2)", letterSpacing: "-0.01em" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="rsp-stats-bar" style={{ background: "white", borderBottom: "1px solid var(--border)" }}>
          <div className="rsp-stats-grid">
            {[
              { num: "10", sup: "×", label: "Faster Inference" },
              { num: "60", sup: "%", label: "Cost Reduction" },
              { num: "3", sup: null, label: "Big Tech Practitioners" },
              { num: "24", sup: "/7", label: "Pipeline Monitoring" },
            ].map(({ num, sup, label }, i) => (
              <div key={label} className={`reveal${i > 0 ? ` d${i}` : ""}`} style={{ padding: "36px 0", borderRight: i < 3 ? "1px solid var(--border)" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "42px", fontWeight: 700, color: "var(--black)", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.04em" }}>
                  {num}{sup && <sup style={{ fontSize: "22px", color: "var(--black)" }}>{sup}</sup>}
                </div>
                <div style={{ fontSize: "12px", color: "#9a9a96", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.09em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES (client component) ── */}
        <ServicesSection />

        {/* ── STORY ── */}
        <div className="rsp-dark-pad" style={{ background: "var(--black)" }}>
          <div className="rsp-story-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                <span style={{ width: "16px", height: "1.5px", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />The Reality
              </div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 58px)", color: "white", marginBottom: "20px" }}>Most production failures<br />aren&apos;t technical.</h2>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "16px" }}>Zillow lost $500M, not because of bad code, but because a market moved while the model stood still. The gap between research and reliable production is a strategy problem, not a syntax problem.</p>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>Krylox closes that gap. The same practices that run ML at Google and Meta, applied to your stack.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "36px" }}>
              <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "20px", fontWeight: 600, color: "white", lineHeight: 1.4, marginBottom: "20px", letterSpacing: "-0.02em" }}>&ldquo;It works on my machine&rdquo; is a strategy failure waiting to happen.</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>What we deploy by default</div>
              <div>
                {["Live statistical drift monitoring, always on", "Automated retraining, no human in the loop", "Immutable containers, survives people, laptops, time", "Full observability: traces, logs, prediction metrics", "Canary deploys with automatic rollback"].map((item, i) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none", fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0, display: "inline-block" }} />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── WHY KRYLOX ── */}
        <section id="why" className="rsp-section" style={S.section("var(--off-white)")}>
          <div style={S.inner()}>
            <div className="eyebrow reveal">Why Krylox</div>
            <h2 className="reveal d1" style={S.h2()}>What separates us<br />from generalist agencies.</h2>
            <div className="rsp-why-grid">
              {WHY.map((w, i) => (
                <div key={w.num} className={`why-card reveal${i % 3 > 0 ? ` d${i % 3}` : ""}`}>
                  <div className="wc-num">{w.num}</div>
                  <div className="wc-title">{w.title}</div>
                  <p className="wc-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="rsp-section" style={S.section("white")}>
          <div style={S.inner()}>
            <div className="eyebrow reveal">How We Work</div>
            <h2 className="reveal d1" style={S.h2()}>From audit<br />to live production.</h2>
            <div className="rsp-process-grid">
              {PROCESS.map((p, i) => (
                <div key={p.num} className={`reveal${i > 0 ? ` d${i}` : ""}`} style={{ position: "relative" }}>
                  {i < PROCESS.length - 1 && <div className="rsp-process-connector" style={{ position: "absolute", top: "20px", right: "-24px", width: "48px", height: "1px", background: "var(--border)" }} />}
                  <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9a9a96", marginBottom: "20px" }}>{p.step}</div>
                  <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "56px", fontWeight: 700, color: "#e2e2e0", lineHeight: 1, marginBottom: "20px", letterSpacing: "-0.04em" }}>{p.num}</div>
                  <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "18px", fontWeight: 700, color: "var(--black)", marginBottom: "10px" }}>{p.title}</div>
                  <p style={{ fontSize: "13.5px", color: "#5a5a56", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANAGED GPU HOSTING ── */}
        <section id="hosting" className="rsp-section" style={S.section("var(--off-white)")}>
          <div style={S.inner()}>
            <div className="eyebrow reveal">Managed GPU Hosting</div>
            <h2 className="reveal d1" style={S.h2()}>Your model. Our GPUs.<br />You pay for what you use.</h2>
            <p className="reveal d2" style={{ ...S.lead(), marginTop: "16px" }}>No reserved instances. Deploy your optimized model on Krylox infrastructure, plans start from a single day.</p>

            <div className="rsp-hosting-grid">
              <div style={{ border: "1px solid var(--border)" }}>
                {HOSTING_STEPS.map((step, i) => (
                  <div key={step.n} className={`reveal${i > 0 ? ` d${i}` : ""}`} style={{ padding: "32px 36px", borderBottom: i < 2 ? "1px solid var(--border)" : "none", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "13px", fontWeight: 700, color: "var(--black)", minWidth: "28px", marginTop: "2px" }}>{step.n}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", fontWeight: 700, color: "var(--black)", marginBottom: "8px" }}>{step.title}</div>
                      <p style={{ fontSize: "14px", color: "#5a5a56", lineHeight: 1.65 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal d1" style={{ background: "var(--black)", padding: "48px 44px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>Why host with Krylox</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                  {HOSTING_BENEFITS.map(b => (
                    <div key={b.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0, marginTop: "7px", display: "inline-block" }} />
                      <div>
                        <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{b.title}</div>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: "var(--black)", padding: "14px 28px", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-ibm-plex-sans)", textDecoration: "none" }}>
                  Get a hosting quote →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section id="tech" className="rsp-section" style={S.section("var(--off-white)")}>
          <div style={S.inner()}>
            <div className="eyebrow reveal">Tech Stack</div>
            <h2 className="reveal d1" style={S.h2()}>The tools in our production stack.</h2>
            <div style={{ marginTop: "56px" }}>
              {TECH_ROWS.map((row, i) => (
                <div key={row.cat} className={`rsp-tech-row reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`} style={{ borderTop: "1px solid var(--border)", borderBottom: i === TECH_ROWS.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9a9a96" }}>{row.cat}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                    {row.chips.map(chip => <span key={chip} className="chip">{chip}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (client component) ── */}
        <FaqSection />

        {/* ── CONTACT ── */}
        <section id="contact" className="rsp-section" style={S.section("var(--black)")}>
          <div style={S.inner()}>
            <div className="rsp-contact-grid">
              <div>
                <div className="eyebrow reveal" style={{ color: "rgba(255,255,255,0.35)" }}>Send us a message</div>
                <h2 className="reveal d1" style={S.h2("white")}>Prefer to write<br />before we talk?</h2>
                <p className="reveal d2" style={{ ...S.lead("rgba(255,255,255,0.45)"), marginTop: "16px" }}>Share your stack, pain points, and goals. We&apos;ll reply within 24 hours.</p>
                <div className="reveal d3" style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "40px" }}>
                  {[{ label: "Email", value: "hello@krylox.ai" }, { label: "Availability", value: "EMEA · UAE · India · US" }, { label: "Response time", value: "Within 24 hours" }].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)" }}>{item.label}</div>
                      <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", fontWeight: 600, color: "white", marginTop: "4px" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
