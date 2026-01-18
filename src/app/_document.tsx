import { Html, Head, Main, NextScript } from 'next/document';
import { Metadata } from 'next';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.cdnfonts.com" />
                <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
                <link rel="preconnect" href="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com" />

                {/* Preload critical resources */}
                <link rel="preload" href="/assets/images/og-image.png" as="image" fetchPriority="high" />

                {/* Optimize font loading */}
                <link rel="preload" href="https://fonts.cdnfonts.com/css/rubik" as="style" />
                <link rel="preload" href="https://fonts.cdnfonts.com/css/inter" as="style" />

                {/* Security headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-Frame-Options" content="DENY" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

                {/* Theme color for mobile browsers */}
                <meta name="theme-color" content="#326A8C" />
                <meta name="msapplication-TileColor" content="#326A8C" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}