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

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","949c273798e93636e4a4b1f6fccd8824"],["2020/02/25/密码学/DLP/index.html","8f9842a0ee7d1e0049b2b5974b31bc67"],["2020/02/25/密码学/PyCrypto_usage/index.html","0942d9c4da28747c906a281a4830482c"],["2020/02/25/密码学/RSA入门/index.html","be2287fdd761806a0a8a2be7311ee75c"],["2020/02/25/密码学/ShannonTheorem/index.html","2c2c6e1f4a23046aa41c082dee8e20b3"],["2020/02/25/密码学/Vigenere密码笔记/index.html","70fa565afe7b02f56e7e3a2f89d0f70e"],["2020/02/25/密码学/仿射密码笔记/index.html","a5e72c62193aa64be2f8a67728cb5f57"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","86abc9ad644ee8a948f56a0dcc87237b"],["2020/02/25/密码学/因数分解/index.html","e83ab615eae0b71812bbf15aae358f29"],["2020/02/25/密码学/素性检测/index.html","fe6251b6c2151c71718eccff7a9c86ff"],["2020/05/05/Unity/00入门/index.html","c64c73319cfdf306688e1cc62d962090"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","f716618e0f0b16f2838491c09d9c6840"],["2020/05/05/爬虫/00写在前面/index.html","f0ae6d0a31d587d35ba530cd2e610201"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","1b96b874a7de62d9c4b262950749ffc4"],["2020/05/05/爬虫/Scrapy/index.html","d857cc20afe1c374b8a4eafe3e37c195"],["2020/05/05/爬虫/XPath/index.html","dc045754c38fe5cbf99a5d0f7b133536"],["2020/05/05/爬虫/bs/index.html","4dba07e7d09618d4b3bd415c969751f4"],["2020/05/05/爬虫/re/index.html","814834fbb6894e6f2688c5b125aa92b5"],["2020/05/05/爬虫/requests/index.html","45dc49fa11d1eac0a7504be7f49d8cb8"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","7681ef3f9ceb14aff8b5679d1bedd970"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","1e6211075ce9927a68002e15769619fd"],["2020/05/05/课程笔记/编译原理/01引论/index.html","962bcf14e8f45dc3f9e9dfdb6d7a6018"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","27d97707f22698c59f2615feb4ad95bc"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","d63d050b9dcebe6bba064074824674fc"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","f7fec43bc8048a64f3e9763819637f64"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","a921a350c8ee25ae8c2411034b37e4fb"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","22561287a93bbab32c2f16869e8a0704"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","7d4b4206d8a922275912762bfc0b4e44"],["2021/02/02/Prometheus/01Start/index.html","3f9c210a24fbac9fe0fe57a3908aba04"],["2021/02/03/Prometheus/02concepts/index.html","35604461caef1a578c28b3be58eeff1b"],["2021/02/17/Go/gorilla-mux学习/index.html","eae51eebb7432cc5c06718150e6509e1"],["2021/02/17/Go/net-http/index.html","9904c1744422276b110b87102f2d63ec"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","c0801f8b61f8693ba7588e8071294b07"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","a7b559e04d1e8ba9b1c899cad94a2b75"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","f157f5260af5d578aa060b72ecb39c1a"],["2021/04/21/Go/go-grpc/index.html","1f474eddeb8da9c0f0daa2e401e1b739"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/index.html","cb70ebac44cefb544e1c06b679d52ed0"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-34-11.png","19b659b206d0d24d2dabdf723c951cbe"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-43-36.png","3d62b170e13df69e5990db3ea53d72a5"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-20-27-49.png","db9c907d4385b6480cc2c41f3b738903"],["2021/11/07/OS/Linux基础结构-request/index.html","0dda6c0d277b7e2140da809387b8b41d"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-37-03.png","8174529636ea5c44c2f20cc0d710d6ca"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-52-46.png","8a4c47ccacb88e5803b571f0ac72d5ef"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/index.html","4f24092c353c9270edd0a01091398580"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","fdbbce949d6420460e122ffd42ed915d"],["archives/2020/05/index.html","de9c1aac59b83338bc11178105bef1ee"],["archives/2020/05/page/2/index.html","09765a556192733dd8c0d2f6d1e1c935"],["archives/2020/index.html","6abc52c85a10f8d1180b7e5fba711df5"],["archives/2020/page/2/index.html","6e7debaef0ec7137998ca6822bc17374"],["archives/2020/page/3/index.html","f31e2f8f1346871bf1e7df2d9f1bf4f9"],["archives/2021/02/index.html","fc1925ad66ca6e6adeb88bb79a8e3884"],["archives/2021/04/index.html","c41576ef6cd8c4acd218f61ff97eaf14"],["archives/2021/11/index.html","098851a71655d41579b5d5a7b3790a04"],["archives/2021/index.html","44960e50c5ac1948f4bbcf0e6be25421"],["archives/2021/page/2/index.html","237a39dad2564f31a6964e9cebbdf211"],["archives/index.html","925f18e424c2b82f529058a1ac0af040"],["archives/page/2/index.html","f33747a1727ba84146f7211a3e38c4ea"],["archives/page/3/index.html","d81ff77fed499cdfd5b792e80b609cd3"],["archives/page/4/index.html","fe987937c202c8b75754fe08488feaad"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","60d6a0c8576fdb121cc340a553937c4b"],["categories/tool/index.html","6d96a3869cd9729fd8951a54620f6027"],["categories/课程笔记/index.html","83bd5a99ca63d5f48ef391e32f7896b3"],["categories/课程笔记/page/2/index.html","9d1efb1e4f0e7d2f29aeda40216eb28a"],["categories/课程笔记/操作系统/index.html","e6ffe0b90ff0c7d09a0953244e923654"],["categories/课程笔记/编译原理/index.html","eb61e3ce066196368fda81a54d98f83c"],["categories/课程笔记/软件项目管理/index.html","76b0226240c15eecdb028de94415a675"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6e17e374f79654da7610912e0ea42dbb"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","8177be7109ce44201573424b1a358e0f"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","700b0761abd38814015a5448a0efe1e8"],["page/3/index.html","21f501e00d5fbc86904c14ffc16d26dd"],["page/4/index.html","82f422c90e9e703cbbf7bf2a7128feb9"],["slides/index.html","1ebdc334d6d4c71bbc9d3eff604d3ec5"],["tags/Algorithm/index.html","b0c7bd5aaa313c1ee7a386093418e589"],["tags/Bin/index.html","27ef1ef11051c2909d4a942b3a06e71b"],["tags/Crypto/index.html","bb6dbd3d6716f17554ab7257b0d236d5"],["tags/Golang/index.html","f036882e9eede84bc9896b408abc38f2"],["tags/Prometheus/index.html","e3df4e888adb9ad6a535f13dcfdb1c74"],["tags/Python/index.html","60bced094833b556adab847846637b44"],["tags/Spider/index.html","eb05f3dd3754a77fdfc0f5f4f5c67748"],["tags/Unity/index.html","252545a3c153d99177f5b19f01bcdf80"],["tags/Vue/index.html","6cacab97b6f8f327977f9c25209f3622"],["tags/index.html","8b660219a78cf282095bcacb5a638bd6"],["tags/math/index.html","dd732d8b63c5a38b171c78bf2cf096fc"],["tags/tool/index.html","0e41574abac9e6590474cf5431231c32"],["tags/web/index.html","fecc701e3e4aea43481e176feca63ebf"],["tags/前端/index.html","6c5dab6af184f6489e2904cec4463942"],["tags/后端/index.html","39d3a1a2fac69953ad0b32e05e3231e3"],["tags/操作系统/index.html","b7049edcedc3d4e1800902a434bbbca2"],["tags/编译原理/index.html","5fac81fac8cbe83625d2d030e9cc7d56"],["tags/软件项目管理/index.html","0cea6f52120b12fb7c5a31e228b6f594"]];
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







