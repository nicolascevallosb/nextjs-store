import { ShopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async () => {
    try {
        const response = await fetch(ShopifyUrls.products.all, {
            headers: new Headers ({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        });
        const {products} = await response.json();
        return(products);
        
    } catch (error) {
        console.log(error);
                
    }
}