export type ProductImage = {
  label: string;
  image: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  printfulUrl: string;
};
