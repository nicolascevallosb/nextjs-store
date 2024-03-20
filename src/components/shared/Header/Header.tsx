import React from "react";
import Link from 'next/link';
import styles from "./Header.module.sass";

export const Header = () => {
    return(
        <header>
            <nav>
                <ul className={styles.header_list}>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            Store
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}