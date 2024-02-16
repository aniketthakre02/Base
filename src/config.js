// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMv2z_lkF0qAmAIudkdG3UBhO4Z6tgYB0",
  authDomain: "base-71710.firebaseapp.com",
  projectId: "base-71710",
  storageBucket: "base-71710.appspot.com",
  messagingSenderId: "815007194299",
  appId: "1:815007194299:web:8db0acd3569533a39e9d9e",
  measurementId: "G-XJ5KWVJCWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};
