// Server actions are an alt to api routes to do things like CRUD
// works better for small applications since this is easy to manage but for large schemas APIs might be better

"use server"; // server action directive; applies to all functions in this file

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

// server actions have to be async
export const addPost = async (formData) => {
    // server action directive for this function only
    "use server";

    // const title = formData.get("title");
    // const description = formData.get("description");
    // const slug = formData.get("slug");

    const { title, description, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            description,
            slug,
            userId,
        });
        await newPost.save();
        console.log(`Post '${title} saved in mongodb'`);
        // updates cache for blog so that the new post will be shown
        revalidatePath("/blog");
    } catch (error) {
        console.log(error);
        return { error: "Post creation went wrong" };
    }
};

export const deletePost = async (formData) => {
    // post id
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log(`Post '${id} deleted in mongodb'`);
        // updates cache for blog so that the new post will be shown
        revalidatePath("/blog");
    } catch (error) {
        console.log(error);
        return { error: "Post deletion went wrong" };
    }
};
