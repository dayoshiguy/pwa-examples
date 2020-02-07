self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([ //put all of the files that you want to cache here. if ur not sure just put all of them
       '/pwa-examples/a2hs/',
       '/pwa-examples/a2hs/index.html',
       '/pwa-examples/a2hs/index.js',
       '/pwa-examples/a2hs/style.css',
       '/pwa-examples/a2hs/images/fox1.jpg',
      'https://neiunderscore.github.io/2048-timer/'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
