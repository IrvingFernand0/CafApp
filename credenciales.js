// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYGF5oEvzzLSn9zJSmwFqirvV-0HTeZRs",
  authDomain: "milogincafe.firebaseapp.com",
  projectId: "milogincafe",
  storageBucket: "milogincafe.appspot.com",
  messagingSenderId: "784788701552",
  appId: "1:784788701552:web:d083fdd152bd76acf94fb5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;