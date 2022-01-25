// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4RT45i8vZTc2wQnZtBc0kYVdxm3L3KgQ",
  authDomain: "sendstacks-intern.firebaseapp.com",
  projectId: "sendstacks-intern",
  storageBucket: "sendstacks-intern.appspot.com",
  messagingSenderId: "904094138606",
  appId: "1:904094138606:web:f0bd30004b543aa4b1f3ff",
  measurementId: "G-74TWD03XSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
