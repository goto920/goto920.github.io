"use strict";var precacheConfig=[["/demos/metronome2/20180307/index.html","10d7337b574c7551239c9c5cf58d6cb5"],["/demos/metronome2/20180307/static/css/main.8f491400.css","17613f9719bc47d2f27034dfd642cec3"],["/demos/metronome2/20180307/static/js/main.5f8a7219.js","73208b992af529fdff0b15f39d05727f"],["/demos/metronome2/20180307/static/media/bass.759662e7.mp3","759662e7a7b48f4150bab150189c6375"],["/demos/metronome2/20180307/static/media/clave.c5049490.mp3","c50494902145ffb25760caf33a85b935"],["/demos/metronome2/20180307/static/media/cowbell_high.e876331a.mp3","e876331afad8cd9dea08fcf50b162228"],["/demos/metronome2/20180307/static/media/cowbell_higher.58d8ae2c.mp3","58d8ae2c5f5c6cedc1c7f74085bb3042"],["/demos/metronome2/20180307/static/media/cowbell_low.67ff30fa.mp3","67ff30faee49a74642acdf2addf25dc6"],["/demos/metronome2/20180307/static/media/cowbell_lower.608432b3.mp3","608432b39a8f36cae6da7660c1c6c711"],["/demos/metronome2/20180307/static/media/cowbell_mid.a218f307.mp3","a218f307a39b97e33ffa261661edc845"],["/demos/metronome2/20180307/static/media/crash.b2edd9d2.mp3","b2edd9d2c6fbad1381eecf879f27bcb0"],["/demos/metronome2/20180307/static/media/crashL.3431ec55.mp3","3431ec5528e47d15e6c7b43afa045cee"],["/demos/metronome2/20180307/static/media/crashR.f6a58428.mp3","f6a5842816689f3dc75691c4e0516a9e"],["/demos/metronome2/20180307/static/media/female_1.061e8364.mp3","061e8364fd31271a0e0a54b24d42c360"],["/demos/metronome2/20180307/static/media/female_2.0132e11e.mp3","0132e11e67b47ff74fe2dfb358c81c65"],["/demos/metronome2/20180307/static/media/female_3.7fbe20d1.mp3","7fbe20d115929bdf41008c1dd7fd0c41"],["/demos/metronome2/20180307/static/media/female_4.d5c07573.mp3","d5c075736cedb656f033c61a8923db64"],["/demos/metronome2/20180307/static/media/female_5.23114b75.mp3","23114b7529a74fa3cae9fd28699a6548"],["/demos/metronome2/20180307/static/media/female_6.1abf57a8.mp3","1abf57a8965566019cbaaccd2963c2ad"],["/demos/metronome2/20180307/static/media/female_7.b297aa70.mp3","b297aa70ad3bdfdea6da5eb853f2a93b"],["/demos/metronome2/20180307/static/media/female_8.879b851e.mp3","879b851ebdaa7c7085ae44dcbc8706ab"],["/demos/metronome2/20180307/static/media/handClap.a3e60700.mp3","a3e60700cbfbb42dbca3acdf5ce662aa"],["/demos/metronome2/20180307/static/media/highConga.cc856e06.mp3","cc856e06b1aa53a2e9bda6c440984777"],["/demos/metronome2/20180307/static/media/highTom.3120d26a.mp3","3120d26a0b8dc224da441774acdb3ddd"],["/demos/metronome2/20180307/static/media/hihat.9335af77.mp3","9335af77ecb604e3cba28c4d137de1fa"],["/demos/metronome2/20180307/static/media/hihatClose.bcece98b.mp3","bcece98bc7392d6fbf9db143705c0491"],["/demos/metronome2/20180307/static/media/hihatFullOpen.5e04228e.mp3","5e04228e90b395b0a84ed8d0315bef48"],["/demos/metronome2/20180307/static/media/hihatHalfOpen.c086d2ae.mp3","c086d2ae23cf67829aca6bbf648f6d67"],["/demos/metronome2/20180307/static/media/lowConga.5129e139.mp3","5129e1392423643b0cda8684eb125b93"],["/demos/metronome2/20180307/static/media/lowTom.9566d9cf.mp3","9566d9cf1986ee515a322d62eefb1587"],["/demos/metronome2/20180307/static/media/male_1.3de06eee.mp3","3de06eeeb00d97beed7aafd8a3a0e8c8"],["/demos/metronome2/20180307/static/media/male_2.0eee49b8.mp3","0eee49b812318efa681e588c5ba35a39"],["/demos/metronome2/20180307/static/media/male_3.d55f1473.mp3","d55f1473f1ea51ccea537cee075838f6"],["/demos/metronome2/20180307/static/media/male_4.b88b2ea6.mp3","b88b2ea628fded874880a8016e80120f"],["/demos/metronome2/20180307/static/media/male_5.2acf0c9d.mp3","2acf0c9d299530d1bb0f5fae3de78f0c"],["/demos/metronome2/20180307/static/media/male_6.945a42ee.mp3","945a42ee4f69eb729d14bde6012c00aa"],["/demos/metronome2/20180307/static/media/male_7.f6668c40.mp3","f6668c4091f1a10dc938ae71df0b73d0"],["/demos/metronome2/20180307/static/media/male_8.c39f060c.mp3","c39f060c99ee63a6027ade6d11416c3d"],["/demos/metronome2/20180307/static/media/maracas.79bbf5b3.mp3","79bbf5b35cafca27c9765b3829a98f48"],["/demos/metronome2/20180307/static/media/midConga.82c31427.mp3","82c31427f54d8cd4de3f7deb04b12bee"],["/demos/metronome2/20180307/static/media/midTom.d737a0b0.mp3","d737a0b055a0b1865ca3f6b5e1facc07"],["/demos/metronome2/20180307/static/media/openHihat.10b26924.mp3","10b26924d051906b55c390dfdc6a86bb"],["/demos/metronome2/20180307/static/media/ride.d3d3470a.mp3","d3d3470a4757fc04fe6047a8c4effbfe"],["/demos/metronome2/20180307/static/media/rideCup.d2b083f3.mp3","d2b083f3bb54411453287b38abfb950d"],["/demos/metronome2/20180307/static/media/snare.e4e49c88.mp3","e4e49c88577b558b5e938b876eba523e"],["/demos/metronome2/20180307/static/media/snareBuzz.9f645de5.mp3","9f645de51f891c1bcd459c9087c0d28f"],["/demos/metronome2/20180307/static/media/snareClosedRim.178c428f.mp3","178c428f0d346705072f13117c1a36be"],["/demos/metronome2/20180307/static/media/snareFlam.e944ca7c.mp3","e944ca7c3c6fc67878507eb97a3f2a8b"],["/demos/metronome2/20180307/static/media/snareOpenRim.6ca3fbc2.mp3","6ca3fbc243df9c4ccbeda7f3fe58827a"],["/demos/metronome2/20180307/static/media/snareRim.d8349dcc.mp3","d8349dcca85b0b2375ed17d9ee330aaa"],["/demos/metronome2/20180307/static/media/tomHigh.716fe783.mp3","716fe783f795ed763482c30c6545335b"],["/demos/metronome2/20180307/static/media/tomLow.96725c6d.mp3","96725c6d138917e04e5725f4b1c1d02e"],["/demos/metronome2/20180307/static/media/tomMid.37b4619d.mp3","37b4619d7a40c9b0f7ac037bd4e13fc6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,m){var c=new URL(e);return m&&c.pathname.match(m)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],m=new URL(a,self.location),c=createCacheKey(m,hashParamName,t,/\.\w{8}\./);return[m.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var m=new Request(t,{credentials:"same-origin"});return fetch(m).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),m="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,m),a=urlsToCacheKeys.has(t));var c="/demos/metronome2/20180307/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});