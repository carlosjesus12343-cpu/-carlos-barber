/* Distrito 21 v4.1: remove caches antigos para evitar versões desatualizadas no celular. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.clients.claim();
    await self.registration.unregister();
  })());
});

self.addEventListener('fetch', () => {});

