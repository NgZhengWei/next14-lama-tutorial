import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

const fetchUser = async (id) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error(`Error fetching single user ${id}`);
    }

    return res.json();
};

const PostUser = async ({ userId }) => {
    // const user = await fetchUser(userId);
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
            />
            <div className={styles.texts}>
                <h2 className={styles.title}>Author</h2>
                <p className={styles.username}>{user.username}</p>
            </div>
        </div>
    );
};

export default PostUser;
