# Yell Yeah Pickleball — Website

A Next.js site for Yell Yeah Pickleball, styled around the brand's voice ("Game Loud. Play
Hard.", tie-dye paddle graphics, bold performance apparel). Built with Next.js (App Router),
TypeScript, and Tailwind CSS. Products are print-on-demand via Printful — this site displays
the catalog and links each product out to its Printful checkout page; it does not process
payments itself.

## What's here

- `src/app/` — pages: home (`/`), `/shop`, `/about` (Story), `/contact`, `/privacy`
- `src/lib/products.ts` — static product catalog (6 placeholder slots: 4 shirts, 2 hats). Each
  entry has an `image` path and a `printfulUrl`; fill both in as products go live.
- `src/components/` — Header, Footer, MarqueeBanner, ProductCard, ProductGrid

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Adding a product

1. Create the product in your Printful store and copy its direct product page URL
   (e.g. `https://yellyeah.printful.me/products/...`).
2. Drop the product photo in `public/products/` (see that folder for expected filenames).
3. In `src/lib/products.ts`, update the matching entry's `title`, `description`, `price`,
   `image`, and `printfulUrl`.

Until `printfulUrl` is filled in, that product's card shows a "Link Coming Soon" badge instead
of linking out. Until `image` points at a real file, the card shows a colored initials tile.

## Deploying

This repo is already connected to a Vercel project. Pushing to `main` on GitHub triggers a
new deployment automatically (or run `npx vercel --prod` from this directory).

## Design notes

- Colors: navy (`--color-navy`), punch pink (`--color-punch`), yell yellow (`--color-yell`),
  court green (`--color-court`) on a warm paper background.
- Type: Bebas Neue for shout-y display headlines, Inter for body copy.
- "Hard shadow" sticker-style buttons/cards (`.btn-hard`, `.card-hard`) for a bold,
  loud-and-playful feel consistent with the brand voice ("Bold Gear for a Loud Game").
