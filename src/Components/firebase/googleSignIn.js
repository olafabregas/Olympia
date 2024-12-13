import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./setup";

const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User signed in:", user);
    // Optional: Save user data to your database or state
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    // Optional: Add error handling logic (e.g., toast notifications)
  }
};

export default googleSignIn;
