document.getElementById("user_name").innerHTML;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXlVpZx_tQoNe2tqmB_cK2GYl13DXp8mU",
  authDomain: "kwitter-24d65.firebaseapp.com",
  databaseURL: "https://kwitter-24d65-default-rtdb.firebaseio.com",
  projectId: "kwitter-24d65",
  storageBucket: "kwitter-24d65.appspot.com",
  messagingSenderId: "794551538959",
  appId: "1:794551538959:web:38793eec2922291bff1a7a",
  measurementId: "G-7Q8RD7WDS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  