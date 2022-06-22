// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnwelSNwSoK8PUybz-BLAqNhgaN3IqSdc",
  authDomain: "budget-app-4f7a6.firebaseapp.com",
  projectId: "budget-app-4f7a6",
  storageBucket: "budget-app-4f7a6.appspot.com",
  messagingSenderId: "667651637366",
  appId: "1:667651637366:web:67236c42f60a12b096df57",
  measurementId: "G-P9VZHNHP17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth,db} ;