import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// params must come after req
export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error(`failed to fetch post: ${slug}`);
    }
};

export const DELETE = async (req, { params }) => {
    const { slug } = params;

    try {
        connectToDb();
        await Post.deleteOne(slug);
        return NextResponse.json(`Post ${slug} deleted`);
    } catch (error) {
        console.log(error);
        throw new Error(`failed to delete post: ${slug}`);
    }
};
