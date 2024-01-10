import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
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
