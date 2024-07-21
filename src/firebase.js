// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carcare-67de3.firebaseapp.com",
  projectId: "carcare-67de3",
  storageBucket: "carcare-67de3.appspot.com",
  messagingSenderId: "1083701522617",
  appId: "1:1083701522617:web:674d4b967d74c0940d6b68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);