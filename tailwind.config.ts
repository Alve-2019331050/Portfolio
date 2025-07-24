import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Sophisticated dark theme palette
        obsidian: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#d4d8dd",
          300: "#b8bfc7",
          400: "#98a2ae",
          500: "#7d8590",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#1a1d21",
          950: "#0d1117",
        },
        amethyst: {
          50: "#faf7ff",
          100: "#f3edff",
          200: "#e9deff",
          300: "#d7c3ff",
          400: "#be9bff",
          500: "#a770ff",
          600: "#9146ff",
          700: "#7c2d92",
          800: "#6b1e78",
          900: "#4a1458",
          950: "#2d0b36",
        },
        sapphire: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
      },
      animation: {
        "gradient-slow": "gradient 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
