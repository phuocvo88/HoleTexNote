// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-AROx2ZJc7H-yygkvvZ2Ri9GKMceEh0Q",
  authDomain: "note-app-holetex-4c1b0.firebaseapp.com",
  projectId: "note-app-holetex-4c1b0",
  storageBucket: "note-app-holetex-4c1b0.appspot.com",
  messagingSenderId: "916396458386",
  appId: "1:916396458386:web:8606e5d8e087fcd5fc814b",
  measurementId: "G-NZRWL640SG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
