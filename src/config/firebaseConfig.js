// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.API_DOM,
  projectId: process.env.API_ID,
  storageBucket: process.env.API_BUCKET,
  messagingSenderId: process.env.API_SENDER,
  appId: process.env.API_APP_ID,
  measurementId: process.env.API_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()