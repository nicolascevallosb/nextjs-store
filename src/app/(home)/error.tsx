"use client"
import { error } from "console";
import React from "react"

interface ErrorProps {
    error: Error,
    reset: () => void,
}

export default function Error(props: ErrorProps) {

    React.useEffect(() => {
        console.log("Sending error to page monitor...");
    }, []);

    return(
        <div style={{
            padding: '10rem',
        }}>
            <h1>Something went wrong.</h1>
            <h1>:C</h1>
            <button onClick={props.reset}>Try Again</button>
        </div>
    );
}