// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-80900.firebaseapp.com",
  projectId: "estate-80900",
  storageBucket: "estate-80900.appspot.com",
  messagingSenderId: "228129518825",
  appId: "1:228129518825:web:30e20018f8d847c504ec78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);