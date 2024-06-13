import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lila': '#dec9ff',
        'mainpurple' : '#6101fa',
      }
    },
  },
  plugins: [],
} satisfies Config;
