import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app"
import React from "react";

export const Database=()=>{
  const FirebaseConfig = {
    databaseURL: "https://airbnb-clone-bac60-default-rtdb.europe-west1.firebasedatabase.app"
  }
  const app = initializeApp(FirebaseConfig);
  const db = getDatabase(app);
}