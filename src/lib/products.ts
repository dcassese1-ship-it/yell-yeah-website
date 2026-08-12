import { Product } from "./types";

export const products: Product[] = [
  {
    id: "yellow-tee",
    handle: "yellow-yell-yeah-tee",
    title: "Yellow Yell Yeah Tee",
    description:
      "Performance crew neck tee in yell yellow with the tie-dye Yell Yeah lockup printed across the back.",
    price: 38,
    images: [
      { label: "Front", image: "/images/products/tee-yellow-front.jpg" },
      { label: "Back", image: "/images/products/tee-yellow-back.jpg" },
    ],
    printfulUrl: "https://yellyeah.printful.me/product/yellow-yell-yeah-unisex-performance-crew-neck-t-shirt",
  },
  {
    id: "white-tee",
    handle: "white-yell-yeah-tee",
    title: "White Yell Yeah Tee",
    description:
      "Performance crew neck tee in white with the tie-dye Yell Yeah lockup printed across the back.",
    price: 38,
    images: [
      { label: "Front", image: "/images/products/tee-white-front.jpg" },
      { label: "Back", image: "/images/products/tee-white-back.jpg" },
    ],
    printfulUrl: "https://yellyeah.printful.me/product/unisex-performance-crew-neck-t-shirt-6a7b8142786c2",
  },
  {
    id: "black-tee",
    handle: "black-yell-yeah-tee",
    title: "Black Yell Yeah Tee",
    description:
      "Performance crew neck tee in black with the tie-dye Yell Yeah lockup printed across the back.",
    price: 38,
    images: [
      { label: "Front", image: "/images/products/tee-black-front.jpg" },
      { label: "Back", image: "/images/products/tee-black-back.jpg" },
    ],
    printfulUrl: "https://yellyeah.printful.me/product/unisex-performance-crew-neck-t-shirt",
  },
  {
    id: "organic-hat",
    handle: "yell-yeah-organic-hat",
    title: "Yell Yeah Organic Hat",
    description: "Organic cotton dad hat with the embroidered Yell Yeah tie-dye logo, in navy or oyster.",
    price: 30,
    images: [
      { label: "Navy", image: "/images/products/hat-navy.jpg" },
      { label: "Oyster", image: "/images/products/hat-oyster.jpg" },
    ],
    printfulUrl: "https://yellyeah.printful.me/product/yell-yeah-organic-hat",
  },
];
