import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const BASE_URL = "https://krylox.ai";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Krylox LLP",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        contentUrl: `${BASE_URL}/logo.png`,
        width: 120,
        height: 32,
        caption: "Krylox",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      description:
        "Krylox LLP is a specialist MLOps and AI inference optimization engineering firm. We work on MLOps strategy and inference architecture, and host models on our own GPU fleet, so clients pay only for what they use. Team experience from Google, Meta, and Bloomberg.",
      email: "hello@krylox.ai",
      areaServed: [
        { "@type": "Place", name: "EMEA" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "MLOps",
        "AI inference optimization",
        "TensorRT",
        "ONNX",
        "Quantization",
        "Kubernetes",
        "Machine Learning Operations",
        "Model Deployment",
        "Data Drift Detection",
        "AI Infrastructure",
        "Managed GPU Hosting",
        "vLLM",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Krylox",
      description: "MLOps & AI Inference Engineering and Managed GPU Hosting.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Krylox | MLOps & AI Inference Optimization Services",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Krylox LLP advises on MLOps strategy and inference architecture, and hosts models on our own GPU fleet. Up to 10× faster inference, up to 60% cost reduction. Team from Google, Meta, Bloomberg.",
      datePublished: "2025-01-01",
      dateModified: "2026-04-20",
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Krylox LLP",
      url: BASE_URL,
      image: `${BASE_URL}/logo.png`,
      description:
        "Specialist MLOps and AI inference optimization engineering firm. Up to 10× faster inference, up to 60% cost reduction. Managed GPU hosting available.",
      email: "hello@krylox.ai",
      areaServed: ["EMEA", "UAE", "India", "United States"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MLOps & AI Engineering Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inference Optimization", description: "INT8/FP16 quantization, TensorRT optimization, kernel fusion, and intelligent batching for up to 10× faster production inference." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MLOps Pipeline Design", description: "End-to-end CI/CD for ML: automated training, evaluation, versioning, and deployment pipelines." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drift Protection", description: "Real-time data and concept drift detection with automated retraining and redeployment." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reproducibility Systems", description: "Immutable container builds, MLflow registry, and exact dependency management." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Cost Optimization", description: "GPU right-sizing, spot instance strategies, and model compression to reduce cloud ML spend by up to 60%." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed GPU Hosting", description: "Deploy your optimized model on Krylox GPU infrastructure. Plans start from as low as per day, pay only for what you use." } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What does Krylox do?", acceptedAnswer: { "@type": "Answer", text: "Krylox LLP is a specialist MLOps and AI inference optimization engineering firm. We work on MLOps strategy and inference architecture, and host models on our own GPU fleet so clients pay only for what they use." } },
        { "@type": "Question", name: "How much faster can Krylox make my ML models?", acceptedAnswer: { "@type": "Answer", text: "Krylox achieves up to 10× faster inference through quantization (INT8/FP16), TensorRT optimization, kernel fusion, and intelligent batching." } },
        { "@type": "Question", name: "How does Krylox reduce cloud ML costs?", acceptedAnswer: { "@type": "Answer", text: "Krylox reduces cloud ML costs by up to 60% through GPU right-sizing, spot instance strategies, and model compression across AWS, GCP, and Azure." } },
        { "@type": "Question", name: "Does Krylox work with my existing cloud provider?", acceptedAnswer: { "@type": "Answer", text: "Yes. Krylox uses a BYOC (Bring Your Own Cloud) model, deploying within your AWS, GCP, or Azure environment. Alternatively, host on Krylox's own GPU infrastructure." } },
        { "@type": "Question", name: "Does Krylox work with my ML framework?", acceptedAnswer: { "@type": "Answer", text: "Yes. Krylox follows BYOM (Bring Your Own Model) and optimizes PyTorch, TensorFlow, JAX, and ONNX models including fine-tuned LLMs." } },
        { "@type": "Question", name: "Where does Krylox operate?", acceptedAnswer: { "@type": "Answer", text: "Krylox serves clients across EMEA, the UAE, India, and the United States." } },
        { "@type": "Question", name: "What is the team background at Krylox?", acceptedAnswer: { "@type": "Answer", text: "The Krylox team has ML infrastructure experience from Google, Meta, and Bloomberg." } },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Krylox | MLOps & AI Inference Optimization Services",
    template: "%s | Krylox",
  },
  description:
    "Krylox LLP advises on MLOps strategy and inference architecture, and hosts models on our own GPU fleet. Up to 10× faster inference, up to 60% cost reduction. Team from Google, Meta, and Bloomberg. Serving EMEA, UAE, India, and the US.",
  keywords: [
    "MLOps engineering firm",
    "AI inference optimization",
    "TensorRT optimization",
    "ONNX optimization",
    "model quantization",
    "ML pipeline design",
    "data drift detection",
    "managed GPU hosting",
    "KServe",
    "Triton inference server",
    "production ML",
    "GPU cost optimization",
    "model serving",
    "AI infrastructure",
    "MLOps EMEA",
    "MLOps India",
    "MLOps UAE",
  ],
  authors: [{ name: "Krylox LLP", url: BASE_URL }],
  creator: "Krylox LLP",
  publisher: "Krylox LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Krylox",
    title: "Krylox | MLOps & AI Inference Optimization Services",
    description:
      "Production AI, done properly. Up to 10× faster inference, up to 60% cost reduction. Managed GPU hosting available. Team from Google, Meta, Bloomberg.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krylox | MLOps & AI Inference Optimization Services",
    description:
      "Production AI, done properly. Up to 10× faster inference, up to 60% cost reduction. Team from Google, Meta, Bloomberg.",
  },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
