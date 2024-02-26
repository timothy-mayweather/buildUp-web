'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d4015145b10cb4610477b14f19b3819d",
"index.html": "75e4d3a4153e87a8b279ae642c52a8e7",
"/": "75e4d3a4153e87a8b279ae642c52a8e7",
"loader.css": "916faa0a605e5423a657ff5af75230c4",
"main.dart.js": "8621431e769bba02bb699023d5169431",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"alert.mp3": "bc8f07e66789f448fa8d576a54f0c98d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "39d5d7e7f629f5aeda7e5569b2482f8a",
"assets/AssetManifest.json": "8f4b1a62aad6de3ba0e0312e0fe597c7",
"assets/NOTICES": "bb31f5ba4b3344481850aa3db54c1ace",
"assets/FontManifest.json": "f628bd457ac108df93fa80e1d01c3015",
"assets/AssetManifest.bin.json": "ad5b21e0af16ede43cdb5401e748c62e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7defb7082f47b9b6e6d2dcbb4fb37ec0",
"assets/fonts/MaterialIcons-Regular.otf": "5fc4883ed60e0aabdc934620b41b4a29",
"assets/assets/images/login.png": "5fd3837b57c3372593c2258e23eea9a6",
"assets/assets/images/otp.svg": "18106da0a96a5e7367e1ea6a799d3cf4",
"assets/assets/images/wallpaper.jpg": "8b3bad0451b58c58af4667f5c3e02a66",
"assets/assets/images/Vector.png": "d14d9e9b136fba46531b5e008f47e656",
"assets/assets/images/black.jpg": "c2a3dae5f220470ecc0716bf3e15a7a1",
"assets/assets/images/email.svg": "66a2ba3ea4589a080b8f9d678c9e4b3b",
"assets/assets/images/nodata.png": "b2d0b8ceed4b165aee218730a3c005bc",
"assets/assets/images/apple.png": "a301472bce777ffabb686045ef5766ac",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/signup.png": "3e2cd3771d7afe77d2cb8dc0552c2ddf",
"assets/assets/images/man.avif": "12a01251576441dfa590c6e57537b390",
"assets/assets/images/appl.png": "60268d3f1f939ff189084faa35cf674d",
"assets/assets/images/buildup.png": "8743f899043a00577580c3fdd36e73f0",
"assets/assets/images/apple.webp": "f9d9d3079e36d4e3501cb7393aace842",
"assets/assets/illustrations/contractor.png": "601e9966c01c7ec8f703d2be495fbaaf",
"assets/assets/illustrations/cont.png": "cc26bfbe318c91d7c253d9414693fa00",
"assets/assets/illustrations/contractors.svg": "abfc68a3d030c1407383e51a657a662c",
"assets/assets/illustrations/signUp.svg": "8208cc8e2237e5598c28d3eb26ac02b1",
"assets/assets/messages.json": "12d5bf02ab4c215108435b03cf81425c",
"assets/assets/svgs/supplier_deals.svg": "93b882b4656364b3d3f838267bf55333",
"assets/assets/svgs/favs.svg": "7dcb4b0e710c2b97ded8c6f34a0318c2",
"assets/assets/svgs/page_not_found.svg": "aa81fb56de537d58ed0e2f2edd6797e0",
"assets/assets/svgs/dollar.svg": "e703f77935426c154db9e095a64df94c",
"assets/assets/svgs/person.svg": "9581c0123bed1a2b4d241884cc15d6b9",
"assets/assets/svgs/alert.svg": "35dc4b0186eec22f216bac423fc3f9a5",
"assets/assets/svgs/logout.svg": "cbdd91479e8e2d1f7045431df93166f5",
"assets/assets/svgs/overview.svg": "4a8fcba7d895a8cca0609f7432053026",
"assets/assets/svgs/shortlisted.svg": "4c33333aed6899fd9d6a81b89d2b3d7b",
"assets/assets/svgs/shedule_meeting.svg": "f6e5d1256f47b1f2d2dd1f48931e171b",
"assets/assets/svgs/stock.svg": "58142b70e259ddcc36278c668a0e23e6",
"assets/assets/svgs/carbon.svg": "89ed943fec1f5ae77770a6e4f7e01c3f",
"assets/assets/svgs/case.svg": "90b4a8b4f19cc3db68065dfca27c3cb7",
"assets/assets/svgs/cloud_upload.svg": "9bb8fad508b44a9eacfc9e39d30cdfb4",
"assets/assets/svgs/settings.svg": "04b627f31cca73ff96e72b7ca8594cfb",
"assets/assets/svgs/download.svg": "2dd2f50d01a207534cddd15f0c984177",
"assets/assets/svgs/wallet.svg": "d712e5370f8385c5911c32dc4ab6e8d8",
"assets/assets/svgs/file_doc.svg": "87e5c8387fa6fe458d11370d39684626",
"assets/assets/svgs/ffavs.svg": "5a754913f82a9a12de76161d69a2ff51",
"assets/assets/svgs/notification.svg": "251307406375e8bf8c3b5d52db42f543",
"assets/assets/svgs/meetings.svg": "283f6baf0f3579e0c97caa3bb4cb4c3c",
"assets/assets/svgs/view_doc.svg": "7f9c9f9e9573bd188d5dd558ff1949bf",
"assets/assets/svgs/applications.svg": "c171aa46cc8275fbb21b596d81e4da80",
"assets/assets/svgs/jobs.svg": "8420e2b24b1242aa0a1f80f8a5169c5c",
"assets/assets/svgs/location.svg": "1948d6bded5c92fac704a3fb2cf885f8",
"assets/assets/svgs/profile.svg": "8a42aa82ab7c7d05adf2e4a4a158c304",
"assets/assets/svgs/file_o.svg": "8904ca1f1c036a54334688dadec0d8c1",
"assets/assets/svgs/net.svg": "7c26e50cd336a252d07061f5284364e1",
"assets/assets/svgs/add_cricle.svg": "2cf9151a4cc29dce18d2063b7c8f9544",
"assets/assets/svgs/portifolio.svg": "33e7bd18a8ed5bc18f3e965d3705165f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/Vector.svg": "9415384b70f08dc9740cd14d14df1368",
"assets/assets/icons/apply.svg": "b85e2df711a0cf841ae53e96b67350c9",
"assets/assets/icons/stock.svg": "58142b70e259ddcc36278c668a0e23e6",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/transactions.svg": "034e1288d4faaf273984a12f4b49756c",
"assets/assets/icons/brief_case.svg": "4d4c9a8ac4be5ce8ad1087e2b3615f1b",
"assets/assets/icons/message.svg": "8a00fd6c23fbdcebde84f28a80b414c2",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_logout.svg": "18af2c458629a34636fc2348c7c92dd7",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/ring.svg": "e2611f65d9ceadbb159b9b6f19b8845b",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/fonts/Signatra.ttf": "7b67035b3b8dab514ecf09763597a947",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
