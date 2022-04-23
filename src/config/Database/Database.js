import { getDatabase } from "firebase/database";
import React from "react";

export const Database=()=>{
    const database = getDatabase();
    const data ={
        "users": {
            "alovelace": {
              "name": "Ada Lovelace",
              "contacts": { "ghopper": true },
            }
            
          }
    }
    return(
        
        <div></div>
    )
}