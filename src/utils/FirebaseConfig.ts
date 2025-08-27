import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBnpqg6rykXmMqPsxVE6TIzYnWynnE3sWs",
  authDomain: "pokedex-8fa42.firebaseapp.com",
  projectId: "pokedex-8fa42",
  storageBucket: "pokedex-8fa42.firebasestorage.app",
  messagingSenderId: "145157140279",
  appId: "1:145157140279:web:d8aba8df558523b04734b2",
  measurementId: "G-TVZNKTYJMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)



export const usersRef = collection(firebaseDB,"users");
export const pokemonListRef = collection(firebaseDB,"pokemonlist")