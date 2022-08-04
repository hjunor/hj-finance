import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE as string);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());
export { app, db, auth, signOut, signInWithPopup, signIn };
