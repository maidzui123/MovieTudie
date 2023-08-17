// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGrZYL5cCkGOFBqEATLRXAd-CnMt2y3_o",
  authDomain: "muzietudie.firebaseapp.com",
  projectId: "muzietudie",
  storageBucket: "muzietudie.appspot.com",
  messagingSenderId: "567829637426",
  appId: "1:567829637426:web:40913f37eb9a4d33a4cf2b",
  measurementId: "G-H9FFY9B8BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);