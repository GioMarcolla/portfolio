import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL("https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/**")],
    },
};

export default nextConfig;
