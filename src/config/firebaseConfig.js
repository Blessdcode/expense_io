// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDRkH71hkI9I8oCAd_iW-9k3It3pD7kiDU",
  authDomain: "expense-4199a.firebaseapp.com",
  projectId: "expense-4199a",
  storageBucket: "expense-4199a.appspot.com",
  messagingSenderId: "667702831079",
  appId: "1:667702831079:web:6d798f2acfdff8b450bf42",
  measurementId: "G-X3H1SW481W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)