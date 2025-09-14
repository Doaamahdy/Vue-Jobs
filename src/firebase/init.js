// src/firebase/init.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5diqoGfsEfNpAyxBzFRZp4VdBcJxFiOk",
  authDomain: "vue-jobs-server.firebaseapp.com",
  projectId: "vue-jobs-server",
  storageBucket: "vue-jobs-server.firebasestorage.app",
  messagingSenderId: "482125876054",
  appId: "1:482125876054:web:21bfe6d7c5b6839fdca4f7",
  measurementId: "G-3P3E8LHF7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);

// Export the services so they can be used in your components
export { db, auth };