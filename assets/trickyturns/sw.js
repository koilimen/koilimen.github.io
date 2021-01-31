importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "bae44cc939d49d6a75d91e1aa1bca831"
  },
  {
    "url": "assets/fonts/Determination/determination-bm.png",
    "revision": "6b9f074e12aadf6b0747b7af0387bd91"
  },
  {
    "url": "assets/fonts/font.png",
    "revision": "178638031f6544a68e00dfaa07b3c06e"
  },
  {
    "url": "assets/fonts/ubuntu-font/0.png",
    "revision": "8655a01e92fcf2c6dc7ee3e02e9e8207"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "a06e2a75c7ba92fe473c1fadee94db02"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "911e22f8cc2e2c7e5f1bb66e4d541bd6"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "e3520792cead7b2f952acd0bf9dae119"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "b2bbcfcb247b39e7bf4698fd3553d0ec"
  },
  {
    "url": "assets/icons/icon-256x256.png",
    "revision": "1a40fbdef38a6a276e78db5b5b9f609d"
  },
  {
    "url": "assets/icons/icon-32x32.png",
    "revision": "408f76a1f45d1f1c3950ae82d2fe8c42"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "da428d59a678cf08dea75ef82bd13604"
  },
  {
    "url": "assets/img/play-button.png",
    "revision": "01d5186a4bac00dfdd6af1adc392315c"
  },
  {
    "url": "assets/img/reload-white.png",
    "revision": "3d2ceee0c492ee4cadde118149516605"
  },
  {
    "url": "assets/img/reload.png",
    "revision": "06d29271d2a00192c026b039b65cde1e"
  },
  {
    "url": "assets/sounds/crash.mp3",
    "revision": "4f58308e9635cb07cc95c67c5976ed92"
  },
  {
    "url": "assets/sounds/score.mp3",
    "revision": "a6c820f4dc13c77db2dba359d0593b00"
  },
  {
    "url": "assets/sounds/switch.mp3",
    "revision": "8b5761bc7cb324797a7dfcf7dea09be6"
  },
  {
    "url": "assets/sprites/spritesheet.json",
    "revision": "af95c70d97a623787d20b54476e920e7"
  },
  {
    "url": "assets/sprites/spritesheet.png",
    "revision": "a32a3b3e00cbbcf9379889cdfaa82b0c"
  },
  {
    "url": "index.html",
    "revision": "098926a62d0a4742f957f7a30083964d"
  },
  {
    "url": "main.js",
    "revision": "010139c38a1555e36bfe9bc58ff2c519"
  },
  {
    "url": "manifest.json",
    "revision": "7e329408283f19de67a7dbba9611f2eb"
  }
]);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}