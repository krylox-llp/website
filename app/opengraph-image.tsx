import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Krylox | MLOps & AI Inference Optimization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 108, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-4px" }}>
            Krylox
          </span>
          <span style={{ fontSize: 108, fontWeight: 900, color: "#DC2626" }}>.</span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#9CA3AF",
            marginTop: 16,
            marginBottom: 0,
            letterSpacing: "0.5px",
          }}
        >
          MLOps & AI Inference Optimization
        </p>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#DC2626",
            marginTop: 40,
            marginBottom: 40,
            borderRadius: 2,
          }}
        />

        {/* Stats row */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#EF4444" }}>10x</span>
            <span style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>Faster Inference</span>
          </div>
          <div style={{ width: 1, height: 60, background: "#1F2937" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#EF4444" }}>60%</span>
            <span style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>Lower GPU Cost</span>
          </div>
          <div style={{ width: 1, height: 60, background: "#1F2937" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#EF4444" }}>100%</span>
            <span style={{ fontSize: 16, color: "#6B7280", marginTop: 4 }}>Reproducible</span>
          </div>
        </div>

        {/* Domain */}
        <p style={{ fontSize: 20, color: "#374151", marginTop: 48, marginBottom: 0 }}>
          krylox.ai
        </p>
      </div>
    ),
    { ...size }
  );
}
