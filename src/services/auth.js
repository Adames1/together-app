import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";

export const observerStateAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const signIn = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};

export const logOut = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error(error.message);
  }
};
