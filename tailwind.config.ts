import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'disabled': '#808080',
        'gendark': '#ededed'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
