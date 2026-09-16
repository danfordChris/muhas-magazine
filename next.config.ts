import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: this project sits under a parent directory that
  // has its own lockfile, which Turbopack would otherwise try to adopt.
  turbopack: { root: __dirname },
};

export default nextConfig;
