// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9Gh2zOuCgRcpkYfQ1B9LQ8M0gUTpHoX0",
  authDomain: "um-d6d77.firebaseapp.com",
  projectId: "um-d6d77",
  storageBucket: "um-d6d77.appspot.com",
  messagingSenderId: "167857679445",
  appId: "1:167857679445:web:081b5a58e88cfdc3fbb8dc",
  measurementId: "G-TLXYZM1Z5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics (if needed)
const analytics = getAnalytics(app);

// Initialize Firebase services and pass the app instance
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
