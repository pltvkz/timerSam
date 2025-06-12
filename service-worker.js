self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tabata-v1').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './service-worker.js'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
