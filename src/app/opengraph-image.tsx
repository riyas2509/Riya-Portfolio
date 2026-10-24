import { ImageResponse } from "next/og";
export const runtime = "nodejs";
export const alt = "Riya Shah — AI Product Design, Strategy & Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#fff6ee",
        color: "#624476",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 75,
      }}
    >
      <div style={{ fontSize: 25, color: "#af6e8e", display: "flex" }}>
        RIYA SHAH · AI PRODUCT DESIGN, STRATEGY & INNOVATION
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 78,
          lineHeight: 1.1,
          letterSpacing: -3,
          maxWidth: 900,
        }}
      >
        I turn curiosity into thoughtful AI experiences.
      </div>
      <div style={{ fontSize: 20, color: "#a282b5", display: "flex" }}>
        RIYA’S LITTLE UNIVERSE OF BIG IDEAS
      </div>
    </div>,
    size,
  );
}
