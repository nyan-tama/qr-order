"use client"

import { useState, useEffect } from "react";

function LiffInit({ children }) {
    // const [liffObject, setLiffObject] = useState(null);
    // const [liffError, setLiffError] = useState(null);

    // Execute liff.init() when the app is initialized
    useEffect(() => {
        // to avoid `window is not defined` error
        import("@line/liff").then((liff) => {
            console.log("start liff.init()...");
            liff
                .init({ liffId: "1657786829-DBMwpMYg" })
                .then(() => {
                    console.log("liff.init() done");
                    // setLiffObject(liff);
                })
                .catch((error) => {
                    console.log(`liff.init() failed: ${error}`);
                    if (!process.env.LIFF_ID) {
                        console.info(
                            "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
                        );
                    }
                    // setLiffError(error.toString());
                });
        });
    }, []);

    // Provide `liff` object and `liffError` object
    // to page component as property
    pageProps.liff = liffObject;
    pageProps.liffError = liffError;
    return { children };
}

export default LiffInit;