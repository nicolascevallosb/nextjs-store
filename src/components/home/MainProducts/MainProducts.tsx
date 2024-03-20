import React from "react";
import Image from "next/image";
import styles from "./MainProducts.module.sass";

const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`, {
            headers: new Headers ({
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            })
        });
        const {products} = await response.json();
        return(products);
        
    } catch (error) {
        console.log(error);
                
    }
}

export const MainProducts = async () => {
    const products = await getProducts();
    
    return(
        <section className={styles.main_products}>
            <h3>Check these new products!</h3>
            <div className={styles.main_products_grid}>
                {products?.map((product: any) => {
                    const imgSrc = product.images[0].src;
                    return(
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imgSrc} fill alt={product.title} loading="eager"/>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}