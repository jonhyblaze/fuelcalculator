importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')



workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: '199203'},
  {url: '/style.css', revision: null},
  {url: '/reset.css', revision: null},
  {url: '/script.js', revision: null},
  {url: '/manifest.json', revision: null},
  {url: '/img/favicon.ico', revision: null}
]);


workbox.routing.registerRoute(
  ({request}) => request.destination === 'img',
  new workbox.strategies.CacheFirst()
)

// workbox.routing.registerRoute(
//   ({request}) => request.destination === 'html',
//   new workbox.strategies.CacheFirst()
// )

// const strategy = new CacheFirst()
// const urls = ['/index.html', '/style.css', '/reset.css', '/script.js']

// self.addEventListener('install', event => {
//   const done = urls.map(path => strategy.handleAll({
//     event,
//     request: new Request(path)
//   })[1])

//   event.waitUntil(Promise.all(done))
// })



