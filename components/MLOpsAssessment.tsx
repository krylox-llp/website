"use client";

import { useState } from "react";

/* ── Data ───────────────────────────────────────────── */

const QUESTIONS = [
  {
    id: "team",
    category: "People",
    question: "How do your ML practitioners collaborate across roles?",
    options: [
      { score: 0, label: "Isolated silos", desc: "Data scientists, data engineers, and software engineers work independently with little to no communication." },
      { score: 1, label: "Isolated, formal handoff", desc: "All three roles still work in isolation without regular communication. The advance over Level 0 is that models are formally handed off to software engineers for release, rather than managed end-to-end by a single data scientist." },
      { score: 2, label: "DS + DE collaboration", desc: "Data scientists work directly with data engineers to convert experiment code into repeatable scripts and jobs." },
      { score: 3, label: "Cross-functional alignment", desc: "Data engineers manage inputs and outputs jointly with both data scientists and software engineers." },
      { score: 4, label: "Fully integrated ownership", desc: "All roles collaborate end-to-end - from development to deployment and post-deployment metrics ownership." },
    ],
  },
  {
    id: "data",
    category: "Data Pipeline",
    question: "How is training data collected and prepared?",
    options: [
      { score: 0, label: "Manual collection", desc: "Data is gathered manually each time training is needed. No pipeline automation exists." },
      { score: 1, label: "Automated pipeline", desc: "A basic automated data pipeline exists, but compute may be unmanaged." },
      { score: 2, label: "Managed, reproducible, with feature store", desc: "The pipeline is automated, compute is managed, environments are consistently defined, and a managed feature store is adopted for reusable feature definitions." },
      { score: 3, label: "Versioned inputs and outputs", desc: "Pipeline inputs, outputs, and feature definitions are all version controlled and traceable." },
      { score: 4, label: "Metrics-triggered updates", desc: "Production drift or performance signals automatically trigger data re-ingestion and pipeline reruns." },
    ],
  },
  {
    id: "experiments",
    category: "Experiment Tracking",
    question: "How are ML experiments and results tracked?",
    options: [
      { score: 0, label: "Not tracked", desc: "Experiments are ad-hoc; results are not consistently recorded and reproducibility is nearly impossible." },
      { score: 1, label: "Still inconsistent", desc: "Experiments may be noted ad-hoc in notebooks but tracking is not consistent. Results are difficult to trace and reproduce across runs." },
      { score: 2, label: "Centralized tracking", desc: "All experiment results are tracked using a dedicated tool (MLflow, W&B, Comet) with centralized storage." },
      { score: 3, label: "Performance baselines", desc: "Centralized tracking with established baselines that inform model promotion decisions." },
      { score: 4, label: "Automated comparison", desc: "Automated comparison against baselines drives policy-based model promotion with no manual review." },
    ],
  },
  {
    id: "versioncontrol",
    category: "Version Control",
    question: "What ML artifacts are under version control?",
    options: [
      { score: 0, label: "Nothing ML-related", desc: "Training scripts, models, and data pipelines live outside version control or only in local notebooks." },
      { score: 1, label: "Application code only", desc: "Software application code is version controlled, but training code and model files are not." },
      { score: 2, label: "Code and model artifacts", desc: "Training code and trained model files/artifacts are both version controlled." },
      { score: 3, label: "Code, models, and pipelines", desc: "Training code, models, data pipeline definitions, and scoring scripts are all version controlled with tests." },
      { score: 4, label: "Everything, including features", desc: "All of the above, plus deployment configs, feature store definitions, and environment specifications." },
    ],
  },
  {
    id: "release",
    category: "Model Release",
    question: "How are new model versions released to production?",
    options: [
      { score: 0, label: "Manual, single person", desc: "A single data scientist or engineer handles each release manually with no documented process." },
      { score: 1, label: "Manual handoff", desc: "The model is manually handed off to software engineers who manage the release ad-hoc." },
      { score: 2, label: "Documented manual release", desc: "Managed by the software engineering team using version-controlled scripts, but triggered manually." },
      { score: 3, label: "CI/CD automated", desc: "A CI/CD pipeline automatically handles model releases. No manual deployment steps required." },
      { score: 4, label: "Policy-based promotion", desc: "Model promotion is fully automated and governed by policies in a model registry." },
    ],
  },
  {
    id: "testing",
    category: "Testing",
    question: "What automated testing exists for your ML models?",
    options: [
      { score: 0, label: "None", desc: "Testing is manual or non-existent; model correctness is checked informally before release." },
      { score: 1, label: "Basic integration tests", desc: "Basic integration tests exist for the model endpoint, but coverage is limited." },
      { score: 2, label: "Integration and unit tests", desc: "Integration tests for the model plus unit tests for application code." },
      { score: 3, label: "Per-release test suite", desc: "Every model release triggers a comprehensive suite of unit and integration tests automatically." },
      { score: 4, label: "A/B and performance tests", desc: "Automated A/B testing compares new vs. current model performance before every promotion decision." },
    ],
  },
  {
    id: "monitoring",
    category: "Monitoring",
    question: "How are deployed models monitored in production?",
    options: [
      { score: 0, label: "No monitoring", desc: "Model performance is not tracked. Issues are discovered via user complaints or manual checks." },
      { score: 1, label: "Basic uptime only", desc: "Infrastructure uptime is monitored but model prediction quality is not measured." },
      { score: 2, label: "Centralized dashboard", desc: "Model performance metrics are collected and visible in a centralized dashboard." },
      { score: 3, label: "Alerting on degradation", desc: "Verbose centralized metrics with alerts that notify engineers when performance degrades." },
      { score: 4, label: "Automated drift detection", desc: "Drift and regression signals are detected automatically and trigger retraining workflows." },
    ],
  },
  {
    id: "retraining",
    category: "Retraining",
    question: "How is model retraining handled when performance degrades?",
    options: [
      { score: 0, label: "Fully manual", desc: "Retraining happens when someone notices a problem and manually triggers the process." },
      { score: 1, label: "Scheduled or on request", desc: "Retraining runs on a set schedule or by request but is not automated end-to-end." },
      { score: 2, label: "Automated training, manual deploy", desc: "Training is automated (scheduled or event-driven) but deployment still requires human approval." },
      { score: 3, label: "Full CI/CD automation", desc: "Both retraining and redeployment are automated via CI/CD with no human gate required." },
      { score: 4, label: "Production-signal triggered", desc: "Drift or regression metrics automatically trigger retraining, evaluation, and redeployment end-to-end." },
    ],
  },
];

