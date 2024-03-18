import React from "react";
import styles from "./Hero.module.css"

export const Hero = () => {
    return(
        <section className={styles.hero}>
            <h1>Maxi Emporium</h1>
            <h2>Empowering Your Tomorrow, Today!</h2>
        </section>
    );
}