import type { Config } from "tailwindcss";

declare module "@midika/config-tailwind/preset.js" {
  const preset: Config;
  export default preset;
}
