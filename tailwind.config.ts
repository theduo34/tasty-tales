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
        "tasty-text": {
          400: "#424242",
          500: "#757575",
        },
        "tasty-button": {
          400: "#E53935",
          500: "#FDD835"
        },
        "tasty-primary": {
          400: "#FF7043",
          500: "#81C784"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
