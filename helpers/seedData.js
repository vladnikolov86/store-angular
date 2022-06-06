const path = require("path");
const fs = require("fs");

const MANUFACTURERS = ["Samsung", "Apple", "OnePlus", "Nokia", "BlackBerry"];
const MODELS = {
  Samsung: ["S8", "S7", "s9", "s10"],
  Apple: ["5s", "6s", "7", "X", "X11"],
  OnePlus: ["5t", "6t", "7t", "8t"],
  Nokia: ["3310", "2200", "Lumia"],
  BlackBerry: ["BlackberryModel", "AnotherBlackberry"],
};
const DESCRIPTION = {
  Samsung:
    "The Android cell phone is a cell phone running the Android OS. A typical Android cell phone is a smartphone with a touch screen interface, multiple connectivity options, Internet browsing capabilities, support for video playback and a camera",
  BlackBerry:
    "BlackBerry, any of a series of wireless handheld communication devices manufactured from 1999 to 2016 by the Canadian company Research in Motion (RIM; BlackBerry from 2013 on) that were among the first popular smartphones. The BlackBerry's roots go back to the RIM 850, a pager created by RIM in 1999.",
  Apple:
    "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.",
    OnePlus:
    "A China-based manufacturer of Android smartphones. Introduced in 2014, OnePlus models are unlocked Android smartphones with quad-core Snapdragon CPUs and up to 8GB RAM that initially ran the Cyanogen version of Android (Cyanogen was later replaced with the company's own Android-based OxygenOS)",
  Nokia:
    "Nokia Corporation is the world's largest manufacturer of mobile phones, serving customers in 130 countries. Nokia is divided into four business groups: Mobile Phones, Multimedia, Enterprise Solutions, and Networks. The Mobile Phones group markets wireless voice and data products in consumer and corporate markets.",
};

const ORIGIN = ["China", "Taiwan", "USA", "EU"];

const PHOTOS = {
  Samsung: [
    "https://images.samsung.com/is/image/samsung/p6pim/bg/2202/gallery/bg-galaxy-a53-5g-a536-sm-a536blbneue-531386714?$1300_1038_PNG$",
    "https://images-na.ssl-images-amazon.com/images/I/61Dy9hZJ4ML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  ],
  Apple: [
    "https://s13emagst.akamaized.net/products/40685/40684428/images/res_0527b4f237cdaab2544c0f8e58980ac9.jpg",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
  ],
  OnePlus: [
    "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/o/n/oneplus-9-5g.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/6/UZ/SM/XI/18726985/1-m00-25-d4-rb8bwmcruwyarg44aaynxfflaji376-840-840-500x500.png",
  ],
  Nokia: [
    "https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_SL1500_.jpg",
    "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/521635-Product-0-I-637570202491673303.jpg?v=1621392189",
  ],
  BlackBerry: [
    "https://m.media-amazon.com/images/I/81GwnUe7M3L._AC_SL1500_.jpg",
    "https://ae01.alicdn.com/kf/H921dc18e3f594d77a4893c1482684322o/Original-Blackberry-9700-WCDMA-3G-3-2MP-256MB-RAM-1500mAh-GPS-WIFI-Bluetooth-GPS-Unlocked-Used.jpg_Q90.jpg_.webp",
  ],
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const FILE_NAME = "products";
// id: number;
// price: number;
// name: string;
// rating: number;
// manufacturer: string;
// image?: string;
const seedPhones = () => {
  const result = [];
  for (let i = 0; i < 100; i++) {
    const manufacturer = MANUFACTURERS[getRandomInt(0, MANUFACTURERS.length)];
    const item = {
      id: i,
      price: getRandomInt(200, 1000),
      name: MODELS[manufacturer][getRandomInt(0, MODELS[manufacturer].length)],
      manufacturer,
      rating: getRandomInt(1, 6),
      image: PHOTOS[manufacturer][getRandomInt(0, PHOTOS[manufacturer].length)],
      description: DESCRIPTION[manufacturer],
      countryOfOrigin: ORIGIN[getRandomInt(1, ORIGIN.length)],
    };
    result.push(item);
  }
  fs.writeFileSync(
    path.resolve("..", "src", "assets", `${FILE_NAME}.json`),
    JSON.stringify(result)
  );
};
seedPhones();
