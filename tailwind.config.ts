import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        celo: {
          yellow: '#FCFF52',
          green: '#35D07F',
          purple: '#8B5CF6',
          dark: '#1A1A1A',
        },
        win: '#4CAF50',
        lose: '#FF5252',
      },
    },
  },
  plugins: [],
};
export default config;
