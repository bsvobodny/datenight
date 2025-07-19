// Service Worker minimal
self.addEventListener('install', () => {
  console.log('SW installé');
});

self.addEventListener('fetch', () => {
  // Pas de gestion du cache
});
