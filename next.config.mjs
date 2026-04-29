/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["next-mdx-remote", "gray-matter"],
  },
};

export default nextConfig;
