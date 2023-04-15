// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqjAJyphA3sMoppZE9vjrUf18sirowRPg",
    authDomain: "simple-firebase-d6d27.firebaseapp.com",
    projectId: "simple-firebase-d6d27",
    storageBucket: "simple-firebase-d6d27.appspot.com",
    messagingSenderId: "99756781167",
    appId: "1:99756781167:web:62ea23e8bf1388fef1279a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app