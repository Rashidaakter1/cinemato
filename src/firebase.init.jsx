// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJCb0AxjPs6D_x_Ku67sAJ_ZZUTqI7UCQ",
  authDomain: "cinemato-ce595.firebaseapp.com",
  projectId: "cinemato-ce595",
  storageBucket: "cinemato-ce595.appspot.com",
  messagingSenderId: "948962389996",
  appId: "1:948962389996:web:a7d542d078397a72bf9ac9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
