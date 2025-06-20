import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-interview-f5ed0.firebaseapp.com",
  projectId: "ai-interview-f5ed0",
  storageBucket: "ai-interview-f5ed0.firebasestorage.app",
  messagingSenderId: "813428975765",
  appId: "1:813428975765:web:559c8696d2c02b5793d39c",
  measurementId: "G-HZ26C9JGH0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
