// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8P6grhjsTh1J8EQuhZb3jfQZHD01dBg",
  authDomain: "slack-clone-51ab5.firebaseapp.com",
  projectId: "slack-clone-51ab5",
  storageBucket: "slack-clone-51ab5.appspot.com",
  messagingSenderId: "124812155956",
  appId: "1:124812155956:web:e343fa5838479e49d8fe61"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };