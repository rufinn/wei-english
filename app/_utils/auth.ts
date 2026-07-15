import {
  signInWithEmailAndPassword,
  AuthErrorCodes,
  type UserCredential,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase";

const ERROR_MESSAGES: Record<string, string> = {
  [AuthErrorCodes.INVALID_EMAIL]: "Enter a valid email address.",
  [AuthErrorCodes.INVALID_PASSWORD]: "Incorrect email or password.",
  [AuthErrorCodes.INVALID_LOGIN_CREDENTIALS]: "Incorrect email or password.",
  [AuthErrorCodes.USER_DELETED]: "Incorrect email or password.",
  [AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]:
    "Too many attempts. Try again later.",
  [AuthErrorCodes.NETWORK_REQUEST_FAILED]:
    "Network error. Check your connection and try again.",
};

export function getAuthErrorMessage(error: unknown): string {
  const code = (error as { code?: string })?.code;
  return (code && ERROR_MESSAGES[code]) || "Something went wrong. Please try again.";
}

export function signIn(
  email: string,
  password: string,
): Promise<UserCredential> {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}
