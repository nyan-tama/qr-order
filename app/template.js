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
                    const accessToken = liff.getAccessToken();
                    // functionsへの渡し方を考える
                    // postによるapiでの方法
                    // children内のpage内にあるclienntbuttonからtemplate内の値が読めるのであれば可能
                    if (accessToken) {
                        axios.post('/api/hello', {
                            accessToken,
                        }).then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
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