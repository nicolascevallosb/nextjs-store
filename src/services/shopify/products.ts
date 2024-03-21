import { ShopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async (id?: string): Promise<ProductType[]> => {
    try {
        const apiUrl = id ? `${ShopifyUrls.products.all}?ids=${id}` : ShopifyUrls.products.all;
        const response = await fetch(apiUrl, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        });
        const { products } = await response.json();
        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                gql_id: product.variants[0].admin_graphql_api_id,
                title: product.title,
                description: product.body_html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quantity,
                handle: product.handle,
                tags: product.tags,
            }
        })
        return transformedProducts;

    } catch (error) {
        console.log(error);
    }
}

export const getMainProducts = async () => {
    const response = await fetch(ShopifyUrls.products.mainProducts, {
        headers: new Headers({
            'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        }),
        cache: 'no-cache'
    });

    const { products } = await response.json();
    return products;
}