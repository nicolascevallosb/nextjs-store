import { env } from "app/config/env"

export const ShopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`
    }
}