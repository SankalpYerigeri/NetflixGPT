// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8B8fWWhygmjHOhuHWqb-FaHpcS466Tp8",
  authDomain: "netflixgpt-cc344.firebaseapp.com",
  projectId: "netflixgpt-cc344",
  storageBucket: "netflixgpt-cc344.appspot.com",
  messagingSenderId: "1091499620223",
  appId: "1:1091499620223:web:a31204668de8efe44dcc4a",
  measurementId: "G-F2651HPMWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();