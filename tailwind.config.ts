import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  plugins: [typography],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
} as Config;