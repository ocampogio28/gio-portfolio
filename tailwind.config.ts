import type { Config } from "tailwindcss";

const config: Config = {
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      fontFamily: {
        // These match the variables we'll set in layout.tsx
        sans: ["var(--font-inter)"],
        mono: ["var(--font-space-mono)"],
        serif: ["var(--font-eb-garamond)"],
      },
    },
  },
  plugins: [],
};
export default config;