const LEVELS = [
  {
    level: 0,
    name: "No MLOps",
    color: "#9a9a96",
    bgColor: "rgba(154,154,150,0.12)",
    tagline: "Manual processes dominate your ML lifecycle.",
    description:
      "Your ML pipeline relies heavily on individual expertise and manual steps. Models are difficult to reproduce, experiments are inconsistently tracked, and releases are fragile. The operational burden grows with every new model you add.",
    strengths: [
      "Models exist in production - you are further along than many organizations",
      "Small team can pivot quickly with fewer constraints",
    ],
    improvements: [
      "Version control your training code and trained model artifacts",
      "Adopt a centralized experiment tracking tool (MLflow, W&B, or Comet)",
      "Automate your data collection pipeline to remove manual bottlenecks",
      "Document the release process in full before you attempt to automate it",
    ],
    kryloxPitch:
      "Starting from zero is the easiest place to get maximum impact. Krylox designs and implements your entire MLOps foundation in a single focused engagement.",
  },
  {
    level: 1,
    name: "DevOps but No MLOps",
    color: "#C9622F",
    bgColor: "rgba(201,98,47,0.1)",
    tagline: "Software engineering is solid. ML operations still lag.",
    description:
      "You have applied good DevOps practices to application code but have not extended them to the ML lifecycle. Releases rely on the data team for every new model, feedback about model performance in production is limited, and results are difficult to trace and reproduce. Training is still manual even though application deployments are automated.",
    strengths: [
      "Application releases are automated - a significant advance over Level 0",
      "Application code and builds are fully version controlled",
      "Basic integration tests exist for the model and unit tests for application code",
    ],
    improvements: [
      "Automate model training pipelines using scheduled or event-driven jobs",
      "Start tracking experiment results consistently - even basic MLflow logging counts",
      "Version control trained model files alongside your application code",
      "Extend your CI/CD pipelines to include model scoring scripts and evaluation steps",
    ],
    kryloxPitch:
      "You have the DevOps muscle - you just need to apply it to the ML side. Krylox builds automated training pipelines that slot directly into your existing CI/CD setup.",
  },
  {
    level: 2,
    name: "Automated Training",
    color: "#B89A1A",
    bgColor: "rgba(184,154,26,0.1)",
    tagline: "Reproducible training. Deployment is still the bottleneck.",
    description:
      "Your training environment is fully managed and reproducible. Models are version controlled and experiments are tracked centrally. The bottleneck is now deployment: releases are manual even though training is automated, creating a gap between your ML and software engineering velocity.",
    strengths: [
      "Training environment is fully managed, traceable, and easy to reproduce",
      "Centralized experiment tracking and model management in place",
      "Managed compute with consistent, version-controlled environments",
      "Data scientists and data engineers collaborate directly - software engineers still receive models remotely",
    ],
    improvements: [
      "Automate model deployment via CI/CD - the highest-leverage next step",
      "Add A/B testing for model performance validation at promotion time",
      "Ensure all code paths have both unit and integration tests",
      "Adopt a model registry to manage artifact promotion across environments",
    ],
    kryloxPitch:
      "You have solved reproducibility. Now solve speed to production. Krylox implements automated model deployment pipelines that take trained models from registry to production without manual gates.",
  },
  {
    level: 3,
    name: "Automated Deployment",
    color: "#1E7A7A",
    bgColor: "rgba(30,122,122,0.1)",
    tagline: "Strong pipeline. The production feedback loop is still open.",
    description:
      "You have a mature MLOps pipeline with automated training, comprehensive testing, and CI/CD-managed deployments. Full traceability exists from deployment back to source data. The remaining gap is closing the feedback loop: production signals do not yet drive automatic retraining.",
    strengths: [
      "Training and deployment automated end-to-end via CI/CD",
      "Comprehensive unit and integration tests on every release",
      "A/B testing integrated at deployment time",
      "Full traceability from model artifact back to source data",
    ],
    improvements: [
      "Have software engineers implement post-deployment metrics gathering as part of their ownership",
      "Deploy verbose, centralized production metrics so the model emits observable signals",
      "Add drift and regression detection - wire signals to automatically trigger retraining pipelines",
      "Move to policy-based model promotion using a model registry (e.g., Azure ML Registries)",
    ],
    kryloxPitch:
      "You are one closed loop away from Level 4. Krylox implements drift detection and automated retraining workflows that complete the feedback cycle from production back into your training pipeline.",
  },
  {
    level: 4,
    name: "Full MLOps Automated Operations",
    color: "#1E7A39",
    bgColor: "rgba(30,122,57,0.1)",
    tagline: "A self-monitoring, self-improving ML system.",
    description:
      "You have achieved a fully automated, self-healing ML system. Production signals drive continuous improvement with minimal human intervention. Drift and regression automatically trigger retraining and redeployment. Your system approaches zero downtime and the team focuses on higher-order work.",
    strengths: [
      "Full system is automated and easily monitored - approaching zero downtime",
      "Drift and regression signals trigger automatic retraining via event-driven pipelines",
      "Policy-based model promotion automated through a model registry",
      "Deployed models emit verbose, centralized metrics",
      "Feature materialization health and freshness are actively monitored",
      "All roles share end-to-end ownership including post-deployment metrics gathering",
    ],
    improvements: [
      "Explore GenAIOps practices - prompt lifecycle, RAG, safety guardrails, token governance",
      "Invest in feature store freshness monitoring and materialization health checks",
      "Consider champion/challenger and multi-model ensemble patterns",
      "Evaluate compute cost optimization across your GPU and inference footprint",
    ],
    kryloxPitch:
      "You are operating at the highest MLOps maturity. Krylox can help you extend these practices to generative AI workloads or optimize the cost efficiency of your existing ML infrastructure.",
  },
];

