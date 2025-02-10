import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
};

module.exports = {
  i18n,
  reactStrictMode: true,
};

export default nextConfig;
