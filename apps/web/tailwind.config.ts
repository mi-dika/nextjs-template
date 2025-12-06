import type { Config } from "tailwindcss";
import shared from "@midika/config-tailwind/preset.js";

const config: Config = {
  presets: [shared],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}"
  ]
};

export default config;

