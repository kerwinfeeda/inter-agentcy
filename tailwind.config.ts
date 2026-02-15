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
        background: { DEFAULT: '#0b0b0b', card: '#131419', elevated: '#1a1a1e' },
        accent: { DEFAULT: '#7B8794', light: '#C0C7CE', dark: '#4A5568', steel: '#9AAAB8' },
        verified: { gold: '#D4A843', blue: '#4A9EDB' },
        success: { DEFAULT: '#4EBE96' },
        danger: { DEFAULT: '#e15e67' },
        foreground: { DEFAULT: '#E6E6E6', muted: '#868F97', dim: '#585858' },
        border: { DEFAULT: 'rgba(255,255,255,0.06)', light: 'rgba(255,255,255,0.1)' },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
