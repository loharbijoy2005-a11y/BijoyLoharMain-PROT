// Bijoy Lohar Portfolio — High-Performance Offline Service Worker
const CACHE_NAME = "bijoy-lohar-offline-v1";

const PRECACHE_ASSETS = [
  "/",
  "/manifest.json",
  "/hero-portrait.jpg",
  "/bijoy-lohar.jpg",
  "https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png",
  "https://github.com/loharbijoy2005-a11y.png"
];

// Install Event: Cache essential app shell
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn("SW precache warning:", err);
      });
    })
  );
});

// Activate Event: Cleanup stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network First with Cache Fallback for offline mode
self.addEventListener("fetch", (event) => {
  // Only intercept GET requests
  if (event.request.method !== "GET") return;

  // Handle request with Network-First strategy, caching success responses
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If response is valid, save to cache asynchronously
        if (response && response.status === 200 && response.type === "basic") {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(async () => {
        // Network failed (Offline!) -> Try finding in Cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If request is a page navigation, return cached root page '/'
        if (event.request.mode === "navigate") {
          const rootPage = await caches.match("/");
          if (rootPage) {
            return rootPage;
          }
        }

        // Fallback response for missing offline items
        return new Response("Offline Content", {
          status: 200,
          statusText: "OK",
          headers: new Headers({ "Content-Type": "text/html" })
        });
      })
  );
});
