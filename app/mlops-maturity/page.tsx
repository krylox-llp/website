import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MLOpsAssessment from "@/components/MLOpsAssessment";

export const metadata: Metadata = {
  title: "MLOps Maturity Assessment",
  description:
    "Assess your organization's MLOps maturity across 5 levels — from manual processes to fully automated operations. Get an honest score and a concrete roadmap from Krylox.",
  alternates: { canonical: "https://krylox.ai/mlops-maturity" },
  openGraph: {
    title: "MLOps Maturity Assessment | Krylox",
    description:
      "8 questions based on the Microsoft MLOps Maturity Model. Find out your current level and what it takes to reach the next one.",
    url: "https://krylox.ai/mlops-maturity",
  },
};

export default function MLOpsMaturityPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <MLOpsAssessment />
      </main>
      <Footer />
    </>
  );
}
