import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6FQ7goblcONewA2Ro1uawqvx572K_-sQ",
    authDomain: "clothing-app-210f1.firebaseapp.com",
    projectId: "clothing-app-210f1",
    storageBucket: "clothing-app-210f1.appspot.com",
    messagingSenderId: "610878374950",
    appId: "1:610878374950:web:c8e09e06917c8689d752e7",
    measurementId: "G-EJ0TXW9Q70"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};