// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-31c73.firebaseapp.com",
  projectId: "mern-blog-31c73",
  storageBucket: "mern-blog-31c73.appspot.com",
  messagingSenderId: "946474432745",
  appId: "1:946474432745:web:ffb3877f8fb7676c59d878"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);