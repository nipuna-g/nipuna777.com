var cacheName = 'v2';
var cacheFiles =  [
    './',
    './index.html',
    './style.css',
    'https://fonts.googleapis.com/css?family=Bitter|Niramit',
]

self.addEventListener('install', function(e) {
    console.log('[SW] install')

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles);
        })
    )
});

self.addEventListener('activate', function(e) {
    console.log('[SW] activate')

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCache) {
                if (thisCache !== cacheName) {
                    console.log('[SW] removing cached files')
                    return caches.delete(this.cacheName);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function(e) {
    console.log('[SW] fetch')

    e.respondWith(
        caches.match(e.request).then(function(response) {
            console.log("[SW] cache match", e.request.url);

            if (response) {
                console.log("[SW] found in cache", e.request.url);
                return response;
            }
            return fetch(e.request);
        })
    )
});