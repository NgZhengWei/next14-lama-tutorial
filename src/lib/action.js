// Server actions are an alt to api routes to do things like CRUD
// works better for small applications since this is easy to manage but for large schemas APIs might be better

"use server"; // server action directive; applies to all functions in this file

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const handleGithubLogin = async () => {
    await signIn("github");
};

export const handleLogout = async () => {
    await signOut();
};

export const register = async (prevState, formData) => {
    const { username, email, img, password, passwordRepeat } =
        Object.fromEntries(formData);

    if (username === "") {
        return { error: "Username cannot be empty" };
    } else if (email === "") {
        return { error: "Email cannot be empty" };
    } else if (password === "") {
        return { error: "Password cannot be empty" };
    } else if (passwordRepeat === "") {
        return { error: "Repeat password cannot be empty" };
    }

    if (password !== passwordRepeat) {
        // throw new Error("passwords no match");
        return { error: "Passwords do not match" };
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });
        if (user) {
            return { error: "User already exist" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("New user saved to mongodb");
        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "User registration failed!" };
    }
};

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        if (error.message.includes("credentialssignin")) {
            return { error: "Invalid username or password" };
        }
        throw error;
    }
};
