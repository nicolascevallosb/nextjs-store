import { ProductCard } from "../ProductCard"
import styles from './ProductsWrapper.module.sass'

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
    return (
        <div className={styles.products_wrapper}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}