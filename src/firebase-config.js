// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore}from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrQsNMo2oqBxC6N7oHGqpZfylufzPr8-g",
  authDomain: "chatapp-5d320.firebaseapp.com",
  projectId: "chatapp-5d320",
  storageBucket: "chatapp-5d320.appspot.com",
  messagingSenderId: "601004791398",
  appId: "1:601004791398:web:11d41f1f3719b49a6fffa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const  provider =new GoogleAuthProvider();
export const db=getFirestore(app);