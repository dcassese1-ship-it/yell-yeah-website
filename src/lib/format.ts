import { Money } from "./types";

export function formatMoney(money: Money) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode || "USD",
    minimumFractionDigits: 2,
  }).format(Number(money.amount));
}

const TILE_PALETTE = ["bg-yell", "bg-punch", "bg-court", "bg-navy"];

export function tileColorForHandle(handle: string) {
  let hash = 0;
  for (let i = 0; i < handle.length; i++) {
    hash = (hash * 31 + handle.charCodeAt(i)) >>> 0;
  }
  return TILE_PALETTE[hash % TILE_PALETTE.length];
}
