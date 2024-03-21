"use client"
import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Description.module.sass"

const PLACEHOLDER_IMAGE = "data:image/jpeg;base64,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"

export const Description = () => {
    const [hasBorder, setHasBorder] = React.useState(false);

    const handleCLick = () => {
        setHasBorder(!hasBorder);
    };

    const context = classNames.bind(styles);
    const btnStyles = context(
        'description_btn', {
            'description_btn--border': hasBorder,
        }
    );

    return(
        <section className={styles.description}>
            <button
                onClick={handleCLick}
                className={btnStyles}
            >
                <div className={styles.description_img_container}>
                    <Image
                        src="/images/description.jpeg"
                        alt="products marketplace"
                        fill
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div className={styles.description_text}>
                <h2>Bring the Future Today!</h2>
                <p><strong>Maxi Emporium:</strong> Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}