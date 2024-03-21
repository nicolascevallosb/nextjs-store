import React from "react";
import Link from "next/link";
import styles from "./StoreLayout.module.sass";
import { getCollections } from "app/services/shopify/collections";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections();

    return (
        <main className={styles.store_layout}>
            <h1>Explore</h1>
            <div className={styles.store_layout_nav_container}>
                <nav>
                    <ul className={styles.store_layout_list}>
                        {
                            collections.map((collection: Collection) => (
                                <Link key={collection.id} href={'/store/' + collection.handle} className={styles.store_layout_chip}>
                                    {collection.title}
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            {children}
        </main>
    );
}