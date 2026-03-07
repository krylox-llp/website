import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#DC2626",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.8",
            "h1, h2, h3, h4": {
              color: "#0A0A0A",
              fontWeight: "800",
              letterSpacing: "-0.025em",
            },
            h2: { marginTop: "2.5rem", marginBottom: "1rem" },
            h3: { marginTop: "2rem", marginBottom: "0.75rem" },
            a: {
              color: "#DC2626",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": { color: "#B91C1C", textDecoration: "underline" },
            },
            strong: { color: "#0A0A0A", fontWeight: "700" },
            code: {
              color: "#0A0A0A",
              backgroundColor: "#F3F4F6",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "400",
              fontSize: "0.875em",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              backgroundColor: "#0A0A0A",
              color: "#E5E7EB",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              padding: "0",
              fontSize: "0.875em",
            },
            blockquote: {
              borderLeftColor: "#DC2626",
              color: "#6B7280",
              fontStyle: "normal",
            },
            table: {
              fontSize: "0.875rem",
              width: "100%",
              tableLayout: "auto",
              borderCollapse: "collapse",
            },
            "thead th": {
              color: "#0A0A0A",
              fontWeight: "700",
              backgroundColor: "#F9FAFB",
              padding: "0.75rem 1rem",
              textAlign: "left",
              borderWidth: "1px",
              borderColor: "#E5E7EB",
            },
            "tbody td": {
              padding: "0.75rem 1rem",
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              verticalAlign: "top",
            },
            "tbody tr:nth-child(even)": {
              backgroundColor: "#F9FAFB",
            },
            hr: { borderColor: "#E5E7EB" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
