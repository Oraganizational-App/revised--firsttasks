// The cache's name (should just be your app's name)
const cacheName = 'FirstTasks';

// Files that must load for the app to be operational
const staticAssets = ['./', './js/app.js', './css/main.css', './css/reset.css'];

// Cache the main files on install
self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  event.respondWith(cacheFirst(request));
});


async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}
