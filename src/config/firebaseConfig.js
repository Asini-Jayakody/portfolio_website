import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import {env} from './env'

const firebaseConfig = { 
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUERMENT_ID

//   apiKey: "AIzaSyBJUFg-WhzVV-8jRNpgsiGqysKlnhxaTM0",
//   authDomain: "portfolio-4e474.firebaseapp.com",
//   projectId: "portfolio-4e474",
//   storageBucket: "portfolio-4e474.firebasestorage.app",
//   messagingSenderId: "1035464983703",
//   appId: "1:1035464983703:web:f3b65e276467f3e4c195d2",
//   measurementId: "G-S856SBTBZ8"

//   apiKey: env.FIREBASE_API_KEY,
//   authDomain: env.FIREBASE_AUTH_DOMAIN,
//   projectId: env.FIREBASE_PROJECT_ID,
//   storageBucket: env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: env.FIREBASE_APP_ID,
//   measurementId: env.FIREBASE_MEASUERMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db,auth}

