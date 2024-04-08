// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChcinr8TK50mwZ5YUiQKI_2dxaE4qzJOE",
  authDomain: "podcastapp-e39fa.firebaseapp.com",
  projectId: "podcastapp-e39fa",
  storageBucket: "podcastapp-e39fa.appspot.com",
  messagingSenderId: "990723451027",
  appId: "1:990723451027:web:7fbe5768f784a104db8566",
  measurementId: "G-LXNVDE6HR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db , storage};