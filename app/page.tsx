import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Extreme Inference Optimization",
    description:
      "Achieve drastic speed and cost optimization for AI models using quantization, TensorRT/ONNX, and intelligent serving strategies.",
    tags: ["Quantization", "TensorRT", "ONNX", "Triton"],
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "End-to-End MLOps Pipelines",
    description:
      "Building automated feature stores, CI/CD for ML, retraining loops, canary deployments, and full observability for production models.",
    tags: ["CI/CD", "KServe", "Kubeflow", "MLflow"],
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Data Drift & Silent Failure Protection",
    description:
      "Implementing live statistical monitoring, prediction logging, and automated validation and redeployment pipelines.",
    tags: ["Drift Detection", "Monitoring", "Alerts", "OpenTelemetry"],
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Reproducibility Debt Elimination",
    description:
      "Containerizing ML systems with immutable containers and exact dependency pinning to eliminate deployment risks and inconsistencies.",
    tags: ["Docker", "Kubernetes", "Dependency Pinning", "IaC"],
  },
];

const FEATURES = [
  {
    title: "Deep Technical Expertise",
    description:
      "Our team has shipped production ML systems at scale. We know the difference between benchmark performance and real-world reliability.",
  },
  {
    title: "Fast Time-to-Value",
    description:
      "No endless discovery phases. We audit your stack, build a plan, and start delivering in the first week.",
  },
  {
    title: "Built to Scale",
    description:
      "Every solution is designed for growth, from single-model deployments to multi-tenant serving infrastructure.",
  },
  {
    title: "Global Coverage",
    description:
      "Serving clients across EMEA, UAE, and India with enterprise SLAs and timezone-appropriate support.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit",
    description:
      "We perform a deep technical audit of your ML infrastructure: serving stack, pipelines, monitoring, and reproducibility posture.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We design a targeted optimization plan with clear milestones, technology choices, and expected outcomes. No fluff.",
  },
  {
    step: "03",
    title: "Deploy & Hand Off",
    description:
      "We implement everything, run load tests, set up alerting, and transfer full ownership to your team with documentation.",
  },
];


const TECH = [
  "PyTorch", "TensorFlow", "TensorRT", "ONNX", "Triton Inference Server",
  "KServe", "Kubernetes", "Docker", "MLflow", "Kubeflow",
  "OpenTelemetry", "Ray Serve", "FastAPI", "Grafana",
];

