// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBws07n4YTn49zl_8N6WgbvXXdjRC6-otY",
  authDomain: "my-app-practice-67c7c.firebaseapp.com",
  databaseURL: "https://my-app-practice-67c7c-default-rtdb.firebaseio.com",
  projectId: "my-app-practice-67c7c",
  storageBucket: "my-app-practice-67c7c.appspot.com",
  messagingSenderId: "880943306495",
  appId: "1:880943306495:web:84946fcfca65442dba1eca",
  measurementId: "G-4PK9PWD5KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;