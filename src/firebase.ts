// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI3VpWIK4s1rj5UqdYclMXNiudowKjC0I",
  authDomain: "fir-learn-97276.firebaseapp.com",
  projectId: "fir-learn-97276",
  storageBucket: "fir-learn-97276.appspot.com",
  messagingSenderId: "832256793274",
  appId: "1:832256793274:web:ae58f27e1df9de932bc083",
  measurementId: "G-XD6DBY7KS8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);