export default function Home() {

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
          <div className="dot-grid absolute inset-0 opacity-[0.35]" />
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-red-600/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-red-600/[0.04] blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-red-600" />
                  <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                    MLOps & AI Inference Consulting
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-[1.05] tracking-tight">
                  Production AI,
                  <br />
                  <span className="text-red-600">Faster</span> & Cheaper.
                </h1>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                  Battle-tested, end-to-end MLOps services and extreme inference optimization.
                  We specialize in making production AI models fast, cheap, and reliable at any scale.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="rounded-md bg-black px-8 py-3.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors text-center"
                  >
                    Talk to an Expert
                  </a>
                  <a
                    href="#services"
                    className="rounded-md border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-black hover:border-black transition-colors text-center"
                  >
                    Explore Services
                  </a>
                </div>
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
                  {["EMEA", "UAE", "India"].map((region) => (
                    <span key={region} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: performance dashboard card */}
              <div className="hidden lg:block">
                <div className="relative mt-6 mb-6 ml-6 mr-6">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-7">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        Model Performance
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </span>
                    </div>

                    <div className="space-y-5">
                      {[
                        { label: "Latency p99", before: "480ms", after: "52ms", barWidth: "11%", color: "bg-red-600", afterColor: "text-black" },
                        { label: "GPU Cost / 1M req", before: "$420", after: "$168", barWidth: "40%", color: "bg-red-600", afterColor: "text-black" },
                        { label: "Drift Incidents", before: null, after: "0 this month", barWidth: "100%", color: "bg-green-500", afterColor: "text-green-600" },
                        { label: "Reproducibility Score", before: null, after: "10 / 10", barWidth: "100%", color: "bg-black", afterColor: "text-black" },
                      ].map(({ label, before, after, barWidth, color, afterColor }) => (
                        <div key={label}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-500">{label}</span>
                            <div className="flex items-center gap-2">
                              {before && (
                                <span className="text-gray-400 line-through text-xs">{before}</span>
                              )}
                              <span className={`font-bold ${afterColor}`}>{after}</span>
                            </div>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`bar-width h-1.5 ${color} rounded-full`} style={{ ["--bar-width" as string]: barWidth }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">Updated just now</span>
                      <span className="text-xs font-semibold text-red-600">Powered by Krylox</span>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-black text-white rounded-xl px-4 py-3 shadow-xl">
                    <span className="text-2xl font-extrabold text-red-400">10x</span>
                    <p className="text-xs text-gray-400">faster inference</p>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-black text-white rounded-xl px-4 py-3 shadow-xl">
                    <span className="text-2xl font-extrabold text-red-400">60%</span>
                    <p className="text-xs text-gray-400">cost reduction</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10">
              {[
                { stat: "10x", label: "Faster Model Inference (Target)" },
                { stat: "60%", label: "Cost Reduction (Target)" },
                { stat: "100%", label: "Reproducible Deployments (Goal)" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center md:items-start md:px-16 md:first:pl-0 md:last:pr-0"
                >
                  <span className="text-5xl font-extrabold text-red-500">{stat}</span>
                  <span className="mt-2 text-gray-400 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-black tracking-tight">
                End-to-end AI engineering services
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                From prototype to production-grade systems, we cover the full spectrum.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map(({ icon, title, description, tags }) => (
                <div
                  key={title}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 mb-6">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY KRYLOX */}
        <section id="why-krylox" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                  Why Krylox
                </span>
                <h2 className="mt-3 text-4xl font-extrabold text-black tracking-tight">
                  Built by engineers, for engineers
                </h2>
                <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                  We don&apos;t just advise. We embed with your team, write the code, and own the
                  outcome. Every engagement is hands-on and results-driven.
                </p>

                <div className="mt-10 space-y-6">
                  {FEATURES.map(({ title, description }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-600 mt-0.5">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{title}</h3>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal visual */}
              <div className="relative mt-6 mb-6 ml-6 mr-6">
                <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-gray-500 text-xs font-mono">krylox audit</span>
                  </div>
                  <div className="font-mono text-sm leading-7 select-none overflow-x-auto">
                    <p className="text-green-400">$ krylox audit --stack production</p>
                    <p className="text-white/50 mt-1">Analyzing inference pipeline...</p>
                    <p className="text-white/50">Checking drift monitors...</p>
                    <p className="text-white/50">Scanning container configs...</p>
                    <p className="text-yellow-400 mt-2">&#9888; Latency p99: 480ms (target: 50ms)</p>
                    <p className="text-yellow-400">&#9888; No drift monitoring detected</p>
                    <p className="text-yellow-400">&#9888; Reproducibility score: 3/10</p>
                    <p className="text-green-400 mt-2">Generating optimization plan...</p>
                    <p className="text-white/70">&#10003; TensorRT: estimated 8x latency reduction</p>
                    <p className="text-white/70">&#10003; INT8 quantization: 4x memory saving</p>
                    <p className="text-white/70">&#10003; Drift alerts: ready to configure</p>
                    <p className="text-green-400 mt-2">$ krylox optimize --apply</p>
                    <p className="text-white/50">Deploying optimized serving stack...</p>
                    <p className="text-green-300 font-semibold">&#10003; Done. Latency p99: 52ms</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-3 border border-gray-100">
                  <span className="text-2xl font-extrabold text-black">8x</span>
                  <p className="text-xs text-gray-500 font-medium">latency reduction</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 border border-gray-100">
                  <span className="text-2xl font-extrabold text-black">60%</span>
                  <p className="text-xs text-gray-500 font-medium">cost saved</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-black tracking-tight">
                From audit to production in weeks
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                A no-nonsense engagement model with clear milestones and full transparency.
              </p>
            </div>

            <div className="relative">
              {/* Connector line — spans full width; circles sit on top with bg-gray-50 to visually break it */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-200" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {PROCESS.map(({ step, title, description }) => (
                  <div key={step} className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 border-2 border-red-600 text-red-600 font-extrabold text-sm mb-6 relative z-10 shadow-sm">
                      {step}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* TECH STACK */}
        <section className="bg-white py-16 border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">
              Core Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-black py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to scale your AI?
            </h2>
            <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Let&apos;s talk about your ML infrastructure. We&apos;ll identify the biggest
              bottlenecks and show you exactly how to fix them, for free.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@krylox.ai?subject=Free Audit Request"
                className="rounded-md bg-red-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
              >
                Schedule a Free Audit
              </a>
              <a
                href="mailto:hello@krylox.ai?subject=General Inquiry"
                className="rounded-md border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Send Us a Message
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Serving clients across&nbsp;
              <span className="text-gray-300">EMEA</span>
              &nbsp;&middot;&nbsp;
              <span className="text-gray-300">UAE</span>
              &nbsp;&middot;&nbsp;
              <span className="text-gray-300">India</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
