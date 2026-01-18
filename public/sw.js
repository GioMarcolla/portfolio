// Service Worker for caching critical resources
const CACHE_NAME = 'portfolio-v1';
const STATIC_CACHE = 'portfolio-static-v1';

// Resources to cache for instant loading
const STATIC_ASSETS = [
    '/',
    '/experience',
    '/projects',
    '/assets/images/og-image.png',
    '/api/ping'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache when available
self.addEventListener('fetch', (event) => {
    // Only cache GET requests
    if (event.request.method !== 'GET') return;

    // Network-first strategy for API calls, cache-first for static assets
    if (event.request.url.includes('/api/')) {
        // Network first for API calls
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache successful API responses
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
    } else {
        // Cache first for static assets
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then((response) => {
                        // Don't cache external resources or failed requests
                        if (!response.ok || event.request.url.includes('http') && !event.request.url.includes(self.location.origin)) {
                            return response;
                        }

                        const responseClone = response.clone();
                        caches.open(STATIC_CACHE).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    });
                })
                .catch(() => {
                    // Return offline fallback if available
                    return caches.match('/');
                })
        );
    }
});