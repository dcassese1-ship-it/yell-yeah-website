import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display shout text-4xl">
              Yell<span className="text-yell">Yeah</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">
              Bold gear for a loud game. Pickleball apparel made for players who show up with
              energy.
            </p>
          </div>

          <div>
            <p className="font-display shout text-lg text-yell">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/shop" className="hover:text-yell">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=shirt" className="hover:text-yell">
                  Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hat" className="hover:text-yell">
                  Hats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display shout text-lg text-yell">Yell Yeah</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/about" className="hover:text-yell">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yell">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yell">
                  Privacy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@yellyeahpickleball"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yell"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/20 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Yell Yeah Pickleball. All rights reserved.</p>
          <p>Game loud. Play hard.</p>
        </div>
      </div>
    </footer>
  );
}
