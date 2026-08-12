import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import { products } from "@/lib/products";
import { formatMoney } from "@/lib/format";

export default async function ProductPage(props: PageProps<"/shop/[handle]">) {
  const { handle } = await props.params;
  const product = products.find((p) => p.handle === handle);

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <Link href="/shop" className="font-display shout text-sm text-ink/60 hover:text-teal">
        ← Back to Shop
      </Link>

      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        <ProductGallery frontImage={product.frontImage} backImage={product.backImage} title={product.title} />

        <div>
          <h1 className="shout font-display text-4xl sm:text-5xl">{product.title}</h1>
          <p className="mt-3 font-display shout text-3xl text-teal">{formatMoney(product.price)}</p>
          <p className="mt-5 max-w-md text-ink/80">{product.description}</p>

          <div className="mt-8">
            <a
              href={product.printfulUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-hard inline-block bg-teal px-7 py-3 font-display shout text-xl text-cream"
            >
              Buy Now
            </a>
            <p className="mt-2 text-xs text-ink/50">Checkout happens on our Printful store, in a new tab.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
