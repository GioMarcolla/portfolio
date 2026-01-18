import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Bundle optimization
    compress: true,

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
        scrollRestoration: true,
    },

    // Enable typed routes
    typedRoutes: true,

    // Turbopack configuration
    turbopack: {},

    // Optimize bundle
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },


    // Add HTTP/2 server push and caching headers
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
                    },
                    // Cache static assets aggressively
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            // API routes - no cache
            {
                source: '/api/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, no-store, must-revalidate'
                    }
                ]
            }
        ];
    },

    // Output optimization
    output: 'standalone',
    poweredByHeader: false,
    generateBuildId: async () => {
        return 'build-' + Date.now()
    },
};

export default nextConfig;
