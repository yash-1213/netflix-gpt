// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJWYW9pOxWLPUOIWMi328Dvcgj35To1oE",
  authDomain: "netflixgpt-d7711.firebaseapp.com",
  projectId: "netflixgpt-d7711",
  storageBucket: "netflixgpt-d7711.firebasestorage.app",
  messagingSenderId: "237054536902",
  appId: "1:237054536902:web:2f76fb2cd0eadf52643bc7",
  measurementId: "G-VX63HMYD61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
