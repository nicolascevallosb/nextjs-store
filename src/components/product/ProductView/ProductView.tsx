import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";
import styles from './ProductView.module.sass'

interface ProductViewProps {
    product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {

    return (
        <main className={styles.product_view}>
            <section className={styles.product_view_images}>
                <Image
                    loading="eager"
                    src={product.image}
                    width={500}
                    height={500}
                    quality={80}
                    alt={product.title}
                />
            </section>
            <section className={styles.product_view_info}>
                <h1 className={styles.product_view_info_title}>{product.title}</h1>
                <p className={styles.product_view_info_category}>{product.tags}</p>
                <SanitizeHTML className={styles.product_view_info_description} tag="p">{product.description}</SanitizeHTML>
                <span className={styles.product_view_info_price}>
                    $ {product.price}
                </span>
                <ProductViewItemsOrder maxQuantity={product.quantity} />
            </section>
        </main>
    )
};