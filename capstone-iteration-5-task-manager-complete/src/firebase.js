import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyExampleKey",
  authDomain: "example.firebaseapp.com",
  projectId: "capstone-task-manager",
  storageBucket: "capstone-task-manager.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:example"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);