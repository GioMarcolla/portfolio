import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL(
                "https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/**"
            ),
        ],
        localPatterns: [
            {
                pathname: "/assets/images/**",
                search: "",
            },
        ],
        // Optimize image loading
        formats: ['image/webp', 'image/avif'],
    },
    // Enable experimental features for better performance
    experimental: {
        optimizeCss: true,
    },
    // Optimize bundle
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    // Add HTTP/2 server push for critical resources
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Link',
                        value: [
                            '</assets/images/og-image.png>; rel=preload; as=image; fetchpriority=high',
                            '</api/ping>; rel=preload; as=fetch'
                        ].join(', ')
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
