import { ShopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getCollections = async () => {
    try {
        const response = await fetch(ShopifyUrls.collections.all, {
            headers: new Headers ({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        });
        const { smart_collections } = await response.json();
        const transformedCollections = smart_collections.map((collection: Collection) => {
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        })
        return transformedCollections;
        
    } catch (error) {
        console.log(error);
                
    }
}