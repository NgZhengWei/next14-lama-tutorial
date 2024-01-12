import React, { Suspense } from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const fetchOnePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error(`Error fetching single post ${id}`);
    }

    return res.json();
};

const SinglePostPage = async ({ params }) => {
    const postId = params.slug;
    const post = await fetchOnePost(postId);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill={true}
                    className={styles.img}
                />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                        src="https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <h2 className={styles.detailTitle}>Published</h2>
                        <p className={styles.detailValue}>01.01.2024</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.description}>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
