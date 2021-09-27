import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAsZFJsto4_PbmIYR9AkFsIxNmryj-43oM",
  authDomain: "meetups-20566.firebaseapp.com",
  projectId: "meetups-20566",
  storageBucket: "meetups-20566.appspot.com",
  messagingSenderId: "476065644190",
  appId: "1:476065644190:web:8057df43dbd7115f4e058f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export { db };
