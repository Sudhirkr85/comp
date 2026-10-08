import { ImageResponse } from "next/og";

export const alt = "SA Software Innovation — Global Web Engineering & Modernization";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a0c 0%, #16181d 50%, #0f1117 100%)",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Subtle decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 113, 227, 0.28) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Top Header / Brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0071e3 0%, #2997ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#ffffff",
                boxShadow: "0 8px 24px rgba(0, 113, 227, 0.4)",
              }}
            >
              SA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                SA Software Innovation
              </span>
              <span style={{ fontSize: "14px", color: "#a1a1a6", letterSpacing: "1px", textTransform: "uppercase" }}>
                Strive and Achieve
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: "14px",
              fontWeight: "600",
              color: "#30d158",
            }}
          >
            <span>● Sub-1s Load Time</span>
          </div>
        </div>

        {/* Center Main Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              color: "#f5f5f7",
            }}
          >
            Global Web Engineering & Legacy Modernization
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: "#a1a1a6",
              maxWidth: "880px",
            }}
          >
            Overhauling slow codebases into ultra-fast digital assets. Cross-border SEO dominance, 24/7 AI automation, and dedicated Website AMC across North America, Europe, UAE, and India.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {["Next.js 16 & React", "Legacy Code Overhaul", "Google Page #1 SEO", "24/7 WhatsApp AI", "100% IP Ownership"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#e5e5ea",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
