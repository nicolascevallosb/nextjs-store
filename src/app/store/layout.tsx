import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <main>
            <nav>Nav of the categories</nav>
            {children}
        </main>
    );
}