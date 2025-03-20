import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 228, 183, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 228, 183, 0.5)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 228, 183, 0.3)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite ease-in-out',
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [],
} satisfies Config;
