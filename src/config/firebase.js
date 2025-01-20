// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdZvy2cIOA-ULtQoiGMY25nBVod-CZ6rY",
  authDomain: "diastest-d6240.firebaseapp.com",
  databaseURL: "https://diastest-d6240-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diastest-d6240",
  storageBucket: "diastest-d6240.firebasestorage.app",
  messagingSenderId: "1097804903404",
  appId: "1:1097804903404:web:9b8175d209d156c96586c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get database instance
export const db = getDatabase(app);

// Get auth instance
export const auth = getAuth(app);

export default app;