import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5U6esntJr9RDLjgQQ2RzJ5jlcbVMtRQ0",
  authDomain: "olx-clone-84277.firebaseapp.com",
  projectId: "olx-clone-84277",
  storageBucket: "olx-clone-84277.appspot.com",
  messagingSenderId: "489004964871",
  appId: "1:489004964871:web:c68efda98d7ac9468d5ea2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
