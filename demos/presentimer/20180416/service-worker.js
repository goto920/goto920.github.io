"use strict";var precacheConfig=[["/demos/presentimer/20180416/index.html","f07fa6862a3330a119fb5c35e0743309"],["/demos/presentimer/20180416/static/css/main.225e2efa.css","8c60ec77c7b00e5f8d1d71a36e4de3d4"],["/demos/presentimer/20180416/static/js/main.53d470d4.js","1f68fd5afa7fcccf739bc50fca4a9f9f"],["/demos/presentimer/20180416/static/media/01more.ac03e26c.mp3","ac03e26cd5830d8e60fa0035e975c4d4"],["/demos/presentimer/20180416/static/media/02more.7fed63e6.mp3","7fed63e6146b3ceb8bd6a6cfc46d3e02"],["/demos/presentimer/20180416/static/media/03more.3a62e348.mp3","3a62e3481c9d34d8e1916f03e2d42206"],["/demos/presentimer/20180416/static/media/04more.b3be5bd7.mp3","b3be5bd74b3676206acddd81c0620e9d"],["/demos/presentimer/20180416/static/media/05more.dfbc5a7b.mp3","dfbc5a7bc9812ec1ed5338ea4c0e5a63"],["/demos/presentimer/20180416/static/media/10more.8af07932.mp3","8af07932c2dbb5f897aa23712a51b5b8"],["/demos/presentimer/20180416/static/media/15more.b68ae13e.mp3","b68ae13ec341286a390c63cb3a528625"],["/demos/presentimer/20180416/static/media/20more.e05db9e5.mp3","e05db9e5d54685eae8b17ee795d92d1f"],["/demos/presentimer/20180416/static/media/church.2aef5b33.mp3","2aef5b3314e7fb4ed7241ba2e9a5c52a"],["/demos/presentimer/20180416/static/media/cowbell_high.e876331a.mp3","e876331afad8cd9dea08fcf50b162228"],["/demos/presentimer/20180416/static/media/cowbell_mid.e2f7d973.mp3","e2f7d9737b330f0d5f9da2137a7531ed"],["/demos/presentimer/20180416/static/media/endSession.bea35364.mp3","bea35364f68fbc6bffa8b330cd21e998"],["/demos/presentimer/20180416/static/media/endTalk.827a6bf5.mp3","827a6bf5883ba37feae26ead9f3ca5fa"],["/demos/presentimer/20180416/static/media/hotel.ed7abcba.mp3","ed7abcba812bbd99377665ad9c2816f1"],["/demos/presentimer/20180416/static/media/rideCup.d2b083f3.mp3","d2b083f3bb54411453287b38abfb950d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/demos/presentimer/20180416/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});