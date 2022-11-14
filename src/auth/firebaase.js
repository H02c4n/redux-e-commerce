import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn5FqRRAPqzRbfajHtqNPp7I5a_6iUuwA",
  authDomain: "firestore-app-v1.firebaseapp.com",
  projectId: "firestore-app-v1",
  storageBucket: "firestore-app-v1.appspot.com",
  messagingSenderId: "295955389526",
  appId: "1:295955389526:web:faf9405c3a4a152dceaff7",
  measurementId: "G-98QELPD9S5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const registerUser = async (data) => {
  try {
    await addDoc(collection(db, "users"), data);
  } catch (error) {
    console.log(error.message);
  }
};
