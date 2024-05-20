import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADl4JNulfV7nbqAfS8NahGxRGtyktQ08A",
  authDomain: "flutter-288f5.firebaseapp.com",
  databaseURL: "https://flutter-288f5.firebaseio.com",
  projectId: "flutter-288f5",
  storageBucket: "flutter-288f5.appspot.com",
  messagingSenderId: "66088933893",
  appId: "1:66088933893:web:326e5c32f3c863c1025a6c",
  measurementId: "G-Z1Z7DNHDTS",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
