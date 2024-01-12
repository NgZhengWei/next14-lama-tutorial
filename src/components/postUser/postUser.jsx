import React from "react";
import styles from "./postUser.module.css";

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
    const user = await fetchUser(userId);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Author</h2>
            <p className={styles.username}>{user.username}</p>
        </div>
    );
};

export default PostUser;
