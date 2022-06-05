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
    };
    result.push(item);
  }
  fs.writeFileSync(
    path.resolve("..", "src", "assets", `${FILE_NAME}.json`),
    JSON.stringify(result)
  );
};
seedPhones();
