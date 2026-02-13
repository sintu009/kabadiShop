const CACHE_NAME = 'kabadishop-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET' || 
      url.protocol === 'chrome-extension:' || 
      url.protocol === 'chrome:') return;
  
  event.respondWith(
    caches.match(request)
      .then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          if (fetchResponse.status === 200) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, fetchResponse.clone());
              return fetchResponse;
            });
          }
          return fetchResponse;
        });
      })
      .catch(() => caches.match('/'))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
