"use strict";var precacheConfig=[["/co34pt_timeline/index.html","e79c8f61b7db202b9c4562d03897aa15"],["/co34pt_timeline/static/css/main.493b06cc.css","75af878be3839209b0e5c550fdc671c5"],["/co34pt_timeline/static/js/main.69b663a1.js","2577c531ca908cb6834775a6759c7a0a"],["/co34pt_timeline/static/media/CropByDimensions.865774a4.sh","865774a406f89db3927e3243e29b1de3"],["/co34pt_timeline/static/media/cover.c1243adb.jpg","c1243adb04d690f7bcd11241e16c34c1"],["/co34pt_timeline/static/media/cover10.2825f095.jpg","2825f095ffe857ddd6219b1c539e7ace"],["/co34pt_timeline/static/media/cover11.f88ac7f0.jpg","f88ac7f0d0dc9a2853bee980553b9a0f"],["/co34pt_timeline/static/media/cover12.4fc2bc44.jpg","4fc2bc4479cd9a3fbdc32bea516f9704"],["/co34pt_timeline/static/media/cover13.69eb82c4.jpg","69eb82c4ff8cfced36aef50a031a85d7"],["/co34pt_timeline/static/media/cover14.2ac0d3c1.jpg","2ac0d3c1fd40ac27ae5e68899a9d2050"],["/co34pt_timeline/static/media/cover15.f66d3350.jpg","f66d3350272d15a8a063609933b415a6"],["/co34pt_timeline/static/media/cover16.8abcae49.jpg","8abcae497faa867239d8485cadadffdf"],["/co34pt_timeline/static/media/cover17.f290a2dc.jpg","f290a2dc7ea964c003df7df7364675da"],["/co34pt_timeline/static/media/cover18.4fc683fe.jpg","4fc683fe72fb81abe85ed2329279448a"],["/co34pt_timeline/static/media/cover19.5b52b216.jpg","5b52b216fff30cf0bb21d73136fb37d2"],["/co34pt_timeline/static/media/cover2.04868fd1.jpg","04868fd176271ca64ddf77db02b69db4"],["/co34pt_timeline/static/media/cover20.0d65fbf1.jpg","0d65fbf1f93fdbb4fe662b03313000f0"],["/co34pt_timeline/static/media/cover21.33e15668.jpg","33e1566843cadafa323cb5a6efb3c826"],["/co34pt_timeline/static/media/cover22.59b4352d.jpg","59b4352ddc73938811ab4cd1ce7dc121"],["/co34pt_timeline/static/media/cover23.fce33c13.jpg","fce33c1311d3e46915cc039778a8b376"],["/co34pt_timeline/static/media/cover24.688969d7.jpg","688969d72bfa7d580b9ada5a71eeab31"],["/co34pt_timeline/static/media/cover25.ac1d70e9.jpg","ac1d70e938471a7efec4d8a834a70c8d"],["/co34pt_timeline/static/media/cover26.eb7dd1a0.jpg","eb7dd1a0cfd42156dfe686d816341ae0"],["/co34pt_timeline/static/media/cover27.c8443d12.jpg","c8443d128d32a7c5e1e854c07d7db3a0"],["/co34pt_timeline/static/media/cover28.f0d014a9.jpg","f0d014a9e3d8b5097a29cfe4232451d6"],["/co34pt_timeline/static/media/cover29.3360f689.jpg","3360f68983b6d3619ae08f137dd6f114"],["/co34pt_timeline/static/media/cover3.b0cdaf2e.jpg","b0cdaf2e782414c61800f3a3e0aa2950"],["/co34pt_timeline/static/media/cover30.b4931b64.jpg","b4931b640d71663d961458544edc4719"],["/co34pt_timeline/static/media/cover31.787f114f.jpg","787f114f692d7e0803fd1ae7e08a3571"],["/co34pt_timeline/static/media/cover4.4798ecb7.jpg","4798ecb78d6f9080c314a2222ce915c4"],["/co34pt_timeline/static/media/cover5.5a8f9152.jpg","5a8f91521eb573cfd375856517a4adb9"],["/co34pt_timeline/static/media/cover6.2e7eb1da.jpg","2e7eb1da40261f0b4d04a69648b3042a"],["/co34pt_timeline/static/media/cover7.d9a0fb34.jpg","d9a0fb3461fc5a661b139b240aa63115"],["/co34pt_timeline/static/media/cover8.b66935d7.jpg","b66935d73b232ae5dde212e81495b7b3"],["/co34pt_timeline/static/media/cover9.d54add44.jpg","d54add44cce6144745af829205a036c8"],["/co34pt_timeline/static/media/pause-48.e259f6ed.ico","e259f6eda82420191625dee2980fd461"],["/co34pt_timeline/static/media/play-48.a9e8c30b.ico","a9e8c30bcc42916ee216a0f44f5675d4"],["/co34pt_timeline/static/media/removeStringFromFilename.c54806b0.sh","c54806b048982fbc5b09320796c649f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),i=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c));var i="/co34pt_timeline/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});