// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCjWyn-y1DBIQS-QMnZj1OqIzgq-WFGvEo",
  authDomain: "blog-c9076.firebaseapp.com",
  projectId: "blog-c9076",
  storageBucket: "blog-c9076.appspot.com",
  messagingSenderId: "1008621670226",
  appId: "1:1008621670226:web:fc0d5bdea51fcd22d5348b",
  measurementId: "G-1VLEE3M90C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();