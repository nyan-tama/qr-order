"use client"

import { useEffect } from "react";

export default function Template({ children }) {
    useEffect(() => {
        // to avoid `window is not defined` error
        import("@line/liff").then((liff) => {
            console.log("start liff.init()...");
            liff
                .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
                .then(() => {
                    console.log("liff.init() done");
                })
                .catch((error) => {
                    console.log(`liff.init() failed: ${error}`);
                    if (!process.env.NEXT_PUBLIC_LIFF_ID) {
                        console.info(
                            "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
                        );
                    }
                });
        });
    }, []);

    return (
        <>
            {children}
        </>
    )
}