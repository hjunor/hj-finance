import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCA40ZUIH44STnV6HbrnRrUPSRPesKu7KY",
  authDomain: "money-c2b46.firebaseapp.com",
  projectId: "money-c2b46",
  storageBucket: "money-c2b46.appspot.com",
  messagingSenderId: "442107355805",
  appId: "1:442107355805:web:d3eecdfa5921f056fdaa74",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth, signOut };
