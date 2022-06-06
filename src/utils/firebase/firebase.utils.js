// Firebase init
import { initializeApp } from "firebase/app";
// Imports required for Google sign-in
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJCOleSLlK9hY53QT3oS4DiRALvidBLw",
  authDomain: "react-ecomm-bf0a9.firebaseapp.com",
  projectId: "react-ecomm-bf0a9",
  storageBucket: "react-ecomm-bf0a9.appspot.com",
  messagingSenderId: "373105695325",
  appId: "1:373105695325:web:814b7744fb79c0ea3bcbb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
