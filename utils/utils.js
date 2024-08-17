import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyCwvnEFN-wi3SzxguQvWWmUaLJO9rqpz2U",
  authDomain: "my-first-project-7f775.firebaseapp.com",
  projectId: "my-first-project-7f775",
  storageBucket: "my-first-project-7f775.appspot.com",
  messagingSenderId: "502071932661",
  appId: "1:502071932661:web:c55bfeff0179cf52a777bc",
  measurementId: "G-GXEL9LH1LY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
};