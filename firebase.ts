import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv7vcip2YzuEr8tOMw-M9-5YbUkt_eaEE",
  authDomain: "chat-gpt-shubender.firebaseapp.com",
  projectId: "chat-gpt-shubender",
  storageBucket: "chat-gpt-shubender.appspot.com",
  messagingSenderId: "70868579071",
  appId: "1:70868579071:web:ebae41562c905f00a692ca",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
