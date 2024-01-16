import { handleGithubLogin, login } from "@/lib/action";

const LoginPage = async () => {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Sign in with Github</button>
            </form>

            <form action={login}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
