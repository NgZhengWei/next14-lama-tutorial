// authorized function is written here as middleware doesn't have access to node
// modules available in auth.js like bcrypt
export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        // when user logs in, Next Auth creates a JWT token
        async jwt({ token, user }) {
            if (user) {
                (token.id = user.id), (token.isAdmin = user.isAdmin);
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }) {
            console.log(auth);
            const user = auth?.user;
            const isOnAdminPanel =
                request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage =
                request.nextUrl?.pathname.startsWith("/login");

            // only admin users can reach admin page
            if (isOnAdminPanel && !user?.isAdmin) {
                // returning false redirects to login page
                return false;
            }
            // only auth users can reach blog page
            if (isOnBlogPage && !user) {
                return false;
            }
            // only un-auth users can reach login page
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // if none of the conditions match, we let them go to where they were going
            return true;
        },
    },
};
