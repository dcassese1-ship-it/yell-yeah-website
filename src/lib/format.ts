export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

const TILE_PALETTE = ["bg-volt", "bg-teal", "bg-mint", "bg-ocean"];

export function tileColorForHandle(handle: string) {
  let hash = 0;
  for (let i = 0; i < handle.length; i++) {
    hash = (hash * 31 + handle.charCodeAt(i)) >>> 0;
  }
  return TILE_PALETTE[hash % TILE_PALETTE.length];
}
