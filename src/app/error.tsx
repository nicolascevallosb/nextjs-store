"use client"
import React from "react";
import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

export default function GlobalError(props: ErrorPageProps) {
    return(
        <main className={styles.error}>
            <h1 className={styles.error_title}>There's been an error</h1>
            <Image 
                src='/images/error.png'
                width={500}
                height={500}
                alt="Error"
            />
            <p className={styles.error_message}>There has been an error, but don't feel bad :D</p>
            <button className={styles.error_btn} onClick={props.reset}>Try again</button>
        </main>
    );
}