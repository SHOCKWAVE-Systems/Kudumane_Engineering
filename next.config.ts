import type { NextConfig } from "next";

function normalizeBasePath(value: string) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || repositoryName || "Kudumane_Engineering",
);

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
