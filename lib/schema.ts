import { FAQ_ITEMS } from "./faq";
import type { PostMeta } from "./blog";

export const BASE_URL = "https://krylox.ai";

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const LOGO_ID = `${BASE_URL}/#logo`;
const OG_IMAGE = `${BASE_URL}/opengraph-image`;

/* Site-wide entities. Rendered on every page from the root layout. */
export const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Krylox LLP",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": LOGO_ID,
        url: `${BASE_URL}/logo.png`,
        contentUrl: `${BASE_URL}/logo.png`,
        width: 120,
        height: 32,
        caption: "Krylox",
      },
      image: { "@id": LOGO_ID },
      description:
        "Krylox LLP is a specialist MLOps and AI inference optimization engineering firm. We work on MLOps strategy and inference architecture, and host models on our own GPU fleet, so clients pay only for what they use. Team experience from Google, Meta, and Bloomberg.",
      email: "hello@krylox.ai",
      sameAs: [
        "https://www.linkedin.com/company/krylox",
        "https://github.com/krylox-llp",
      ],
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
      "@id": WEBSITE_ID,
      url: BASE_URL,
      name: "Krylox",
      description: "MLOps & AI Inference Engineering and Managed GPU Hosting.",
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
  ],
};

/* Homepage-only entities. FAQPage must only appear where the FAQ is visible. */
export const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Krylox | MLOps & AI Inference Optimization Services",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: { "@id": LOGO_ID },
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
      parentOrganization: { "@id": ORG_ID },
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
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed GPU Hosting", description: "Deploy your optimized model on Krylox GPU infrastructure. Plans start from a single day, pay only for what you use." } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      isPartOf: { "@id": `${BASE_URL}/#webpage` },
      /* Derived from the same source the FAQ section renders, so the markup
         always matches the visible answers. */
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

/* The free self-assessment tool at /mlops-maturity. */
export const ASSESSMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "WebApplication"],
      "@id": `${BASE_URL}/mlops-maturity#webpage`,
      url: `${BASE_URL}/mlops-maturity`,
      name: "MLOps Maturity Assessment",
      description:
        "A free 8-question self-assessment based on the Microsoft MLOps Maturity Model. Get a maturity score across 5 levels and a concrete roadmap to the next one.",
      applicationCategory: "BusinessApplication",
      browserRequirements: "Requires JavaScript.",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "MLOps Maturity Assessment", item: `${BASE_URL}/mlops-maturity` },
      ],
    },
  ],
};

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function blogListingSchema(posts: PostMeta[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog#blog`,
        url: `${BASE_URL}/blog`,
        name: "Krylox Blog",
        description:
          "MLOps insights, AI inference optimization guides, and production ML best practices from the Krylox team.",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${BASE_URL}/blog/${post.slug}#article`,
          headline: post.title,
          url: `${BASE_URL}/blog/${post.slug}`,
          datePublished: post.date,
        })),
      },
      breadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Blog", url: `${BASE_URL}/blog` },
      ]),
    ],
  };
}

export function blogPostSchema(post: PostMeta & { wordCount?: number }) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        dateModified: post.date,
        image: OG_IMAGE,
        keywords: post.tags,
        articleSection: post.category,
        inLanguage: "en",
        isPartOf: { "@id": `${BASE_URL}/blog#blog` },
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        ...(post.wordCount ? { wordCount: post.wordCount } : {}),
      },
      breadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Blog", url: `${BASE_URL}/blog` },
        { name: post.title, url },
      ]),
    ],
  };
}
