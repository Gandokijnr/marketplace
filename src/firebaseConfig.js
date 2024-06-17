// File: src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxT78KxKDkN-PJkjt-XrPE1qulU9jD1RY",
  authDomain: "marketplace-751c3.firebaseapp.com",
  projectId: "marketplace-751c3",
  storageBucket: "marketplace-751c3.appspot.com",
  messagingSenderId: "130902397428",
  appId: "1:130902397428:web:7a3e8258f301d9b09769a1",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, analytics, auth, db, collection, getDocs, addDoc };
