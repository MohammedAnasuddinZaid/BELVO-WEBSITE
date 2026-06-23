import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        belvo: {
          black: "#050505",
          surface: "#0B0B0F",
          purple: "#6D28FF",
          glow: "#8B5CF6",
          text: "#F8FAFC",
          silver: "#C2CAD8",
          muted: "#8A93A5"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(109, 40, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
