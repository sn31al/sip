import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLkdDkjhl8eBf-fFaY6VJDQOpV0paiWJw",
  authDomain: "vendors-39c7b.firebaseapp.com",
  projectId: "vendors-39c7b",
  storageBucket: "vendors-39c7b.appspot.com",
  messagingSenderId: "753663963531",
  appId: "1:753663963531:web:b536458dd3235a4bb9ff8e",
  measurementId: "G-5Y564K47WW",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
