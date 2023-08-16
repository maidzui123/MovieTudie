// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIGvXvVrKk0dABrAGyA65b1HC7fBiWNT8",
  authDomain: "oneclick-2bdab.firebaseapp.com",
  databaseURL:
    "https://oneclick-2bdab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oneclick-2bdab",
  storageBucket: "oneclick-2bdab.appspot.com",
  messagingSenderId: "929796778155",
  appId: "1:929796778155:web:8c6bec7f80f32a42736fee",
  measurementId: "G-N3NY26JLTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);

