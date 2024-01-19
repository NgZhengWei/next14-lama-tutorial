// this file runs before any request is sent
import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

// filter middleware to run on specific paths (instead of all paths)
export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
