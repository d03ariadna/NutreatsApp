// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCMNrCWnDWH3-5FTkZKpi7lXdDM2jKCUuo",

  authDomain: "nutreats-7445e.firebaseapp.com",

  projectId: "nutreats-7445e",

  storageBucket: "nutreats-7445e.appspot.com",

  messagingSenderId: "1095112059718",

  appId: "1:1095112059718:web:5e16d37cef4ee8626fd347"

};


// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);