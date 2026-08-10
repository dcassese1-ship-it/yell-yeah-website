# Yell Yeah Pickleball — Website Rebuild

A from-scratch Next.js rebuild of the Yell Yeah Pickleball site (previously Wix + Shopify),
styled around the brand's live catalog and voice ("Game Loud. Play Hard.", tie-dye paddle
graphics, bold performance apparel). Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## What's here

- `src/app/` — pages: home, `/shop`, `/shop/[handle]` (product detail), `/about`, `/contact`
- `src/lib/shopify.ts` — Shopify Storefront API client (GraphQL). Falls back automatically
  to `src/lib/placeholder-products.ts` (mirrors the real live catalog) if no credentials are set,
  so the site always renders correctly.
- `src/components/` — Header, Footer, MarqueeBanner, ProductCard, ProductGrid

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Connecting live Shopify data

1. Copy `.env.local.example` to `.env.local`.
2. In Shopify Admin: **Settings → Apps and sales channels → Develop apps** → create an app
   (or use an existing one) → **Configuration** → enable Storefront API scopes
   (`unauthenticated_read_product_listings`, `unauthenticated_read_product_inventory`) →
   **Install app** → **API credentials** → copy the **Storefront API access token**.
3. Fill in `SHOPIFY_STORE_DOMAIN` (e.g. `your-store.myshopify.com`) and
   `SHOPIFY_STOREFRONT_ACCESS_TOKEN` in `.env.local`.
4. Restart the dev server. `/shop` will now pull live products, and the "Buy Now" button
   on product pages will link to the live Shopify checkout for that product.

Until this is set, the site shows a small "Showing sample catalog" badge on `/shop`.

## Adding Printful print-on-demand tees

Since Printful integrates directly with Shopify (Wix isn't part of the checkout flow), the
path is:

1. In Shopify Admin: **Apps → Shopify App Store** → search **Printful: Print on Demand** →
   install → connect/create your Printful account and link it to the Yell Yeah store.
2. In Printful's dashboard, design your tee (style, colors, sizes, artwork placement,
   mockups) and push it to Shopify — Printful creates the product + variants automatically.
3. Set your Shopify retail price on top of Printful's base cost.
4. Double-check Printful's shipping rate table against Shopify's shipping settings so
   customers aren't shown conflicting shipping costs at checkout.
5. Once synced, the new product shows up automatically here as soon as Shopify credentials
   are connected (step above) — no code changes needed. It'll appear in `/shop` and get its
   own `/shop/[handle]` page.
6. Place one real test order end-to-end and confirm it lands in Printful's fulfillment queue
   and tracking syncs back to Shopify.

## Deploying

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import Git Repository**, select this repo. Vercel
   auto-detects Next.js.
3. Add `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` as Environment
   Variables in the Vercel project settings (same values as `.env.local`).
4. Deploy. Point your domain at the Vercel deployment once you're happy with it.

## Design notes

- Colors: navy (`--color-navy`), punch pink (`--color-punch`), yell yellow (`--color-yell`),
  court green (`--color-court`) on a warm paper background — pulled from the live site's
  dark-blue mark plus the tie-dye/energetic product line.
- Type: Bebas Neue for shout-y display headlines, Inter for body copy.
- "Hard shadow" sticker-style buttons/cards (`.btn-hard`, `.card-hard`) for a bold,
  loud-and-playful feel consistent with the brand voice ("Bold Gear for a Loud Game").
- Product tiles show real Shopify images when connected; until then they show a colored
  initials tile so the grid still looks intentional rather than broken.
