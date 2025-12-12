const CACHE_NAME = 'taxi-merced-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/images/logo.jpg',
  // Agrega aquí todos los recursos necesarios
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});