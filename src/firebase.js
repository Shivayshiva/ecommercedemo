// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx-NynR6BkBAVkNg-ST-CJB57fGWG9P7c",
  authDomain: "ecommerce-8187f.firebaseapp.com",
  databaseURL: "https://ecommerce-8187f-default-rtdb.firebaseio.com",
  projectId: "ecommerce-8187f",
  storageBucket: "ecommerce-8187f.appspot.com",
  messagingSenderId: "488792266914",
  appId: "1:488792266914:web:214810d2665cc2c3bd9ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()

export default app;