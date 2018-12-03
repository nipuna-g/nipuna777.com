var cacheName = 'v3';
var cacheFiles =  [
    './',
    './index.html',
    './style.css',
    'https://fonts.googleapis.com/css?family=Bitter|Niramit',
]

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles);
        })
    )
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCache) {
                if (thisCache !== cacheName) {
                    return caches.delete(this.cacheName);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(e.request);
        })
    )
});