"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
    // ------------------ CLIENT SIDE NAVIGATION ------------------
    // useRouter from next/navigation, its the new version
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    console.log(pathName);
    console.log(searchParams.get("q"));
    // ------------------ CLIENT SIDE NAVIGATION ------------------

    const handleClick = () => {
        console.log("clicked");
        router.push("/"); // client side navigation
        // router.replace("/"); // doesn't add to browser history stack, meaning skips page when back is pressed

        // makes a new request to server, refreshing page
        // router.refresh();

        // nav back and forward in browser context
        // router.back();
        // router.forward();
    };

    return (
        <div>
            <Link href="/" prefetch={false}>
                Click here
            </Link>

            <button onClick={() => handleClick()}>Write and redirect</button>
        </div>
    );
};

export default NavigationTestPage;
