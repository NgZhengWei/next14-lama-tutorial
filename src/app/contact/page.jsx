// "use client";

// import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//     ssr: false,
// });

export const metadata = {
    title: "Contact page",
    description: "Next.js starter app contact description",
};

const ContactPage = () => {
    // state to prevent hydration error(server and client data differing) by rendering on client side
    // const [isClient, setIsClient] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="/contact.png"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
            </div>
            {/* {
                // this is not rendered on server side, only client side
                isClient && a
            } */}
            {/* <HydrationTestNoSSR /> */}
            <div className="formContainer">
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and surname" />
                    <input type="email" placeholder="Email address" />
                    <input type="text" placeholder="Phone Number (optional)" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
