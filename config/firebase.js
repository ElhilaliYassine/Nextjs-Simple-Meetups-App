import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export { db };
