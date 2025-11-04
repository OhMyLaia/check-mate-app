// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUguQV-Fs54WC-HmuZ7fg_hJ3JawtIT0I",
    authDomain: "checkmate-ca137.firebaseapp.com",
    projectId: "checkmate-ca137",
    storageBucket: "checkmate-ca137.firebasestorage.app",
    messagingSenderId: "607911460183",
    appId: "1:607911460183:web:889efb3d5bd717d1c71212",
    measurementId: "G-VJ463WPSZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);