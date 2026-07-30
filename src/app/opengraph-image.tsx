import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/content";

export const alt = `${siteConfig.name} — ${siteConfig.designation}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAFA",
          color: "#0A0A0A",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#0A0A0A",
            color: "#FAFAFA",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          TD
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#525252",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.designation}
          </div>
          <div
            style={{
              marginTop: 8,
              maxWidth: 900,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#737373",
            }}
          >
            React · Next.js · React Native
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
