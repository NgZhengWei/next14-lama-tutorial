import React, { Suspense } from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// fetch data using API
const fetchOnePost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!res.ok) {
        throw new Error(`Error fetching single post ${slug}`);
    }

    return res.json();
};

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    // there will only be one request sent as Next.js optimises this
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.description,
    };
};

const SinglePostPage = async ({ params }) => {
    // const postId = params.slug;
    // const post = await fetchOnePost(postId);
    // const post = await getPost(postId);

    const { slug } = params;
    const post = await fetchOnePost(slug);

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image
                        src={post.img}
                        alt=""
                        fill={true}
                        className={styles.img}
                    />
                </div>
            )}

            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <h2 className={styles.detailTitle}>Published</h2>
                        <p className={styles.detailValue}>
                            {new Date(post.createdAt).toDateString()}
                        </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.description}>{post.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
