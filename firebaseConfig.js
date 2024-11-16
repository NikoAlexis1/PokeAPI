// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVbCbmGz2FvuUJ5cLacSPwVEJlqqzJY8g",
  authDomain: "poke-api-58b52.firebaseapp.com",
  projectId: "poke-api-58b52",
  storageBucket: "poke-api-58b52.appspot.com",
  messagingSenderId: "43146849002",
  appId: "1:43146849002:web:3e19e1b0becbacec0c0593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app