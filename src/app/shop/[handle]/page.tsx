import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByHandle } from "@/lib/shopify";
import { formatMoney, tileColorForHandle } from "@/lib/format";

export default async function ProductPage(props: PageProps<"/shop/[handle]">) {
  const { handle } = await props.params;
  const { product, live } = await getProductByHandle(handle);

  if (!product) notFound();

  const isComingSoon = product.tags.includes("coming-soon");
  const tileColor = tileColorForHandle(product.handle);
  const textOnTile = tileColor === "bg-yell" ? "text-ink" : "text-cream";

  const sizeOptions = Array.from(
    new Set(
      product.variants.flatMap((v) => v.selectedOptions.filter((o) => o.name === "Size").map((o) => o.value))
    )
  );

  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const externalCheckoutUrl =
    live && shopifyDomain ? `https://${shopifyDomain}/products/${product.handle}` : null;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <Link href="/shop" className="font-display shout text-sm text-ink/60 hover:text-punch">
        ← Back to Shop
      </Link>

      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        <div className={`relative aspect-square w-full overflow-hidden border-2 border-ink ${tileColor}`}>
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className={`flex h-full w-full items-center justify-center ${textOnTile}`}>
              <span className="font-display shout px-6 text-center text-5xl leading-none opacity-90">
                {product.title
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>

        <div>
          {isComingSoon && (
            <span className="inline-block border-2 border-ink bg-yell px-3 py-1 font-display shout text-sm">
              Coming Soon
            </span>
          )}
          <h1 className="shout font-display mt-3 text-4xl sm:text-5xl">{product.title}</h1>
          <p className="mt-3 font-display shout text-3xl text-punch">
            {formatMoney(product.priceRange.minVariantPrice)}
          </p>
          <p className="mt-5 max-w-md text-ink/80">{product.description}</p>

          {sizeOptions.length > 0 && (
            <div className="mt-6">
              <p className="font-display shout text-sm text-ink/60">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <span
                    key={size}
                    className="btn-hard bg-cream px-4 py-2 font-display shout text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            {isComingSoon ? (
              <span className="btn-hard inline-block cursor-not-allowed bg-cream px-7 py-3 font-display shout text-xl text-ink/40">
                Not Yet Available
              </span>
            ) : externalCheckoutUrl ? (
              <a
                href={externalCheckoutUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-hard inline-block bg-punch px-7 py-3 font-display shout text-xl text-cream"
              >
                Buy Now
              </a>
            ) : (
              <div>
                <span className="btn-hard inline-block cursor-not-allowed bg-cream px-7 py-3 font-display shout text-xl text-ink/40">
                  Add to Cart
                </span>
                <p className="mt-2 text-xs text-ink/50">
                  Connect Shopify (see .env.local.example) to enable live checkout.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
