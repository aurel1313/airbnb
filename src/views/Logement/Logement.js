import React from "react";
import { List } from "../../Component/List/List";
import './Logement.scss';
export const Logement = () => {
    
   

            const style={
                display:"flex",
                flexDirection:"column"
            }
    
    return (
        <div className="logement">
       
        <div>
            <List/>
        </div>
        </div>
    )
}