/* ── Main export ─────────────────────────────────────── */

export default function MLOpsAssessment() {
  const [screen, setScreen] = useState<"intro" | "quiz" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  function handleNext() {
    if (selected === null) return;
    const newAnswers = { ...answers, [QUESTIONS[currentQ].id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setScreen("results");
    }
  }

  function handleBack() {
    if (currentQ === 0) {
      setScreen("intro");
      setAnswers({});
      setSelected(null);
    } else {
      const prev = QUESTIONS[currentQ - 1];
      setSelected(answers[prev.id] ?? null);
      setCurrentQ(currentQ - 1);
    }
  }

  function handleRestart() {
    setScreen("intro");
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
  }

  function computeLevel(): number {
    const scores = Object.values(answers);
    if (scores.length === 0) return 0;
    return Math.floor(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  if (screen === "intro") return <IntroScreen onStart={() => setScreen("quiz")} />;
  if (screen === "quiz")
    return (
      <QuizScreen
        question={QUESTIONS[currentQ]}
        questionIndex={currentQ}
        totalQuestions={QUESTIONS.length}
        selected={selected}
        onSelect={setSelected}
        onNext={handleNext}
        onBack={handleBack}
      />
    );
  return <ResultsScreen levelData={LEVELS[computeLevel()]} answers={answers} onRestart={handleRestart} />;
}

/* ── Intro screen ────────────────────────────────────── */

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ minHeight: "calc(100vh - 64px)", background: "var(--black)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <div className="hero-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-200px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,43,32,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="rsp-hero" style={{ background: "transparent", minHeight: "unset", padding: "80px 56px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "32px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />
            Free Assessment · 5 minutes · 8 questions
          </div>

          <h1 style={{ fontSize: "clamp(40px, 5.5vw, 68px)", color: "white", marginBottom: "24px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            Where does your MLOps<br />maturity actually stand?
          </h1>

          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "48px" }}>
            Based on the Microsoft MLOps Maturity Model. Answer 8 questions about your team, pipeline, and tooling - get an honest assessment of your current level and a concrete roadmap to the next one.
          </p>

          <button
            onClick={onStart}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--red)", color: "white", padding: "16px 32px", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans)", transition: "background 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.background = "var(--red-hover)")}
            onMouseOut={e => (e.currentTarget.style.background = "var(--red)")}
          >
            Start Assessment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Level pills */}
          <div style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "24px" }}>
              The 5 maturity levels
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px" }}>
              {LEVELS.map(l => (
                <div key={l.level} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: l.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "white", flexShrink: 0 }}>
                    {l.level}
                  </div>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Quiz screen ─────────────────────────────────────── */

function QuizScreen({
  question,
  questionIndex,
  totalQuestions,
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  question: (typeof QUESTIONS)[0];
  questionIndex: number;
  totalQuestions: number;
  selected: number | null;
  onSelect: (n: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", background: "var(--off-white)", display: "flex", flexDirection: "column" }}>
      {/* Progress bar */}
      <div style={{ height: "3px", background: "var(--border)", flexShrink: 0 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "var(--red)", transition: "width 0.3s ease" }} />
      </div>

      <div className="mlops-quiz-inner" style={{ flex: 1, maxWidth: "760px", margin: "0 auto", width: "100%" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9a9a96" }}>
            {question.category}
          </div>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#9a9a96" }}>
            {questionIndex + 1} / {totalQuestions}
          </div>
        </div>

        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", color: "var(--black)", marginBottom: "36px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {question.question}
        </h2>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {question.options.map(opt => {
            const isSelected = selected === opt.score;
            return (
              <button
                key={opt.score}
                onClick={() => onSelect(opt.score)}
                style={{
                  background: isSelected ? "var(--black)" : "white",
                  border: isSelected ? "1.5px solid var(--black)" : "1.5px solid var(--border)",
                  padding: "18px 22px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.18s",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  width: "100%",
                }}
                onMouseOver={e => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "var(--black)";
                    e.currentTarget.style.background = "rgba(10,10,10,0.03)";
                  }
                }}
                onMouseOut={e => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "white";
                  }
                }}
              >
                <div style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: isSelected ? "none" : "1.5px solid var(--border)",
                  background: isSelected ? "var(--red)" : "transparent",
                  flexShrink: 0,
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.18s",
                }}>
                  {isSelected && (
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "14px", fontWeight: 700, color: isSelected ? "white" : "var(--black)", marginBottom: "4px", transition: "color 0.18s" }}>
                    {opt.label}
                  </div>
                  <div style={{ fontSize: "13px", color: isSelected ? "rgba(255,255,255,0.6)" : "#5a5a56", lineHeight: 1.6, transition: "color 0.18s" }}>
                    {opt.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={onBack}
            style={{ padding: "12px 22px", border: "1.5px solid var(--border)", background: "white", fontSize: "13px", fontWeight: 600, color: "#5a5a56", cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans)", transition: "all 0.18s" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "var(--black)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "#5a5a56"; }}
          >
            ← Back
          </button>
          <button
            onClick={onNext}
            disabled={selected === null}
            style={{
              padding: "12px 26px",
              background: selected !== null ? "var(--red)" : "#e2e2e0",
              color: selected !== null ? "white" : "#9a9a96",
              border: "none",
              fontSize: "13px",
              fontWeight: 700,
              cursor: selected !== null ? "pointer" : "not-allowed",
              fontFamily: "var(--font-ibm-plex-sans)",
              transition: "all 0.18s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseOver={e => { if (selected !== null) e.currentTarget.style.background = "var(--red-hover)"; }}
            onMouseOut={e => { if (selected !== null) e.currentTarget.style.background = "var(--red)"; }}
          >
            {isLast ? "See My Results" : "Next"}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Results screen ──────────────────────────────────── */

function ResultsScreen({
  levelData,
  answers,
  onRestart,
}: {
  levelData: (typeof LEVELS)[0];
  answers: Record<string, number>;
  onRestart: () => void;
}) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: "var(--black)", padding: "80px 56px", position: "relative", overflow: "hidden" }}>
        <div className="hero-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "40px" }}>
            <span style={{ width: "20px", height: "1.5px", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />
            Your Assessment Result
          </div>

          <div className="mlops-result-hero-grid" style={{ marginBottom: "48px" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: levelData.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "36px", fontWeight: 700, color: "white", letterSpacing: "-0.04em" }}>{levelData.level}</span>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: levelData.color, marginBottom: "8px" }}>
                Level {levelData.level} of 4
              </div>
              <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "white", marginBottom: "12px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                {levelData.name}
              </h1>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", fontWeight: 500, margin: 0 }}>
                {levelData.tagline}
              </p>
            </div>
          </div>

          {/* Level progress bar */}
          <div style={{ display: "flex", gap: "6px" }}>
            {LEVELS.map(l => (
              <div key={l.level} style={{ height: "6px", flex: 1, background: l.level <= levelData.level ? levelData.color : "rgba(255,255,255,0.1)", borderRadius: "2px", transition: "background 0.3s" }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
            {LEVELS.map(l => (
              <span key={l.level} style={{ fontSize: "10px", fontWeight: 600, color: l.level <= levelData.level ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)" }}>
                L{l.level}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description + strengths */}
      <div className="rsp-section" style={{ background: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="mlops-desc-grid">
            <div>
              <div className="eyebrow">What this means</div>
              <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: 1.8, marginTop: "4px" }}>
                {levelData.description}
              </p>
            </div>
            <div>
              <div className="eyebrow">What is working</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                {levelData.strengths.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: levelData.bgColor, border: `1.5px solid ${levelData.color}`, flexShrink: 0, marginTop: "1px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2.5L8 3" stroke={levelData.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "14px", color: "#3a3a38", lineHeight: 1.65 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="rsp-section" style={{ background: "var(--off-white)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="eyebrow">Your roadmap</div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "var(--black)", marginBottom: "48px", letterSpacing: "-0.03em" }}>
            {levelData.level < 4 ? `What it takes to reach Level ${levelData.level + 1}` : "Extending your mature MLOps practice"}
          </h2>

          <div className="mlops-imp-grid">
            {levelData.improvements.map((item, i) => (
              <div key={i} style={{ background: "white", border: "1.5px solid var(--border)", padding: "24px 26px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "11px", fontWeight: 700, color: "var(--red)", flexShrink: 0, marginTop: "2px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: "14px", color: "#3a3a38", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Dimension breakdown */}
          <div style={{ marginTop: "72px" }}>
            <div className="eyebrow">Score by dimension</div>
            <div className="mlops-breakdown-grid" style={{ marginTop: "4px" }}>
              {QUESTIONS.map(q => {
                const score = answers[q.id] ?? 0;
                const label = q.options[score]?.label ?? "";
                return (
                  <div key={q.id} style={{ background: "white", border: "1.5px solid var(--border)", padding: "18px 16px" }}>
                    <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9a9a96", marginBottom: "12px" }}>{q.category}</div>
                    <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
                      {[0, 1, 2, 3, 4].map(dot => (
                        <div key={dot} style={{ height: "4px", flex: 1, background: dot <= score ? levelData.color : "var(--border)", borderRadius: "2px" }} />
                      ))}
                    </div>
                    <div style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "22px", fontWeight: 700, color: "var(--black)", lineHeight: 1, marginBottom: "4px" }}>L{score}</div>
                    <div style={{ fontSize: "11px", color: "#9a9a96", lineHeight: 1.4 }}>{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rsp-section" style={{ background: "var(--black)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="mlops-cta-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
                <span style={{ width: "16px", height: "1.5px", background: "rgba(255,255,255,0.35)", display: "inline-block" }} />
                What Krylox can do for you
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "white", marginBottom: "16px", letterSpacing: "-0.03em" }}>
                Ready to move to the next level?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "500px", margin: 0 }}>
                {levelData.kryloxPitch}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://calendar.app.google/3QEmmNd7hzfVYk6K8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", background: "var(--red)", color: "white", padding: "14px 28px", fontWeight: 700, fontSize: "14px", textDecoration: "none", fontFamily: "var(--font-ibm-plex-sans)", whiteSpace: "nowrap", transition: "background 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.background = "var(--red-hover)")}
                onMouseOut={e => (e.currentTarget.style.background = "var(--red)")}
              >
                Book a diagnostic call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={onRestart}
                style={{ padding: "12px 20px", border: "1.5px solid rgba(255,255,255,0.15)", background: "transparent", color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-ibm-plex-sans)", textAlign: "center", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                Retake assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
