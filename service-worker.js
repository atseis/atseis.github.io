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

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","aae68d2c902918876604b152e70c0585"],["2020/02/25/密码学/DLP/index.html","47e8b77bb696426050dc7d241b183bd1"],["2020/02/25/密码学/PyCrypto_usage/index.html","e1e942755bd2c57710980dec4849ebd1"],["2020/02/25/密码学/RSA入门/index.html","fe3e56eab449e611dda17f89b05f217c"],["2020/02/25/密码学/ShannonTheorem/index.html","9282c9c407ea59357a71a8c34eedcb4a"],["2020/02/25/密码学/Vigenere密码笔记/index.html","fb7a5c419a855e656874d4aea20bc068"],["2020/02/25/密码学/仿射密码笔记/index.html","9772d3518c4ef848a97227910c53c333"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","320b637eb6796e1613165949dbddd131"],["2020/02/25/密码学/因数分解/index.html","891bfeb3a0023cb2102c1174aef57815"],["2020/02/25/密码学/素性检测/index.html","585bf12ce2dfabe2bb2e2a90747922d9"],["2020/05/05/Unity/00入门/index.html","63e484d81e5caab5469c2264f0a02a9e"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","274eea4a0aedabb3081278e49f9becfe"],["2020/05/05/爬虫/00写在前面/index.html","092bce6f2bf4aa8cb4f0251548a0e689"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","31ef5f61a44f32b71231702971b665b4"],["2020/05/05/爬虫/Scrapy/index.html","c1b02d893518ed6701ddbeb94acaae9b"],["2020/05/05/爬虫/XPath/index.html","ccf7b89bfd00d55fa58a54476c9bc8e7"],["2020/05/05/爬虫/bs/index.html","3d5b98676aa85aaaeb82153f697021c5"],["2020/05/05/爬虫/re/index.html","56f8790a28b7738eb048cd4755e9647d"],["2020/05/05/爬虫/requests/index.html","d00a1596f56acd3742151bf1be0b566f"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","739d559e7a3946db10d04336d0bb90fc"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","2b3b4a1c90862f3de3bf48270a16a601"],["2020/05/05/课程笔记/编译原理/01引论/index.html","427dc791662d490f3c57c2218c8b1b53"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","c0e7a19f9733ee7affa6e6a4e9c367aa"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","36cd52a4f677936736af81d89b01491d"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","ad3e8f98e9dc220db2aec29cb93a4e21"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","4019723dc0628fdc822526c6e4875b5a"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","428a6e2e393da4634f0b4af8e2528ff6"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","5b36e8b8aaad38c48e85b374d66e0334"],["2021/02/02/Prometheus/01Start/index.html","680d10c5e8b03b760ddeb187349fed07"],["2021/02/03/Prometheus/02concepts/index.html","88b6db28afe14d553693b9b8bc7d801c"],["2021/02/17/Go/gorilla-mux学习/index.html","b3dbf30ca262c5c897a54a38bcbd7b6f"],["2021/02/17/Go/net-http/index.html","f5ae05324f2ca2e1f33f2f0fe18a8744"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","5a558eee35b322f9f7d49fd64a2b09c5"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","4e826266ae68f39aab469303ba57efa0"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","b7707fafe90da8284c1538fd567e15fe"],["2021/04/21/Go/go-grpc/index.html","9e842bf49156a9f8363a4358a6aa246d"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/index.html","279f490a23cd3467ed9146da4767ca67"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/index.html","ffaf636c66bdc38a5b540152537c8d18"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","2942f54d4445a808a61e782fe1ec1a06"],["archives/2020/05/index.html","5b0ad31ffbbbc9cda46a4af4407a8ca3"],["archives/2020/05/page/2/index.html","863720e1e622bc88a8f2aa2c61ef3659"],["archives/2020/index.html","90eac2620e4e90b6399714be6aa521fb"],["archives/2020/page/2/index.html","9ef5bc97b266fd681263101045f15ba6"],["archives/2020/page/3/index.html","e2beecd1de7735114b8692756ec2ce9f"],["archives/2021/02/index.html","61da9a5bf47e015acad136c7686361ee"],["archives/2021/04/index.html","5909842bc5601d083750d75876f8423e"],["archives/2021/11/index.html","812752db88f31ab59b8dcd8241316518"],["archives/2021/index.html","82f918b9a54f3c1d38ba14dd1c861c6e"],["archives/index.html","f2f7887bda2c4985c63c22b4899e3b42"],["archives/page/2/index.html","b345e4bf654881a76de1da9c2c2b1190"],["archives/page/3/index.html","d75b9513f8810550d8275e52a39b5bdc"],["archives/page/4/index.html","be650b10344add7a4950f01b1ca66b59"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","c26018d3df0a489230d0a2bedd6789b1"],["categories/tool/index.html","f97fa829ae4703b5c57701f799bc313d"],["categories/课程笔记/index.html","fe8c1c12f8971b94c0d84af5ebe0e603"],["categories/课程笔记/page/2/index.html","1352e4489eef9a5a580ea9764239d960"],["categories/课程笔记/操作系统/index.html","cb59dd403cc4cfeeee628d3a3dc5a8d0"],["categories/课程笔记/编译原理/index.html","d749da59fd1771f12c1fc884a3ce48cb"],["categories/课程笔记/软件项目管理/index.html","97e4ab576613e34c9221a79cd2a3b3b0"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a0e7d0841352a4a6f734e4f9ea9eb67f"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","37360c408c6a15bb4c2ac06115228076"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8fe6f2d247f93f532b48de80d56af00e"],["page/3/index.html","2a86bb06ef97504cc8a8e43fc3f12a77"],["page/4/index.html","3b8236406b93270e4696de070bd447ce"],["slides/index.html","7b75f354cf77b4d51625a357f34c3784"],["tags/Algorithm/index.html","fbbdb5d919a95eb6b76ab12cd20360d7"],["tags/Bin/index.html","434f2f4cfdd69aac8e72b7f423d363c2"],["tags/Crypto/index.html","8249b90b776fb9e912f8abd427b44e0e"],["tags/Golang/index.html","8af231a40b975d20f0520b333109ea42"],["tags/Prometheus/index.html","5113033beb6aaeb093db9713077d6f08"],["tags/Python/index.html","e723442518d04f8a91c79542f3a85550"],["tags/Spider/index.html","d269f0bc06af47b6dde1867a70d0cb3d"],["tags/Unity/index.html","0dddb8d5a7a78d546c7d312abd0c8f02"],["tags/Vue/index.html","95a92248315188a37fb1ab0618f49b23"],["tags/index.html","2bac7f88387cefba1e1ff6b3a9fb3678"],["tags/math/index.html","c6eee47be3b8bd54774ccef6ce6c231f"],["tags/tool/index.html","a0a7f613987ecfd58941bcec4e8fb279"],["tags/web/index.html","65287b6488e05386cfacac8772aeded5"],["tags/前端/index.html","f31bec5975a9c4a3f1d52b89f3b0be8e"],["tags/后端/index.html","585b3d07cc8e8368efdbca8d8b3a66f4"],["tags/操作系统/index.html","d08e959c9a7fe9b029242ed633e0e77d"],["tags/编译原理/index.html","bcc36cb56c27e1b897336a8b68b178a6"],["tags/软件项目管理/index.html","6cd29e530d7f9ef98d549ec2aa027822"]];
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







