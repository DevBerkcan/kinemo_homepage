import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        kinemo: {
          DEFAULT: "#08415C",       // Hauptfarbe
          light: "#50C9E1",         // Akzent
          dark: "#061b26",          // Hintergrund Darkmode
          soft: "#7DDBF3",          // Hover Akzent
        },
      },
    },
  },
  plugins: [],
}

export default config
