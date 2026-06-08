import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07070a",
        ember: "#b91c1c",
        blood: "#7f1d1d",
        violetFog: "#2e1065",
        bone: "#f5f5f4"
      },
      boxShadow: {
        horror: "0 24px 80px rgba(127, 29, 29, 0.28)"
      },
      backgroundImage: {
        "radial-blood": "radial-gradient(circle at top left, rgba(185, 28, 28, 0.28), transparent 34%), radial-gradient(circle at bottom right, rgba(88, 28, 135, 0.22), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
