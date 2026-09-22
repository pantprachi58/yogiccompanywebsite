import { legacyRedirects } from "./lib/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
