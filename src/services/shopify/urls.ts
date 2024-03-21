import { env } from "app/config/env"
const MAIN_PRODUCTS_ID = '287771492404';

export const ShopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
        'mainProducts': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${MAIN_PRODUCTS_ID}/products.json`
    },
    collections: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json`,
        'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`
    }
}