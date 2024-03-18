import React from "react";
import styles from "./Description.module.sass"
import Image from "next/image";

export const Description = () => {
    return(
        <section className={styles.description}>
            <Image
                src="/images/description.jpeg"
                alt="products marketplace"
                width={500}
                height={300}/>
            <div className={styles.description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio debitis quod perspiciatis possimus facere modi, praesentium enim autem velit! Incidunt deserunt explicabo accusamus soluta placeat sequi a quisquam provident.</p>
            </div>
        </section>
    );
}