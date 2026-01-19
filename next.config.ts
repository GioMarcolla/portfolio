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
            // Static assets - aggressive cache
            {
                source: '/_next/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            // Images - aggressive cache  
            {
                source: '/assets/(.*)',
                headers: [
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
