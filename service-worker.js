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

var precacheConfig = [["2020/02/25/密码学/AttackToRSA/index.html","a6a9a2db3aaa0d6854ff5f2ee51327ac"],["2020/02/25/密码学/DLP/index.html","be8d8fd7af25745a7b833b2268682a98"],["2020/02/25/密码学/PyCrypto_usage/index.html","972e90bf6f854cd392cf9fecde857bf5"],["2020/02/25/密码学/RSA入门/index.html","21b65f745fa919283dbe4c6d6eb4fc48"],["2020/02/25/密码学/ShannonTheorem/index.html","9b913565eb331002b2d03e6e19dc48aa"],["2020/02/25/密码学/Vigenere密码笔记/index.html","d3dfef0f882ed1b29735f07450b3c688"],["2020/02/25/密码学/仿射密码笔记/index.html","98653fd503c1070b65525b69f2471b80"],["2020/02/25/密码学/关于φ与Φ函数与序列中分数个数的讨论/index.html","db1c8ec49d35f59eff34f716b3870020"],["2020/02/25/密码学/因数分解/index.html","32d9917678b2930afe60a60292e53e88"],["2020/02/25/密码学/素性检测/index.html","52873f19723df4980bf638d2a0fcc282"],["2020/05/05/Unity/00入门/index.html","41e58a8f3f49594598c7719bb4a06a9f"],["2020/05/05/二进制/pwnablekr基础笔记/index.html","6b14347fc26b1f469e5eef7ea9c4f11b"],["2020/05/05/爬虫/00写在前面/index.html","9277c335641fa798393b80f2ba0c2621"],["2020/05/05/爬虫/01动态渲染页面爬取/index.html","0006d963c8a36bf811411fba1b816a9d"],["2020/05/05/爬虫/Scrapy/index.html","bf57bce8ba6c96b4dd58df1f74770188"],["2020/05/05/爬虫/XPath/index.html","05e49cd3bacd029256be04672a1e0936"],["2020/05/05/爬虫/bs/index.html","7404979f18b5c5ed7f2052caa2a1434a"],["2020/05/05/爬虫/re/index.html","f8a69de2c8e62d41c36ff221e5c73a95"],["2020/05/05/爬虫/requests/index.html","20c7c8525c2bf382f138e823528be91b"],["2020/05/05/课程笔记/编译原理/00写在前面/index.html","f1d39dd803836eb4985f20269528cfaf"],["2020/05/05/课程笔记/编译原理/0123型文法/index.html","60cb1fb606a75fd6d82833bcad869fb8"],["2020/05/05/课程笔记/编译原理/01引论/index.html","535cab18f08de3e7bf6ed592f5aa739e"],["2020/05/05/课程笔记/编译原理/02形式语言与自动机基础/index.html","349f007f92b36a097b9a587dd15195b0"],["2020/05/05/课程笔记/编译原理/03词法分析/index.html","8d9b714daaf5b61f9b77d3e8f3d465e6"],["2020/05/05/课程笔记/编译原理/04语法分析_自上而下分析法/index.html","7e93bd52cd071c9d44146f2e6acba816"],["2020/05/05/课程笔记/编译原理/05语法分析_自下而上分析法/index.html","82c2c4d51f00b87ef2aac5c10e2314fe"],["2020/05/05/课程笔记/软件项目管理/00概述/index.html","91228a020263138aabcf513101bc47c3"],["2020/05/05/课程笔记/软件项目管理/01软件项目初始过程/index.html","008cfb3bf5dec878f5564b1e2839b767"],["2021/02/02/Prometheus/01Start/index.html","11b1e3d913a1d4b286061379c35c44a1"],["2021/02/03/Prometheus/02concepts/index.html","7f6205aebcee9c9128f240380e287742"],["2021/02/17/Go/gorilla-mux学习/index.html","3371787e09bcb2a2b84a65cd37c35002"],["2021/02/17/Go/net-http/index.html","07d004e03adb32958367de67dcec54af"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-48.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/2021-02-26-15-22-49.png","a72559db309971969393c6f913ca3afb"],["2021/02/24/Go/go-vue学习-登录注册后端/images_go-vue学习-登录注册后端/e16a9c19d03732a47ec59543214473c1ec9a5de764324d6d38eaeb4425f79d7f.png","e62b4a01e0b861bd8b40495cc240e2be"],["2021/02/24/Go/go-vue学习-登录注册后端/index.html","33313b70e8838cbb297120e30752fd77"],["2021/02/24/Go/go-vue学习-登录注册页面/ade4c55d555b53145f7d15c8a384b371b116d05cda93e394948b47c704b44a99.png","82d6df6ec3017c1010f5e781ea08285e"],["2021/02/24/Go/go-vue学习-登录注册页面/index.html","fc8b1373edd2d98ae73da86f981b6320"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-50-20.png","5f64ad8e170d02cc974e69fa63c04f2d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-22-51-14.png","e4573b62e0cd59a04ade5d0d11e97985"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-36-33.png","7b953c7f3a7a4519d9c123d631d50e29"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-39-35.png","683ebd2cd8e2b4b745a35d01c3e690cc"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-44-06.png","8bafed74ad0e706195d027ef82fd509c"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-26-23-50-29.png","5d09af9df1f36688876f13644c8507c1"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/images_go-vue学习-登录注册-前后端交互/2021-02-27-00-01-38.png","ac1471b37e1f941fd23808ea38ddef5d"],["2021/02/25/Go/go-vue学习-登录注册-前后端交互/index.html","6d7887dbfa140b92e3dce49bd3729881"],["2021/04/21/Go/go-grpc/index.html","4055079038b7225ff4c1bc233ac50189"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-10-59-17.png","ffec68a7b663d27ebc4c7c5e2e907059"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-36-51.png","2c4800dac246a7b9de8cd760ef3c50e6"],["2021/11/06/OS/Linux基础结构-缓冲块/images_Linux基础结构-缓冲块/2021-11-07-11-40-30.png","18bc3815c1d953f7807ccf9435e0e5df"],["2021/11/06/OS/Linux基础结构-缓冲块/index.html","c2e7a208e09269deff3cac4be2a75453"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-34-11.png","19b659b206d0d24d2dabdf723c951cbe"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-19-43-36.png","3d62b170e13df69e5990db3ea53d72a5"],["2021/11/07/OS/Linux基础结构-request/images_Linux基础结构-request/2021-11-07-20-27-49.png","db9c907d4385b6480cc2c41f3b738903"],["2021/11/07/OS/Linux基础结构-request/index.html","1dcfa664599fe91332e623517cdb5b51"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-37-03.png","8174529636ea5c44c2f20cc0d710d6ca"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/images_Linux基础结构-sleep_on隐式等待队列/2021-11-07-16-52-46.png","8a4c47ccacb88e5803b571f0ac72d5ef"],["2021/11/07/OS/Linux基础结构-sleep_on隐式等待队列/index.html","78a8d7deaecd11ca3ff18f1f62b0e41e"],["2021/11/08/OS/Linux基础逻辑-读硬盘/index.html","d4f7ce4504878b39ddaceffff97951e5"],["2021/11/12/矩阵/矩阵-初识奇异值/index.html","f3a0ef514998605afa1034fc9acb7b92"],["2021/11/12/矩阵/矩阵-范数/index.html","df7b96cbcd26a1e2f4bc5ce1d41e27ce"],["2021/12/29/矩阵/矩阵微分/index.html","89333d22b9216a11bd89e24cad963180"],["2022/01/29/Algorithm/LP/index.html","637b32f6c06fe3980bb5741e036e4456"],["2023/05/25/eBPF/从Makefile看eBPF结构/index.html","c870f44a2b8fa9bd9284152db4a56c21"],["404.html","77bdd64bde45b23f63382e847973d661"],["archives/2020/02/index.html","085d4412d9852314713b851adf346f24"],["archives/2020/05/index.html","c8153ffdf012f1a2feacddd9a0f83632"],["archives/2020/05/page/2/index.html","36257dc6322f2535f79a5e9c6f5d648f"],["archives/2020/index.html","9491eef6db93f5b90833d6c52cdaeb1a"],["archives/2020/page/2/index.html","9430a3d3d00709d0d83af2f72fbf6caf"],["archives/2020/page/3/index.html","d1a3dfa783bbc443e71e1f1165449df4"],["archives/2021/02/index.html","428fe7b7fec6dbfff721e7463661c566"],["archives/2021/04/index.html","c1feb1aa21b0e3b9ad4360cced1a3f1a"],["archives/2021/11/index.html","eff30d0090529e136e3ffe3c2ff0e6d4"],["archives/2021/12/index.html","81268bba5554bb36843879985202705b"],["archives/2021/index.html","2cb299b06dbe40b8c0ebe54bd5710a2a"],["archives/2021/page/2/index.html","cf2e02f51c87cfaf832ffda2bda8be49"],["archives/2022/01/index.html","1be9c757260e6df937158892af42985e"],["archives/2022/index.html","d44d9b1459cca35d5f0066550f4def4a"],["archives/2023/05/index.html","591e4b546b671d609917bd26cf9bdd46"],["archives/2023/index.html","5892ce0dfa2e6d714778669168112771"],["archives/index.html","65a9c09b95f2ec0b89c1e826eb13b5ea"],["archives/page/2/index.html","ff2d51617de5c5ccb2024d0b33fd8d77"],["archives/page/3/index.html","8c3f7a0b212b81cf31e3482bdc162656"],["archives/page/4/index.html","ef4972fe3abadd00c42faf0deec9456d"],["archives/page/5/index.html","7898460d0867c6c70ddb9b90a99a308b"],["blogimage/head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["categories/index.html","55ed30ee9d683f2fb00bcff4f2a9b59f"],["categories/tool/index.html","45caa29761f9fa8b2fb90f374559986e"],["categories/操作系统/eBPF/index.html","4933c361abbfcb5cbaa844364820ad50"],["categories/操作系统/index.html","08e5135a871327d94c33503f9070b3ef"],["categories/课程笔记/index.html","3f429311174770b8795dda56658a09cc"],["categories/课程笔记/page/2/index.html","4c7205fd859e79de4aadbfd0caabc120"],["categories/课程笔记/操作系统/index.html","124e3e3cab5cca85a5dee020fc9b62f5"],["categories/课程笔记/编译原理/index.html","f23e0a26aab5bcd766331c61621ddec1"],["categories/课程笔记/软件项目管理/index.html","0d7ae92546c15f10cef03f642623acf0"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","526e5d0b2b757668766b047bb53eb850"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","84c4a527dab24955ff596f8ebc5e7d93"],["head.jpg","2f83ee9058481e703ece6d3d49fcbfde"],["images/课程笔记/编译原理/FA2RE.png","9c80b625f2353a1175c07eb8d0150ba7"],["images/课程笔记/编译原理/LEX运行与应用过程.jpg","0fbe1449c3f64b3bb541d4a4faf827e8"],["images/课程笔记/编译原理/parsing_steps.png","2b68603d71b9043b74e70fd4bd258f74"],["images/课程笔记/编译原理/二级目录表.png","d670b97833cecf5de20415bea5145145"],["images/课程笔记/编译原理/总控算法 — 二级目录表.png","e2ce0a35ffb7254af8613f04f54fec1c"],["images/课程笔记/编译原理/最左素短语.png","8007b24ce4d203961915831ff03ca5d8"],["images/远方.png","52e3d65e28375343174816bc5f97090d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","45085e524111a0c308f2f1a9c07203f3"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8ce608e6141e7ab623c25901417e4e4d"],["page/3/index.html","ba7347228c80db697d4d3574dd3958d8"],["page/4/index.html","c27b2e4857dee01efea60840b9632001"],["page/5/index.html","212b586902040f34cf5587fc8e1e4324"],["slides/index.html","eda244cb3a40c44d8f7e2cf698fcf69e"],["tags/Algorithm/index.html","afcfd624c0473926825af63fc062c502"],["tags/Bin/index.html","ef4d27cb00397ef296299e27fa8fb550"],["tags/Crypto/index.html","99c389c64539b080a63a8183d745244b"],["tags/Golang/index.html","4644c541aac6bbce1c898e3d07b7d8c7"],["tags/Prometheus/index.html","32cd8c73620060815391b753561dbf94"],["tags/Python/index.html","0d5558aa7e529286db4fbeffd18062e7"],["tags/Spider/index.html","1371ef6df6e89f269b02d416d58c128d"],["tags/Unity/index.html","66b4fe137bd101835c4467aab0d13c72"],["tags/Vue/index.html","d4ed589d8800bb6cc03ad12499fe4854"],["tags/index.html","08180c4b376e621aba25f79706315c7c"],["tags/math/index.html","7c944a7a5e6533d52626218c1f6a3daf"],["tags/tool/index.html","9c0db5582470bbd95389e6d007ce14f7"],["tags/web/index.html","90b005de7f687e451ed3c0035c1445cc"],["tags/前端/index.html","d00e47a469b7c4a71486b4b57b791937"],["tags/后端/index.html","e08f39c9f5a6177f6a9921798505064d"],["tags/操作系统/index.html","472ee6e7d573207c9bc99746386d36e6"],["tags/编译原理/index.html","66bf1322c5ef7c275e978631a8da574d"],["tags/软件项目管理/index.html","04401ebf7831b8c15519e585df64296c"]];
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







