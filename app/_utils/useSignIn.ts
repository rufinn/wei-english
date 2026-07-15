import { useMutation } from "@tanstack/react-query";
import { signIn } from "./auth";

export function useSignIn() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
  });
}
