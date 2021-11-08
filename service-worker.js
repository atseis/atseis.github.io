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

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","d7001e6eccd69fba5918de021a5414a1"],["2020/02/25/密码学/DLP/index.html","adb2d5ffbd81d995c992e9b3aed48d45"],["2020/02/25/密码学/PyCrypto_usage/index.html","954088de8709e66ecf525fa5b9ae9b57"],["2020/02/25/密码学/RSA入门/index.html","83fa6e88520e78e83f0e472f63ae4488"],["2020/02/25/密码学/ShannonTheorem/index.html","012d4d47499f454612915db7169576c0"],["2020/02/25/密码学/Vigenere密码笔记/index.html","b317ea6bbfd6caa5d7199f0c20d02bb9"],["2020/02/25/密码学/仿射密码笔记/index.html","387e94064d43969b715f879c67bf895e"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","de06c18cbd9f395c239c5b5300ec19e8"],["2020/02/25/密码学/因数分解/index.html","8277e5846a7da07863da16c6bd1a5c1e"],["2020/02/25/密码学/素性检测/index.html","8a044c76fef182876ff7ee3d85e125ea"],["2020/05/05/Unity/00入门/index.html","144946680fa33458904a496d44adf900"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","66a9c5bbe1af442e4b4cdebfc703d6b9"],["2020/05/05/爬虫/00写在前面/index.html","8a993ee523d67bb130241a4b046f35c7"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","fe5294cdad02cf036c21f3b75a0d556f"],["2020/05/05/爬虫/Scrapy/index.html","9491dedd48e606a47038330e43281f60"],["2020/05/05/爬虫/XPath/index.html","7aa5feefff09a80bbdbb3e672b8d9507"],["2020/05/05/爬虫/bs/index.html","3d13fb13eabeefefa8f124b355c6350a"],["2020/05/05/爬虫/re/index.html","4f19211030f829f93b3bf850ab48ae35"],["2020/05/05/爬虫/requests/index.html","299edb4fe5fa28332493f37ca0fdbf67"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","92b7f8007afe31fe3ec76d87d0921891"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","0fc6d4573656894dae4effb002ce288f"],["2020/05/05/课程笔记/编译原理/01引论/index.html","606734f5d33c21d62ed9d9e30ad9b9f7"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","ce50e8db2cee71fa71b244e969c53b26"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","d24f87bf35a981a3f9cc280489f56aca"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","592c147cca9ed020db1bba3f5a9c057e"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","4c88ffbd71d002f3950baac7afbb763d"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","3fc675c453b2eda96110c40d9846ce3a"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","649f6c762ad7b4b482d23168b1a2d29f"],["2021/02/02/Prometheus/01Start/index.html","aaf5cd47be29897f22862d8b20cd81ab"],["2021/02/03/Prometheus/02concepts/index.html","92adf4e1e4d7f20ca88025bfa935a74f"],["2021/02/17/Go/gorilla-mux学习/index.html","7a43ece50f78bd8e552ad7cfc8b3a5cb"],["2021/02/17/Go/net-http/index.html","2ab974a7e98655ad3d3a0b3e198eca69"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","7dc56a3e8983b536b23e724a9287b8bc"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","bced0bbf5322ecdfae6b61b1c28ab6b9"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","1c7486b07d0c9d24ad842641fef5e485"],["2021/04/21/Go/go-grpc/index.html","c1cb80e717e2c881e625d889ebb344d0"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/index.html","33acedb43be81cd3bc32a4a6f1a4f6af"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-34-11.png","19b659b206d0d24d2dabdf723c951cbe"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-43-36.png","3d62b170e13df69e5990db3ea53d72a5"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-20-27-49.png","db9c907d4385b6480cc2c41f3b738903"],["2021/11/07/OS/Linux基础结构-request/index.html","f99566816eee1b2428c9348d33e52072"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-37-03.png","8174529636ea5c44c2f20cc0d710d6ca"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-52-46.png","8a4c47ccacb88e5803b571f0ac72d5ef"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/index.html","31a490c2edc1c40eff7fadad04ffac22"],["2021/11/08/OS/Linux基础逻辑-读硬盘/index.html","994667b820351d8783d6637e7379d325"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","d61669eac535f31231ea31c160bd8ebf"],["archives/2020/05/index.html","6f820c9a27b5a86a5dbed57cb1a60a2a"],["archives/2020/05/page/2/index.html","a5d410f9d83b53a33bd444223894db9d"],["archives/2020/index.html","25e670812d0604d8d236ffb83c4b196e"],["archives/2020/page/2/index.html","1e1dd7a14b67ceb673ff4ad49d230153"],["archives/2020/page/3/index.html","7ea9bc9af4b1e20b2520abecbb717810"],["archives/2021/02/index.html","0d7cd7b47dc0d9263508a25f235a4591"],["archives/2021/04/index.html","1179fe35748063b20f43a16b93bf1081"],["archives/2021/11/index.html","047d56a4a4eb9388a8784ae326340b48"],["archives/2021/index.html","a169550bc98eb9f4d5442e9e12aefa02"],["archives/2021/page/2/index.html","9c2e52512529b7e957714e19f0356148"],["archives/index.html","a00f695d2b14c2f5e7dce1247c563efb"],["archives/page/2/index.html","2f4c6c7587f7080c07c348ebba970ac2"],["archives/page/3/index.html","af4246ebba4cea67ac2bf307249e7995"],["archives/page/4/index.html","a41f2509c4ed3f9fea3ca5daa4543458"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","d5d118812603301e917769f8ac124336"],["categories/tool/index.html","142300ce05dc04fac416f0e31040bf22"],["categories/课程笔记/index.html","e18d0920f04e58e443cd9b65093e057c"],["categories/课程笔记/page/2/index.html","5a9a71b8364cd81ccca2ef013952025a"],["categories/课程笔记/操作系统/index.html","249e48efab07ad3f4306b7d207fc0950"],["categories/课程笔记/编译原理/index.html","9d934d37a0d4a37a8c78ca8b5e87f4e5"],["categories/课程笔记/软件项目管理/index.html","4ae7c0c20a682a82aee601ced541e367"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5f822c64dabdf2e8e1be4f9b9fd24b07"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","83705667f74eed3b28d0a6e698026e55"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","e71bbcaebf357c676fdef7cbe6ba58f6"],["page/3/index.html","f7e77efb1cf08f05f13fbe6ed1378e5a"],["page/4/index.html","96282211a3aa6d746e89e0f8b7fbb1fc"],["slides/index.html","e3c5fafed71b53d186f46cd8afa0850f"],["tags/Algorithm/index.html","7abcf43ec9e2c7e5f020db77498a0308"],["tags/Bin/index.html","4ccdb1df8dcd25f239a5bc40cad67701"],["tags/Crypto/index.html","80c1b020843ac102f10cf56a3ae98da2"],["tags/Golang/index.html","7208749573b2bce30a67bd4d7fbcfd73"],["tags/Prometheus/index.html","dd4f6e2921f5bbc89533a20f84dd1d59"],["tags/Python/index.html","ef60ac72c0aff5aa68b62e11e383ef67"],["tags/Spider/index.html","96996d1c39648e3f0bb1e42899da3707"],["tags/Unity/index.html","61322892754086eba79f7e92a2452bd4"],["tags/Vue/index.html","1197a64964b307e26831dec7d800350d"],["tags/index.html","03f78ec3704ac9f6daadf87b698271c0"],["tags/math/index.html","e1fe7ad9b974fecd58d0ccf203670e38"],["tags/tool/index.html","0233cbd7c86103f193f1c7bb0096ba59"],["tags/web/index.html","36cacaf9a828c47e965ce4dd029dcc9d"],["tags/前端/index.html","3b388452db452cea9af00acb794a77a9"],["tags/后端/index.html","00241b9b65797d7339cee9561260e8a3"],["tags/操作系统/index.html","c84b790f9f441f03e1c80e3ff22022e8"],["tags/编译原理/index.html","718f8dbac264d93f70cef0396a3f3266"],["tags/软件项目管理/index.html","7c477a7d10fed687303e73424dac25a5"]];
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







