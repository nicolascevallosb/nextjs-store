"use client";
import { useState } from "react";
import styles from "./NewAccountForm.module.sass";

export const NewAccountForm = () => {

    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className={styles.new_account_form}  >
            <h1 className={styles.new_account_form_title}>New Account</h1>
            <form className={styles.new_account_form_form}>
                <input type="text" name="first_name" placeholder="Name" disabled={loading} />
                <input type="text" name="last_name" placeholder="Lastname" disabled={loading} />
                <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} />
                <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
                <input type="password" name="password" placeholder="password" disabled={loading} />
                <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
                <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
            </form>
            {errors.length > 0 &&
                <div>
                    {errors.map((error, index) => {
                        return <p key={index} className={styles.new_account_form_error}>{error}</p>
                    })}
                </div>
            }
        </div>
    );
}