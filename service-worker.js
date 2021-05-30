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

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","2d697c9664de01c87df7f78993cc6b66"],["2020/02/25/密码学/DLP/index.html","0733aac5937f8641bd31761676568b5d"],["2020/02/25/密码学/PyCrypto_usage/index.html","bf82ebf075e7f87ab49dcdc288cbe4ff"],["2020/02/25/密码学/RSA入门/index.html","73a9357df044257a33add5df2d80b76d"],["2020/02/25/密码学/ShannonTheorem/index.html","b6bdbd1717f7c86d3020a0ab85c37b99"],["2020/02/25/密码学/Vigenere密码笔记/index.html","85977aa073e83e021563daf854e7ca80"],["2020/02/25/密码学/仿射密码笔记/index.html","a34cf635f800c255c3c7dab6b5269bc5"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","75c575b7cbc247123ec9dafac2c203be"],["2020/02/25/密码学/因数分解/index.html","00aa54afbb777a51e4ca2e4c075bee8c"],["2020/02/25/密码学/素性检测/index.html","e1d6badad69d251b742c722921995a73"],["2020/05/05/Unity/00入门/index.html","aeed093c027d48b4a913742dec371afe"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","64f41af55a28efeebabb82049e230e17"],["2020/05/05/爬虫/00写在前面/index.html","9b15635aa7dea5a74648de4666ed2834"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","74606c90dcc743583bca14f83dc5165f"],["2020/05/05/爬虫/Scrapy/index.html","d2ad87e09a425ecc49efc644472e4e5a"],["2020/05/05/爬虫/XPath/index.html","d927433b5b6b015fe0e2939c0611de7c"],["2020/05/05/爬虫/bs/index.html","12b61f6a3d1f71749a5e727666fa6499"],["2020/05/05/爬虫/re/index.html","58ee5bba0e757b2889297e6d077b72c3"],["2020/05/05/爬虫/requests/index.html","72e6d4adbfbf3e1421fb8f2032f46eff"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","e52e3d091fd53d63540436b7fc010f1a"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","6c9b30fc6c7dc502f2b4002836cc0578"],["2020/05/05/课程笔记/编译原理/01引论/index.html","2beb6f6a1ce055d0441f63042e047093"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","df7cf5384dfba479665153980fde8b65"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","aa9512ea29513ceb5c24a1aa75612813"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","ee76596f03088ef926041a86658c9a1e"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","0f00a3af5e0921ec93596b54d6e15037"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","cb96981663c076851c094ea30ce28cbb"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","3160ae400438a372ddf8d73e1681ce56"],["2021/02/02/Prometheus/01Start/index.html","60dbbe77b53476ef10ed6ffce35f5fde"],["2021/02/03/Prometheus/02concepts/index.html","dbac2780955c0079ca55f05a9b24fe0c"],["2021/02/17/Go/gorilla-mux学习/index.html","b0fbe8bf0b9c776bf734c2ccf6e2710c"],["2021/02/17/Go/net-http/index.html","7f7fe77ea168c97e733945035663dd71"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","cb5da20ef6f9aa0ca1be1298303d9452"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","b8f685358a5f8a93f4ffec135849f10e"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","cd03cd692e9f967d2d8680f81e94bede"],["2021/04/21/Go/go-grpc/index.html","17b57d5b63a9c12b259d106af6947da4"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","36cc3f3e762721d4586b2b99ca11796a"],["archives/2020/05/index.html","e615cbb5155d1906e0e6c44f36543ea6"],["archives/2020/05/page/2/index.html","e251375df19622874d9f3d59e2d17a5e"],["archives/2020/index.html","d0943993394b0a44a0e330f49744f762"],["archives/2020/page/2/index.html","b9f2315f8d6302b7482f65181548ca15"],["archives/2020/page/3/index.html","372f027de1670a4807601743538d1e93"],["archives/2021/02/index.html","29fba74e21880f6584c55bebbcb831c6"],["archives/2021/04/index.html","385f45e4044e6de41c563da9029950dc"],["archives/2021/index.html","436e4f4fb6aa727a95c857eaee74800c"],["archives/index.html","0029ce798fde73d388b0719aa2245926"],["archives/page/2/index.html","d2630f587694f864191bff1b0d812032"],["archives/page/3/index.html","7cc4414631e766d489f02598e33ba5f8"],["archives/page/4/index.html","e15a288dfafbe59688a31de458a13ccb"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","a7977341f3f9df90554b85284e5be04e"],["categories/tool/index.html","36d49518657a0f6afe5d36d8b5333f05"],["categories/课程笔记/index.html","f31591839bf114e6f8b1ed9ec3af3ab0"],["categories/课程笔记/编译原理/index.html","f01f832cc68345ecaa9e3fbcf02f418d"],["categories/课程笔记/软件项目管理/index.html","f849060c32902b87c9a1917e11b36b8f"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a8396a8c1bf9fa2a0d1bb7909346983b"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","0da1eae7a81743f5c3671ed74889771a"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","a7d3c006fc2fc06562de0d7c1f6422fe"],["page/3/index.html","6bbebbeb2ca6a5d528b2506d4ef8888f"],["page/4/index.html","064d88bdb2c601b43dade8c407e553bd"],["slides/index.html","dd3c75f890cd2eefc39c89593d5358bc"],["tags/Algorithm/index.html","297ab23680c92f5a7a93b1c4a040fc3f"],["tags/Bin/index.html","2049fd40822952a8d40b33063ee6918c"],["tags/Crypto/index.html","496166f942e7b006ab07195c13631bf1"],["tags/Golang/index.html","f08eae6b9156408c918e8bc0af099f09"],["tags/Prometheus/index.html","505b0d9ed576a6eb1f35372e37b45252"],["tags/Python/index.html","113d4da1261a05f1aea6a7257e7dbb88"],["tags/Spider/index.html","6f1422241c4560a8ee7c61c1fb0bd268"],["tags/Unity/index.html","b670cf497037fb573fbd1e3baeb35141"],["tags/Vue/index.html","a4c70e75820a644a97aea25beeea3fad"],["tags/index.html","29ba0748b54d9ce51abc8682ee283592"],["tags/math/index.html","c004a92da3a3738c7256cfe6ba509c12"],["tags/tool/index.html","ce0dff3d69eb9fc35f5f162d5b4346ac"],["tags/web/index.html","11b00d450069fbac73a417963f9ad0ce"],["tags/前端/index.html","cabbddc960ed2af20cda190795d1c167"],["tags/后端/index.html","b65886063b00c5a8f049bf32c446e79c"],["tags/编译原理/index.html","36455de0bdf4eef037129300c0102e64"],["tags/软件项目管理/index.html","bb91e602d16001d8453f7e764d797112"]];
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







