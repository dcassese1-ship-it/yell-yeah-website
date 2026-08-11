import Link from "next/link";
import HeroBackdrop from "@/components/HeroBackdrop";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";
import { ProductCategory } from "@/lib/types";

const FILTERS: { label: string; category?: ProductCategory }[] = [
  { label: "All" },
  { label: "Shirts", category: "shirt" },
  { label: "Hats", category: "hat" },
];

export const metadata = {
  title: "Shop | Yell Yeah Pickleball",
};

export default async function ShopPage(props: PageProps<"/shop">) {
  const { category } = await props.searchParams;
  const activeCategory = typeof category === "string" ? category : undefined;

  const filtered = activeCategory ? products.filter((p) => p.category === activeCategory) : products;

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
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const isActive = activeCategory === f.category || (!activeCategory && !f.category);
            const href = f.category ? `/shop?category=${f.category}` : "/shop";
            return (
              <Link
                key={f.label}
                href={href}
                className={`btn-hard px-4 py-2 font-display shout text-lg ${
                  isActive ? "bg-teal text-cream" : "bg-cream text-ink"
                }`}
              >
                {f.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}
