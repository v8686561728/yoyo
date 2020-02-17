
self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.precaching.precacheAndRoute([
  "https://thor-bade8.web.app/giftCards"
]);
workbox.routing.registerRoute(
    '/',
   new  workbox.strategies.NetworkFirst()
);