import path from "node:path";
import type { NextConfig } from "next";

const config: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../.."),
  transpilePackages: [
    "@midika/ui",
    "@midika/auth",
    "@midika/app-sdk",
    "@midika/utils",
  ],
  typedRoutes: true,
  serverExternalPackages: [],
};

export default config;
