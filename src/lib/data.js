import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMP DATA
// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
// ];

// const posts = [
//     { id: 1, title: "Post 1", body: ".......", userId: 1 },
//     { id: 2, title: "Post 2", body: ".......", userId: 1 },
//     { id: 3, title: "Post 3", body: ".......", userId: 2 },
//     { id: 4, title: "Post 4", body: ".......", userId: 2 },
// ];

export const getPosts = async () => {
    // TESTING FAKE API RETURN
    // return posts:

    // FROM MONGODB
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts!");
    }
};

export const getPost = async (slug) => {
    // for (let post of posts) {
    //     if (post.id === postId) {
    //         return post;
    //     }
    // }
    // return posts.find((post) => post.id === postId);

    // FROM MONGODB
    try {
        connectToDb();
        // find the post where slug = slug
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching one post!");
    }
};

export const getUsers = async () => {
    // return users.find((user) => user.id === userId);

    // FROM MONGODB
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users!");
    }
};

export const getUser = async (userId) => {
    // return users.find((user) => user.id === userId);

    // FROM MONGODB
    // noStore(); // don't cache fetched results
    try {
        connectToDb();
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching one user!");
    }
};
