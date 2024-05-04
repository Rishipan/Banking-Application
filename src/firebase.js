// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUYdL73Z7pbWXM92fripaHTpASOO-yas",
  authDomain: "banking-application-1ca69.firebaseapp.com",
  projectId: "banking-application-1ca69",
  storageBucket: "banking-application-1ca69.appspot.com",
  messagingSenderId: "375493782302",
  appId: "1:375493782302:web:fd3e1473f2ea55abfb370f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export { auth, db };
