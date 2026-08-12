import HeroBackdrop from "@/components/HeroBackdrop";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop | Yell Yeah Pickleball",
};

export default function ShopPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b-2 border-ink bg-paper px-5 py-12 sm:px-8 sm:py-16">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="shout font-display text-5xl sm:text-6xl">Shop</h1>
          <p className="mt-2 max-w-xl text-ink/70">
            Performance apparel and gear, made loud. Each product ships straight from Printful to
            your door.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
