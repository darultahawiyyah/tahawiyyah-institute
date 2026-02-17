import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: "var(--brand)",
        brand2: "var(--brand2)",
        gold: "var(--gold)",
        gold2: "var(--gold2)",
        border: "var(--border)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      borderRadius: {
        card: "1rem", // rounded-2xl equivalent
      },
    },
  },
  plugins: [],
};

export default config;



