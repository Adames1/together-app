import { db } from "./firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

// save info for user
export const saveDataUser = async (uid, fullname, email) => {
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
      fullname: fullname,
      email: email,
      createAt: Timestamp.now(),
    });
  } catch (error) {
    console.error(error.code);
  }
};
