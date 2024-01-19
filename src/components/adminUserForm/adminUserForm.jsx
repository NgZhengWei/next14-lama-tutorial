"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="img" placeholder="img" />
            <input type="password" name="password" placeholder="password" />
            <select name="isAdmin">
                <option value="false">Is Admin?</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <button>Add User</button>
            {state?.error}
        </form>
    );
};

export default AdminUserForm;
