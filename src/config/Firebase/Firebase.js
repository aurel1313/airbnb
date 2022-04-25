import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

 export const Firebase = {
  apiKey: "AIzaSyCOVUd1lbW-q2NNT3FEkNApqxm9oQwLV2Q",
  authDomain: "airbnb-clone-bac60.firebaseapp.com",
  projectId: "airbnb-clone-bac60",
  storageBucket: "airbnb-clone-bac60.appspot.com",
  messagingSenderId: "843268472906",
  appId: "1:843268472906:web:f0766e6ec8ae01b18ce6b3",
  measurementId: "G-LTVG2Z765W"
};

// Initialize Firebase
const app = initializeApp(Firebase);
export const auth = getAuth(app);