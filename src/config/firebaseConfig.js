import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-4e474.firebaseapp.com",
  projectId: "portfolio-4e474",
  storageBucket: "portfolio-4e474.firebasestorage.app",
  messagingSenderId: "1035464983703",
  appId: "1:1035464983703:web:f3b65e276467f3e4c195d2",
  measurementId: "G-S856SBTBZ8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
