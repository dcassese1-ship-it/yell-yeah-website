# Yell Yeah Pickleball — Website

A Next.js site for Yell Yeah Pickleball, styled around the brand's voice ("Game Loud. Play
Hard.", tie-dye paddle graphics, bold performance apparel). Built with Next.js (App Router),
TypeScript, and Tailwind CSS. Products are print-on-demand via Printful — this site displays
the catalog and each product's detail page links out to its Printful checkout page; it does
not process payments itself.

## What's here

- `src/app/` — pages: home (`/`), `/shop`, `/shop/[handle]` (product detail), `/about` (Story),
  `/contact`, `/privacy`
- `src/lib/products.ts` — static product catalog. Each entry has a `frontImage`, `backImage`,
  and `printfulUrl`.
- `src/components/` — Header, Footer, MarqueeBanner, HeroBackdrop, ProductCard, ProductGrid,
  ProductGallery

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Adding a product

1. Create the product in your Printful store and copy its direct product page URL
   (e.g. `https://yellyeah.printful.me/product/...`).
2. Drop the front/back photos in `public/images/products/` (see that folder's README for the
   naming convention).
3. Add a matching entry to `src/lib/products.ts` with `title`, `description`, `price`,
   `frontImage`, `backImage`, and `printfulUrl`.

The shop grid links each card to `/shop/[handle]`, which shows a front/back photo toggle and a
"Buy Now" button that opens the product's Printful page in a new tab.

## Deploying

This repo is already connected to a Vercel project. Pushing to `main` on GitHub triggers a
new deployment automatically (or run `npx vercel --prod` from this directory).

## Design notes

- Colors: ink (`--color-ink`), teal (`--color-teal`), ocean (`--color-ocean`),
  volt (`--color-volt`), mint (`--color-mint`) on a warm paper background.
- Type: Bebas Neue for shout-y display headlines, Inter for body copy.
- "Hard shadow" sticker-style buttons/cards (`.btn-hard`, `.card-hard`) for a bold,
  loud-and-playful feel consistent with the brand voice ("Bold Gear for a Loud Game").
