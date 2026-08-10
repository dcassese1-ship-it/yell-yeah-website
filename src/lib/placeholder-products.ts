import { Product } from "./types";

/**
 * Placeholder catalog used until SHOPIFY_STORE_DOMAIN and
 * SHOPIFY_STOREFRONT_ACCESS_TOKEN are set in the environment (see .env.local.example).
 * Mirrors the current live Yell Yeah Shopify catalog so the site looks right
 * out of the box, and gives Printful tees a slot once they're synced.
 */
export const placeholderProducts: Product[] = [
  {
    id: "placeholder-1",
    handle: "black-cool-dry-performance-tee",
    title: "Black Cool Dry Performance Tee",
    description:
      "Moisture-wicking performance tee with the Yell Yeah front logo. Built to keep up with your loudest rallies.",
    tags: ["apparel", "tee"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "35.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-1-v1",
        title: "S / Black",
        availableForSale: true,
        price: { amount: "35.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Black" },
        ],
      },
    ],
  },
  {
    id: "placeholder-2",
    handle: "tie-dye-lettering-performance-tee",
    title: "Tie Dye Lettering Performance Tee",
    description:
      "Light blue tie-dye tee with bold lettering across the chest. Loud on the court, cool in the heat.",
    tags: ["apparel", "tee", "tie-dye"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "35.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-2-v1",
        title: "S / Light Blue",
        availableForSale: true,
        price: { amount: "35.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Light Blue" },
        ],
      },
    ],
  },
  {
    id: "placeholder-3",
    handle: "tie-dye-paddles-performance-shirt",
    title: "Tie Dye Paddles Performance Shirt",
    description:
      "White performance shirt with tie-dye paddle graphics on the back. Made for players who bring the energy.",
    tags: ["apparel", "tee", "tie-dye"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "35.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-3-v1",
        title: "S / White",
        availableForSale: true,
        price: { amount: "35.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "White" },
        ],
      },
    ],
  },
  {
    id: "placeholder-4",
    handle: "low-profile-baseball-cap",
    title: "Low Profile Yell Yeah Baseball Cap",
    description: "Tie-dye paddle graphic cap. Low profile fit, high volume energy.",
    tags: ["headwear", "cap"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "22.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-4-v1",
        title: "One Size",
        availableForSale: true,
        price: { amount: "22.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "One Size" }],
      },
    ],
  },
  {
    id: "placeholder-5",
    handle: "yell-yeah-bucket-hat",
    title: "Yell Yeah Bucket Hat",
    description: "Casual bucket hat with brand identity. Shade for game day, style for every day.",
    tags: ["headwear", "hat"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "15.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-5-v1",
        title: "One Size",
        availableForSale: true,
        price: { amount: "15.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "One Size" }],
      },
    ],
  },
  {
    id: "placeholder-6",
    handle: "yell-yeah-print-on-demand-tee",
    title: "Custom Print-on-Demand Tee (Coming Soon)",
    description:
      "New Printful-fulfilled design, printed and shipped on demand the moment you order. Drops soon.",
    tags: ["apparel", "tee", "print-on-demand", "coming-soon"],
    featuredImage: null,
    images: [],
    priceRange: { minVariantPrice: { amount: "32.00", currencyCode: "USD" } },
    variants: [
      {
        id: "placeholder-6-v1",
        title: "S / Black",
        availableForSale: false,
        price: { amount: "32.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Black" },
        ],
      },
    ],
  },
];
