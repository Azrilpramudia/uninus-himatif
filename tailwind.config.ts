import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#020181",
        "custom-gray": "#B0B0B0",
        "custom-white": "#F1F3FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
