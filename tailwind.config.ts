import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ===== FONT SYSTEM ===== */
      fontFamily: {
        sans: [
          "var(--font-noto-thai)",
          "var(--font-geist-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      /* ===== BRAND COLORS ===== */
      colors: {
        brand: {
          DEFAULT: "#ba2529",
          soft: "#f6f7fa",
          dark: "#8f1d21",
        },
      },

      /* ===== TYPOGRAPHY DETAIL ===== */
      letterSpacing: {
        widePlus: "0.25em",
      },

      borderRadius: {
        xlPlus: "1.25rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
        card: "0 14px 40px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};

export default config;
