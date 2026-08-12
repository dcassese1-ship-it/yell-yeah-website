# Product images

Each product has a list of labeled images (front/back for tees, color options for the hat),
referenced from `src/lib/products.ts` as a `product.images` array:

- `tee-yellow-front.jpg` / `tee-yellow-back.jpg`
- `tee-white-front.jpg` / `tee-white-back.jpg`
- `tee-black-front.jpg` / `tee-black-back.jpg`
- `hat-navy.jpg` / `hat-oyster.jpg`

Square images on a clean background work best (825×825 is what the current photos use). Add a
new product by dropping its images here and adding a matching entry (with a `label` per image)
in `src/lib/products.ts`.
