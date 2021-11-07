/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","ddc79ef6bb7b24f5ef34695f05fd7fe7"],["2020/02/25/密码学/DLP/index.html","73f11346ab339c8638624bc6a1ca7aaf"],["2020/02/25/密码学/PyCrypto_usage/index.html","09795781f9d32cdf3daea22275b7cc1a"],["2020/02/25/密码学/RSA入门/index.html","ac2dcc80a26d9d6853548a1f756befea"],["2020/02/25/密码学/ShannonTheorem/index.html","7c04d72d7b1c5d7c0e7c118736c24898"],["2020/02/25/密码学/Vigenere密码笔记/index.html","1ce0bf57f3f28aecede57c81baf64104"],["2020/02/25/密码学/仿射密码笔记/index.html","8190a7aecc47c609460521803142db3c"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","b80b4ba12a718c7662b34696a8482865"],["2020/02/25/密码学/因数分解/index.html","963f448eb993524abfba077b55d1083e"],["2020/02/25/密码学/素性检测/index.html","b0cd0192252244f3a540457199ab17f5"],["2020/05/05/Unity/00入门/index.html","f7c46446195dd7b0af062f70d57375fb"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","82794cbf4c04af7277bf195e2de920a2"],["2020/05/05/爬虫/00写在前面/index.html","7e9592438dc48c4fae2a7ab51c87b155"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","d2195f24f3aefbae7374144cac65d6e8"],["2020/05/05/爬虫/Scrapy/index.html","b32253741071ce77e9f192020b6b88b1"],["2020/05/05/爬虫/XPath/index.html","4a03c33beb96f2dbb6f582e7976f40e8"],["2020/05/05/爬虫/bs/index.html","6a2b51e40aa5273998d855a55fd85ca8"],["2020/05/05/爬虫/re/index.html","2b9e74c7970892387d608710ea40d225"],["2020/05/05/爬虫/requests/index.html","87280750768afd577f075115db827633"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","b35035364bb8721c4e7b740b95843690"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","bb390c8b1844a6ceb764ba2fa0a746ed"],["2020/05/05/课程笔记/编译原理/01引论/index.html","80fa7bb19e1e2a8a39e6f60e12e21e9a"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","e9872f1df18f546a87a05d0c6b965d2b"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","6f7019479441009c7b5049b426200344"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","800cae61983edd9c10d7c31e0f1b1b7a"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","01422045b594f3e5f371bc695a1d0a4f"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","4c06f520ad8210135855ba9ec40e3a51"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","ec7e3f18e7d79c5620dbdd6c5fb2d663"],["2021/02/02/Prometheus/01Start/index.html","b3bbbe0f4b90d25edecbd8310bcf687d"],["2021/02/03/Prometheus/02concepts/index.html","7525ac84f2f2f9ca6dda96d1cd32d028"],["2021/02/17/Go/gorilla-mux学习/index.html","f279e8cb96f0459570a66abbfa57e2d9"],["2021/02/17/Go/net-http/index.html","b925d381ed7d5bf6084069782a639f39"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","c035e4aef9c1e634aa4afea66f81a576"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","96db73d0d2a8e5e7ab97157ff29896d4"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","fd9833b55c6e2bfb4efc911bd8d3b65f"],["2021/04/21/Go/go-grpc/index.html","6c147290a169111fa269aaf6f50dae3d"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/index.html","aa10047dc47777b56f6c04731fa53411"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","95a3a8a02317639f88be4d0bac7acee5"],["archives/2020/05/index.html","6fb8ace276536dd552c530160557a600"],["archives/2020/05/page/2/index.html","0378c3e5626a582935bbd2f2b039cdf5"],["archives/2020/index.html","3755ea2ee85fb035b8a929587be93571"],["archives/2020/page/2/index.html","a17fb65c3fb918cd96507c724190cea3"],["archives/2020/page/3/index.html","2e2164e860b54ffdbcded5e7dc435ad9"],["archives/2021/02/index.html","aa7f0fa840a4126557db947f2e1216c9"],["archives/2021/04/index.html","ac16d76955ed1dd3fd0f9e6031737ceb"],["archives/2021/11/index.html","bdacc31cf5cf79d548055a6566671492"],["archives/2021/index.html","7a4caa63971c0b7c62bf45efa88129da"],["archives/index.html","6f41fbee80f705dfeeb4f9803b3118bb"],["archives/page/2/index.html","440f3200037bcf299254e3d94eab4403"],["archives/page/3/index.html","3d0cbc454f8a073a8301700a7996dcf9"],["archives/page/4/index.html","6a9d06c6e5d140762d1cc8893e8f1215"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","da945251b68ab2d48ef603a25792f915"],["categories/tool/index.html","72f2113fe2979ac580285c29f2c5d3c6"],["categories/课程笔记/index.html","16110ac3e08dd791feff8207b09496be"],["categories/课程笔记/操作系统/index.html","b2aa3958b9e2ae1f2cf8c6fc60070f6f"],["categories/课程笔记/编译原理/index.html","bc48e9b84da3633f0eb5287c392f44fb"],["categories/课程笔记/软件项目管理/index.html","cdca1c99c3b1b104a74bfd09b8f75ae8"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ce576bf7262750d7716ec785188a846b"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","487410dda90cb41ef990cb6e359ff30b"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","a7aad9dd724496937604faa7030f9ee5"],["page/3/index.html","eca47c364100207f830acaf13ef3c60e"],["page/4/index.html","6109841df3e0ec713e66d2d93abcf750"],["slides/index.html","0a04eb7db0031c641f663c42610fa78e"],["tags/Algorithm/index.html","ec4454f522d5b3ce902563c246ad4068"],["tags/Bin/index.html","799fa235dba932d66b436c40feb468e6"],["tags/Crypto/index.html","fce390cf0f88d06c47276822b2e167ea"],["tags/Golang/index.html","7243bdf29cc793149a6f20117004c080"],["tags/Prometheus/index.html","93af1325aa56caeacc4c75505a5687d2"],["tags/Python/index.html","18ee78f42e428b3bcd7eeab3a8993a08"],["tags/Spider/index.html","42ba1a2c4783e6192e707917c482de20"],["tags/Unity/index.html","e922f3c22f95466cf2c2cd69fe2d57e7"],["tags/Vue/index.html","ad930830042c492e6327989d06b0e590"],["tags/index.html","ea089142f5b8ba427b4a6e6d0bb660c7"],["tags/math/index.html","e4d0f0e1f0b47b9742998138117e2c33"],["tags/tool/index.html","fe7a72d2427cfbc5622ad133db96c539"],["tags/web/index.html","b66f025c4d73fd2fab6ba544dca46f02"],["tags/前端/index.html","22c83d8a6db59f47a6553428ca00ce39"],["tags/后端/index.html","3c0de5d4964c2a146af0fcbcc40930cb"],["tags/操作系统/index.html","9c6cebf79d70734c3414a88336cb4490"],["tags/编译原理/index.html","c71f0749209b43e34e3f38dc0000b47b"],["tags/软件项目管理/index.html","e2be202cfef27caf6af0a360e97947d2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







