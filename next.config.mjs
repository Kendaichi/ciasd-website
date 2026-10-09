const PROTOTYPE_MODE = process.env.NEXT_PUBLIC_PROTOTYPE_MODE !== "false";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // Prototype mode: send X-Robots-Tag: noindex on every response, alongside
    // the robots meta tag and robots.txt. Returns no custom headers once the
    // site is live (NEXT_PUBLIC_PROTOTYPE_MODE=false).
    if (!PROTOTYPE_MODE) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
