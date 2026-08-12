import Image from "next/image";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <Image
          src="/images/hero-banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/35" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-display shout mb-3 inline-block border-2 border-ink bg-volt px-3 py-1 text-sm text-ink">
            New Drop Loading
          </p>
          <h1 className="shout font-display text-6xl text-cream sm:text-8xl">
            Game Loud.
            <br />
            <span className="text-teal">Play</span>{" "}
            <span className="text-outline">Hard.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cream/90">
            Where passion meets paddle. Bold gear for players who bring the energy to every
            rally — on the court and off.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="btn-hard bg-teal px-7 py-3 font-display shout text-xl text-cream">
              Shop the Drop
            </Link>
            <Link href="/about" className="btn-hard bg-cream px-7 py-3 font-display shout text-xl text-ink">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <MarqueeBanner tone="dark" />

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="shout font-display text-4xl sm:text-5xl">Fan Favorites</h2>
          <Link href="/shop" className="font-display shout text-lg text-teal hover:underline">
            View All →
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <MarqueeBanner tone="light" items={["MADE FOR LOUD PLAYERS"]} />

      {/* Brand story teaser */}
      <section className="border-t-2 border-ink bg-ocean py-16 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 sm:px-8">
          <div>
            <h2 className="shout font-display text-4xl text-volt sm:text-5xl">
              Bold Gear for a Loud Game
            </h2>
            <p className="mt-4 text-cream/80">
              Yell Yeah started on the court, not in a boardroom. Every tee, cap, and hat is
              built for players who leave it all out there and aren&apos;t afraid to celebrate
              like it. Performance fabric, unapologetic graphics, and a brand that plays as hard
              as you do.
            </p>
            <Link
              href="/about"
              className="btn-hard mt-6 inline-block bg-volt px-6 py-3 font-display shout text-lg text-ink"
            >
              Meet The Brand
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="card-hard bg-cream p-6 text-ink">
              <p className="font-display shout text-2xl text-teal">Follow the Energy</p>
              <p className="mt-2 text-sm text-ink/70">
                Catch every smash, dink, and celebration on TikTok.
              </p>
              <a
                href="https://www.tiktok.com/@yellyeahpickleball"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-display shout text-lg text-ocean hover:text-teal"
              >
                @yellyeahpickleball →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
