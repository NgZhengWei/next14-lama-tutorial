"use client";

import Link from "next/link";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input
                type="password"
                placeholder="password again"
                name="passwordRepeat"
            />
            <button type="submit">Register</button>
            {state?.error && (
                <span className={styles.error}>{state.error}</span>
            )}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;
