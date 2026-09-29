// Bijoy Lohar Portfolio — Robust Offline Service Worker (v2)
const CACHE_NAME = "bijoy-lohar-offline-v2";

const PRECACHE_ASSETS = [
  "/",
  "/manifest.json",
  "/hero-portrait.jpg",
  "/bijoy-lohar.jpg"
];

// Install Event: Install immediately and pre-cache core assets
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(PRECACHE_ASSETS);
      } catch (err) {
        console.warn("SW precache error:", err);
      }
    })
  );
});

// Activate Event: Take control immediately and delete old caches
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

// Fetch Event: Cache-First for Static Chunks, Network-First for Navigation
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Strategy 1: Cache-First for Next.js Static Chunks, CSS, Images, Fonts
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached, but update in background
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          }).catch(() => {});
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy 2: Network-First with Cache Fallback for Pages & Navigation
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(async () => {
        // Network failed (OFFLINE mode!)
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Navigation fallback (if requesting HTML page)
        if (event.request.mode === "navigate" || event.request.headers.get("accept")?.includes("text/html")) {
          const rootPage = await caches.match("/");
          if (rootPage) {
            return rootPage;
          }
        }

        return new Response("Offline Content", {
          status: 200,
          headers: { "Content-Type": "text/html" }
        });
      })
  );
});
