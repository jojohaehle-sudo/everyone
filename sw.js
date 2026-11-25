// EVERYONE Service Worker: macht die App offline startbar.
// Bei Änderungen an der App die Versionsnummer erhöhen (z. B. everyone-v2).
const V = "everyone-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Gespeicherte Datei sofort zeigen, im Hintergrund aktualisieren.
// Ohne Netz: Startseite aus dem Speicher.
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(r).then(hit => {
      const net = fetch(r)
        .then(res => { if (res.ok) caches.open(V).then(c => c.put(r, res.clone())); return res; })
        .catch(() => hit || (r.mode === "navigate" ? caches.match("index.html") : undefined));
      return hit || net;
    })
  );
});
