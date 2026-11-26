// Păstrează aplicația în telefon ca să meargă și fără internet.
const CACHE = 'comunicare-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== 'pictograme').map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.hostname === 'static.arasaac.org') {            // pictogramele: păstrate după prima afișare
    e.respondWith(caches.open('pictograme').then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      const r = await fetch(req); c.put(req, r.clone()); return r;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // Întâi internetul (pentru actualizări); dacă nu răspunde în 4 secunde, copia din telefon.
  e.respondWith(new Promise(resolve => {
    let done = false;
    const fromCache = () => caches.match(req, {ignoreSearch: true}).then(m => m || caches.match('./index.html'));
    const timer = setTimeout(() => { if (!done) { done = true; resolve(fromCache()); } }, 4000);
    fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      if (!done) { done = true; clearTimeout(timer); resolve(r); }
    }).catch(() => { if (!done) { done = true; clearTimeout(timer); resolve(fromCache()); } });
  }));
});
