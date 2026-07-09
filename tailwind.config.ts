import type { Config } from "tailwindcss";

// Token sistem — boje i fontovi definirani su ISKLJUČIVO iz brief-a.
// Nema dodanih boja, gradijenata ili "safety" nijansi koje brief ne spominje.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6", // Primary Background
        accent: "#3EB8C7", // Primary Accent
        "accent-secondary": "#7A8F63", // Secondary Accent
        neutral: "#EDE7DD", // Neutral
        ink: "#2B2B2B", // Text
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      transitionTimingFunction: {
        // suzdržan, "elegantan" ease — bez bouncea, bez overshoota
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
