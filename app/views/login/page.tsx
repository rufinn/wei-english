"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import EmailInput from "@/app/_components/EmailInput";
import PasswordInput from "@/app/_components/PasswordInput";
import { useSignIn } from "@/app/_utils/useSignIn";
import { getAuthErrorMessage } from "@/app/_utils/auth";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const signIn = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn.mutate(
      { email, password },
      { onSuccess: () => router.push("/") },
    );
  };

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Log in</h1>

        <EmailInput value={email} onChange={setEmail} required />

        <PasswordInput value={password} onChange={setPassword} required />

        {signIn.isError && (
          <p className={styles.formError}>
            {getAuthErrorMessage(signIn.error)}
          </p>
        )}

        <button type="submit" className={styles.submit} disabled={signIn.isPending}>
          {signIn.isPending ? "Logging in…" : "Log in"}
        </button>
      </form>
    </div>
  );
}
