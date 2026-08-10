import { Product } from "./types";
import { placeholderProducts } from "./placeholder-products";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || "2025-01";

const isConfigured = Boolean(domain && storefrontToken);

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T | null> {
  if (!isConfigured) return null;

  try {
    const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontToken as string,
      },
      body: JSON.stringify({ query, variables }),
      // Revalidate product data periodically rather than on every request.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Shopify Storefront API error", res.status, await res.text());
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.error("Shopify Storefront API errors", json.errors);
      return null;
    }
    return json.data as T;
  } catch (err) {
    console.error("Shopify Storefront API request failed", err);
    return null;
  }
}

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    tags
    featuredImage {
      url
      altText
    }
    images(first: 6) {
      edges {
        node {
          url
          altText
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 25) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  featuredImage: { url: string; altText: string | null } | null;
  images: { edges: { node: { url: string; altText: string | null } }[] };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
        selectedOptions: { name: string; value: string }[];
      };
    }[];
  };
};

function normalizeProduct(node: ShopifyProductNode): Product {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    tags: node.tags,
    featuredImage: node.featuredImage,
    images: node.images.edges.map((e) => e.node),
    priceRange: node.priceRange,
    variants: node.variants.edges.map((e) => e.node),
  };
}

export async function getAllProducts(): Promise<{ products: Product[]; live: boolean }> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query Products {
      products(first: 50, sortKey: TITLE) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProductNode }[] } }>(query);

  if (!data) {
    return { products: placeholderProducts, live: false };
  }

  return { products: data.products.edges.map((e) => normalizeProduct(e.node)), live: true };
}

export async function getProductByHandle(handle: string): Promise<{ product: Product | null; live: boolean }> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        ...ProductFields
      }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: ShopifyProductNode | null }>(query, { handle });

  if (!data) {
    const product = placeholderProducts.find((p) => p.handle === handle) || null;
    return { product, live: false };
  }

  return { product: data.productByHandle ? normalizeProduct(data.productByHandle) : null, live: true };
}

export function isShopifyConfigured() {
  return isConfigured;
}
