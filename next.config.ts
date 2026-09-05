import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/aurum-motors" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages && { output: "export" as const }),
  images: { unoptimized: isGithubPages },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
