import { Product } from "./types";

/**
 * Placeholder catalog. Fill in `image` (path under /public/products) and
 * `printfulUrl` (the product's direct link on your Printful store) for each
 * item as they go live. Until `printfulUrl` is set, the product card shows
 * a "Link Coming Soon" state instead of linking out.
 */
export const products: Product[] = [
  {
    id: "shirt-1",
    handle: "shirt-1",
    title: "Shirt One",
    description: "Placeholder description for Shirt One.",
    category: "shirt",
    price: 35,
    image: "/products/shirt-1.jpg",
    printfulUrl: "",
  },
  {
    id: "shirt-2",
    handle: "shirt-2",
    title: "Shirt Two",
    description: "Placeholder description for Shirt Two.",
    category: "shirt",
    price: 35,
    image: "/products/shirt-2.jpg",
    printfulUrl: "",
  },
  {
    id: "shirt-3",
    handle: "shirt-3",
    title: "Shirt Three",
    description: "Placeholder description for Shirt Three.",
    category: "shirt",
    price: 35,
    image: "/products/shirt-3.jpg",
    printfulUrl: "",
  },
  {
    id: "shirt-4",
    handle: "shirt-4",
    title: "Shirt Four",
    description: "Placeholder description for Shirt Four.",
    category: "shirt",
    price: 35,
    image: "/products/shirt-4.jpg",
    printfulUrl: "",
  },
  {
    id: "hat-1",
    handle: "hat-1",
    title: "Hat One",
    description: "Placeholder description for Hat One.",
    category: "hat",
    price: 22,
    image: "/products/hat-1.jpg",
    printfulUrl: "",
  },
  {
    id: "hat-2",
    handle: "hat-2",
    title: "Hat Two",
    description: "Placeholder description for Hat Two.",
    category: "hat",
    price: 22,
    image: "/products/hat-2.jpg",
    printfulUrl: "",
  },
];
