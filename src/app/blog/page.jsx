import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const fetchData = async () => {
    // by default we cache the api response for faster loading
    // no-store doesn't cache and is better for data that is constantly updated
    // for blogs caching is okay
    // can also revalidate data every x seconds
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //     // cache: "no-store",
    //     next: { revalidate: 3600 },
    // });

    const res = await fetch("http://localhost:3000/api/blog", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Data fetching went wrong in blog");
    }

    return res.json();
};

const BlogPage = async ({ params, searchParams }) => {
    // console.log(params); // path that comes after /blog
    // console.log(searchParams); // queries

    // use api to get data
    const posts = await fetchData();

    // use function from data.js
    // const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id ? post.id : post._id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
