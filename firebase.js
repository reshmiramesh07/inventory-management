// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6Bc8x-p_K7jo9yiBHgUigWpsx6Aktnw",
  authDomain: "inventory-management-946a8.firebaseapp.com",
  projectId: "inventory-management-946a8",
  storageBucket: "inventory-management-946a8.appspot.com",
  messagingSenderId: "788471942755",
  appId: "1:788471942755:web:bab637d6a8f6500e087256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}