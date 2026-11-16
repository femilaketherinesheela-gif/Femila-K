import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090e1b",
        panel: "#111827",
        cyan: "#67e8f9",
        violet: "#a78bfa",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(103, 232, 249, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
