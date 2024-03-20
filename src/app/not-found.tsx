import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function not_found() {
    return (
        <main className={styles.not_found}>
            <h1 className={styles.not_found_title}>404</h1>
            <Image
                src="/images/404.png"
                alt="404"
                width={300}
                height={300}
            />
            <h2 className={styles.not_found_subtitle}> There is nothing here! </h2>
            <p className={styles.not_found_description}>But our store is open 24/7</p>
            <Link className={styles.not_found_link} href="/store">
                Let's go shopping!
            </Link>
        </main>
    );
}