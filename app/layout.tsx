import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://krylox.ai";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Krylox",
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
        "Krylox delivers enterprise-grade MLOps and AI inference optimization. We make production AI models 10x faster and 60% cheaper across EMEA, UAE, and India.",
      email: "hello@krylox.ai",
      areaServed: [
        { "@type": "Place", name: "EMEA" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "MLOps",
        "Inference Optimization",
        "TensorRT",
        "ONNX",
        "Quantization",
        "Kubernetes",
        "Machine Learning Operations",
        "Model Deployment",
        "Data Drift Detection",
        "AI Consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Krylox",
      description:
        "Enterprise MLOps and AI inference optimization services.",
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
        "Krylox delivers enterprise MLOps and AI inference optimization. We make production AI models 10x faster and 60% cheaper. Serving EMEA, UAE, and India.",
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Krylox",
      url: BASE_URL,
      image: `${BASE_URL}/logo.png`,
      description:
        "End-to-end MLOps and AI inference optimization consulting. We cut inference latency by 10x and reduce GPU costs by 60% for production AI systems.",
      priceRange: "$$$",
      email: "hello@krylox.ai",
      areaServed: ["EMEA", "UAE", "India"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MLOps & AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Extreme Inference Optimization",
              description:
                "Speed and cost optimization for AI models using quantization, TensorRT, ONNX, and intelligent serving strategies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "End-to-End MLOps Pipelines",
              description:
                "Automated feature stores, CI/CD for ML, retraining loops, canary deployments, and full observability for production models.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Drift & Silent Failure Protection",
              description:
                "Live statistical monitoring, prediction logging, and automated validation and redeployment pipelines.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reproducibility Debt Elimination",
              description:
                "Containerized ML systems with immutable containers and exact dependency pinning to eliminate deployment risks.",
            },
          },
        ],
      },
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
    "Krylox delivers enterprise MLOps and AI inference optimization. We make production AI models up to 10x faster and up to 60% cheaper. Serving EMEA, UAE, and India.",
  keywords: [
    "MLOps consulting",
    "AI inference optimization",
    "TensorRT optimization",
    "ONNX optimization",
    "model quantization",
    "ML pipeline automation",
    "data drift detection",
    "Kubernetes ML deployment",
    "KServe",
    "Triton inference server",
    "MLOps services",
    "production AI",
    "GPU cost optimization",
    "model serving",
    "AI consulting EMEA",
    "MLOps India",
    "MLOps UAE",
  ],
  authors: [{ name: "Krylox", url: BASE_URL }],
  creator: "Krylox",
  publisher: "Krylox",
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Krylox",
    title: "Krylox | MLOps & AI Inference Optimization Services",
    description:
      "Enterprise MLOps and AI inference optimization. Up to 10x faster models. Up to 60% lower GPU costs. Serving EMEA, UAE, and India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krylox | MLOps & AI Inference Optimization Services",
    description:
      "Enterprise MLOps and AI inference optimization. Up to 10x faster models. Up to 60% lower GPU costs.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-Z4DCZ8MF4R" />
    </html>
  );
}
