import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

// register user on firebase
export const registerUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.code);
    if (error.code === "auth/email-already-in-use") {
      toast.error("Este correo ya está en uso");
    }
  }
};

// login user on firebase
export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.code);
  }
};

// logout user on firebase
export const signOutUser = () => {
  signOut(auth);
};
