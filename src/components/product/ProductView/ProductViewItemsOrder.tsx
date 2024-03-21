"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';
import styles from "./ProductViewItemsOrder.module.sass";


interface ProductViewItemsOrderProps {
    maxQuantity: number,
}

export const ProductViewItemsOrder = ({ maxQuantity }: ProductViewItemsOrderProps) => {
    const [counter, setCounter] = useState(1);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };

    const handleSubtract = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === 1) return;
        setCounter(counter - 1);
    }

    const handleAdd = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === maxQuantity) return;
        setCounter(counter + 1);
    }

    return (
        <div className={styles.product_view_items_order}>
            <div className={styles.product_view_items_order_itemsCount}>
                <button onClick={handleSubtract}>-</button>
                <p>{counter}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <form
                onSubmit={handleSubmit}
                className={styles.product_view_items_order_form}
            >
                <button
                    className={styles.product_view_items_order_submit}
                    type="submit"
                >
                    <FaCartShopping />
                    <span>Add to cart</span>
                </button>
            </form>
        </div>
    )
};