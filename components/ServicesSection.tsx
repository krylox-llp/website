"use client";
import { useState, useTransition } from "react";

const SERVICES = [
  {
    id: "s1", num: "01", title: "Inference Optimization",
    tag: "Core Service",
    desc: "Your models leave latency on the table. We recover it through quantization, pruning, kernel fusion, and intelligent batching.",
    bullets: ["INT8/FP16 quantization with TensorRT and ONNX", "Kernel fusion and operator optimization", "Dynamic batching and request queuing", "Latency profiling and bottleneck elimination", "GPU utilization analysis and tuning"],
  },
  {
    id: "s2", num: "02", title: "MLOps Pipeline Design",
    tag: "Core Service",
    desc: "CI/CD built for ML. Automated training, evaluation, versioning, and deployment pipelines so your models stay current and your team stays focused on building.",
    bullets: ["Feature store design and integration", "Automated retraining triggers and canary deploys", "OpenTelemetry observability across the pipeline", "KServe / Triton serving infrastructure", "Kubeflow and Airflow orchestration"],
  },
  {
    id: "s3", num: "03", title: "Drift Protection",
    tag: "Monitoring",
    desc: "Keep your model drift-proof in production. Live statistical monitoring, prediction logging, and automated retraining loops catch degradation before it reaches your users.",
    bullets: ["Real-time data and concept drift detection", "Automated model validation pipelines", "Prediction quality dashboards with alerting", "Zero-human retraining and redeployment"],
  },
  {
    id: "s4", num: "04", title: "Reproducibility Systems",
    tag: "Infrastructure",
    desc: "A model that only runs on one MacBook quietly becomes dead code the moment a data scientist leaves. We kill that risk on day one.",
    bullets: ["Immutable container builds and environment pinning", "MLflow registry with full artifact versioning", "Experiment tracking and comparison tooling", "Exact dependency management across environments"],
  },
  {
    id: "s5", num: "05", title: "Cloud Cost Optimization",
    tag: "Cost Engineering",
    desc: "Right-sizing, spot instance strategies, and serving architecture tuning that cuts monthly GPU bills by up to 60%.",
    bullets: ["Spot instance and preemptible GPU strategies", "Workload right-sizing and instance selection", "Model compression to reduce serving footprint", "Multi-cloud and hybrid deployment architectures"],
  },
  {
    id: "s7", num: "06", title: "Managed GPU Hosting",
    tag: "Managed Infrastructure",
    desc: "Deploy your optimized model on Krylox's own GPU fleet. Plans start from a single day, auto-scaling built in, 99.9% uptime SLA included.",
    bullets: ["Flexible billing, from as low as per day", "Krylox-managed GPU infrastructure", "Auto-scaling to match your traffic", "99.9% uptime SLA with live monitoring", "Fully managed updates, patching, and security", "Works with any optimized model we deliver"],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("s1");
  const [showAllServices, setShowAllServices] = useState(false);
  const [, startTransition] = useTransition();

  return (
    <section id="services" className="rsp-section" style={{ background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="eyebrow reveal">What We Do</div>
        <h2 className="reveal d1" style={{ fontSize: "clamp(36px, 4vw, 58px)", marginBottom: "20px", color: "var(--black)" }}>
          Specialist MLOps engineering.<br />Every layer of the production stack.
        </h2>

        <div className="rsp-services-grid">
          <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
            {SERVICES.slice(0, 2).map((s) => (
              <div key={s.id} className={`service-item${activeService === s.id ? " active" : ""}`} onClick={() => startTransition(() => setActiveService(s.id))}>
                <span className="si-num">{s.num}</span>
                <span className="si-title">{s.title}</span>
              </div>
            ))}
            {showAllServices && SERVICES.slice(2).map((s) => (
              <div key={s.id} className={`service-item${activeService === s.id ? " active" : ""}`} onClick={() => startTransition(() => setActiveService(s.id))}>
                <span className="si-num">{s.num}</span>
                <span className="si-title">{s.title}</span>
              </div>
            ))}
            <button
              onClick={() => startTransition(() => {
                setShowAllServices(v => !v);
                if (showAllServices && !["s1", "s2"].includes(activeService)) setActiveService("s1");
              })}
              style={{ width: "100%", padding: "18px 28px", background: "none", border: "none", borderTop: "1px solid var(--border)", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-ibm-plex-sans)", color: "#9a9a96", textTransform: "uppercase", letterSpacing: "0.08em", transition: "color .2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "var(--black)")}
              onMouseOut={e => (e.currentTarget.style.color = "#9a9a96")}
            >
              <span style={{ display: "inline-block", transition: "transform .25s", transform: showAllServices ? "rotate(45deg)" : "none", fontSize: "18px", lineHeight: "1", color: "var(--black)" }}>+</span>
              {showAllServices ? "Fewer services" : "More services"}
            </button>
          </div>

          <div className="rsp-service-sticky">
            {SERVICES.map((s) => (
              <div key={s.id} style={{ background: "var(--off-white)", border: "1px solid var(--border)", padding: "48px", display: activeService === s.id ? "block" : "none" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a96", marginBottom: "20px" }}>{s.tag}</div>
                <h3 style={{ fontSize: "30px", marginBottom: "16px", color: "var(--black)" }}>{s.title}</h3>
                <p style={{ fontSize: "15px", color: "#5a5a56", lineHeight: 1.75, marginBottom: "28px" }}>{s.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.bullets.map((b) => (
                    <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#2a2a28", lineHeight: 1.5 }}>
                      <span style={{ color: "#9a9a96", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>→</span>{b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
