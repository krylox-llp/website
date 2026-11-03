import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_SCHEMA } from "@/lib/schema";
import "./globals.css";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), { ssr: false });
const ApolloTracker = dynamic(() => import("@/components/ApolloTracker"), { ssr: false });

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Krylox | MLOps & AI Inference Optimization Services",
    template: "%s | Krylox",
  },
  description:
    "Krylox LLP advises on MLOps strategy and inference architecture, and hosts models on our own GPU fleet. Serving EMEA, UAE, India, and the US.",
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
      "Production AI, done properly. Up to 10× faster inference, up to 60% cost reduction. Managed GPU hosting available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krylox | MLOps & AI Inference Optimization Services",
    description:
      "Production AI, done properly. Up to 10× faster inference, up to 60% cost reduction.",
  },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <body suppressHydrationWarning>
        <JsonLd data={SITE_SCHEMA} />
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <ApolloTracker />
      </body>
    </html>
  );
}
