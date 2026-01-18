const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    images: {
        remotePatterns: [
            new URL("https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/**"),
        ],
        localPatterns: [
            {
                pathname: "/assets/images/**",
                search: "",
            },
        ],
        formats: ['image/webp', 'image/avif'],
    },
    experimental: {
        optimizeCss: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
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
    },
    // Bundle analysis configuration
    webpack: (config, { isServer }) => {
        if (process.env.ANALYZE) {
            console.log('Bundle analysis enabled');
        }
        return config;
    },
};

module.exports = withBundleAnalyzer(nextConfig);