// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "web-log-b2c9a.firebaseapp.com",
  projectId: "web-log-b2c9a",
  storageBucket: "web-log-b2c9a.appspot.com",
  messagingSenderId: "974544186092",
  appId: "1:974544186092:web:41fd49837a27c0bd2bd3c9",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
