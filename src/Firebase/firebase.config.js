// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClocjk4YyCnL7uioBhXR-HRVyjr6fGs7U",
  authDomain: "brand-shop-assignment-614e5.firebaseapp.com",
  projectId: "brand-shop-assignment-614e5",
  storageBucket: "brand-shop-assignment-614e5.appspot.com",
  messagingSenderId: "695062550272",
  appId: "1:695062550272:web:3e9d6e54d4ad64e43705e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;