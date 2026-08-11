import Image from "next/image";
import { Product } from "@/lib/types";
import { formatMoney, tileColorForHandle } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const tileColor = tileColorForHandle(product.handle);
  const textOnTile = tileColor === "bg-yell" ? "text-ink" : "text-cream";
  const hasLink = Boolean(product.printfulUrl);

  const media = (
    <div className={`relative aspect-square w-full overflow-hidden border-b-2 border-ink ${tileColor}`}>
      {product.image ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center ${textOnTile}`}>
          <span className="font-display shout px-4 text-center text-3xl leading-none opacity-90">
            {product.title
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")}
          </span>
        </div>
      )}

      {!hasLink && (
        <span className="absolute left-2 top-2 border-2 border-ink bg-cream px-2 py-1 font-display shout text-xs">
          Link Coming Soon
        </span>
      )}
    </div>
  );

  const body = (
    <div className="p-4">
      <p className="font-display shout text-xl leading-tight">{product.title}</p>
      <p className="mt-1 font-display shout text-lg text-punch">{formatMoney(product.price)}</p>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={product.printfulUrl}
        target="_blank"
        rel="noreferrer"
        className="card-hard group block bg-cream"
      >
        {media}
        {body}
      </a>
    );
  }

  return (
    <div className="card-hard block cursor-not-allowed bg-cream opacity-90">
      {media}
      {body}
    </div>
  );
}
