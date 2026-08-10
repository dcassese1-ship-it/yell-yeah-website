import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { getAllProducts } from "@/lib/shopify";

const FILTERS = [
  { label: "All", tag: undefined },
  { label: "Tees", tag: "tee" },
  { label: "Headwear", tag: "headwear" },
];

export const metadata = {
  title: "Shop | Yell Yeah Pickleball",
};

export default async function ShopPage(props: PageProps<"/shop">) {
  const { tag } = await props.searchParams;
  const activeTag = typeof tag === "string" ? tag : undefined;

  const { products, live } = await getAllProducts();
  const filtered = activeTag ? products.filter((p) => p.tags.includes(activeTag)) : products;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <h1 className="shout font-display text-5xl sm:text-6xl">Shop</h1>
      <p className="mt-2 max-w-xl text-ink/70">
        Performance apparel and gear, made loud. New print-on-demand designs drop straight to
        your door.
      </p>

      {!live && (
        <p className="mt-4 inline-block border-2 border-ink bg-yell px-3 py-1 text-xs font-semibold">
          Showing sample catalog — connect Shopify to show live inventory.
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {FILTERS.map((f) => {
          const isActive = activeTag === f.tag || (!activeTag && !f.tag);
          const href = f.tag ? `/shop?tag=${f.tag}` : "/shop";
          return (
            <Link
              key={f.label}
              href={href}
              className={`btn-hard px-4 py-2 font-display shout text-lg ${
                isActive ? "bg-punch text-cream" : "bg-cream text-ink"
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
  );
}
