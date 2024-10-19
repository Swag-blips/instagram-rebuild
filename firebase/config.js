// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_CY2sm1FZAB0U2oj-gShD5vO1mcDLX-E",
  authDomain: "instagram-66785.firebaseapp.com",
  projectId: "instagram-66785",
  storageBucket: "instagram-66785.appspot.com",
  messagingSenderId: "560981325913",
  appId: "1:560981325913:web:888ba563bb34e75b61d948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const facebook = new FacebookAuthProvider()

export { auth, db, facebook };
