import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import config from "./config.js";

// Initialize Firebase
initializeApp(config);
const app = initializeApp(config);
//const analytics = getAnalytics(app);
const auth = getAuth();
console.log("prueba");
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export {
  auth,
  app,
  db,
  provider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  getRedirectResult,
  signInWithPopup,
  addDoc,
  collection,
  Timestamp,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
};
