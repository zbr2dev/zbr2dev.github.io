"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","38910e1a0115ff1fc7a1b5f33694a631"],["/static/css/main.ae051ab3.css","9c365e9fe878d3005a9544248da3a8cc"],["/static/js/main.f8fa11f5.js","4124db95bc0f4e7ad2aec8bc06869884"],["/static/media/argon-react-white.275a2629.png","275a2629582aa2af3469364c6748cf38"],["/static/media/argon-react.f38ddea9.png","f38ddea9dedadea03c5d43c596dac13f"],["/static/media/bank-transfer-logo.ee09ed63.png","ee09ed6331e17eba093271b135e08d66"],["/static/media/bitcoin.97995e26.png","97995e2672ec37ef76b6634b8d3fb6c1"],["/static/media/car-img1.9beb0685.jpg","9beb0685adfa2586a53927d7a0f9f738"],["/static/media/car-img2.acfd6c0c.jpg","acfd6c0cd5047ab8b79c373c8cd28aa0"],["/static/media/citi.5376661c.png","5376661c8a1f112c33679d8d8f8251b9"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/hsbc.caf79ad2.png","caf79ad2192e36c50246ed29f8b57334"],["/static/media/mastercard.db4c8702.png","db4c87028a0bc51dc1af98bba7745cee"],["/static/media/nucleo-icons.0b8a30b1.svg","0b8a30b10cbe7708d5f3a4b007c1d665"],["/static/media/nucleo-icons.2569aaea.woff","2569aaea6eaaf8cd210db7f2fa016743"],["/static/media/nucleo-icons.42643978.woff2","426439788ec5ba772cdf94057f6f4659"],["/static/media/nucleo-icons.c1733565.eot","c1733565b32b585676302d4233c39da8"],["/static/media/nucleo-icons.f82ec6ba.ttf","f82ec6ba2dc4181db2af35c499462840"],["/static/media/visa.d385d7ff.png","d385d7ffb327067893883431f2522ba9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});