// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7OkqHh0CqinwEuli1HKcY5V_AgLnhW1A",
  authDomain: "aunteticafire.firebaseapp.com",
  projectId: "aunteticafire",
  storageBucket: "aunteticafire.appspot.com",
  messagingSenderId: "663922424206",
  appId: "1:663922424206:web:f0cf9e0297ebb7b9f10cdf"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app; //variável global
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}   else {
    app = firebase.app()
}

const autentica = firebase.autentica() //variável global

export { autentica };