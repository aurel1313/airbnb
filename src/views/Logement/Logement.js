import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../../Component/List/List";
import './Logement.scss';

export const Logement = () => {
   
    const redux = useSelector((state) => state.data);
            const style={
                display:"flex",
                flexDirection:"column"
            }
            const dispatch = useDispatch();
            console.log(redux)
    
    return (
        <div className="logement">
       
        <div>
            <List />,
          
        </div>
        </div>
    )
}