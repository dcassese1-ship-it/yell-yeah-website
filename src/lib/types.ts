export type ProductCategory = "shirt" | "hat";

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  image: string | null;
  printfulUrl: string;
};
