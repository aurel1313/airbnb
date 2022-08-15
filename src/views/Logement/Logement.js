import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../../Component/List/List";
import './Logement.scss';
import { useContext } from "react";
import { ThemeContext } from "../../App";
export const Logement = () => {
    const themes = useContext(ThemeContext);
    const redux = useSelector((state) => state.data);
            const style={
                display:"flex",
                flexDirection:"column",
                backgroundColor:"white"
            }
            const style1={
                backgroundColor:"white"
            }
            const dispatch = useDispatch();
            console.log(redux)
            if(themes==="dark"){
                style1.backgroundColor="black"
                style1.color = "white"
               
           }
           else{
               style1.backgroundColor="white"
                style1.color = "black"
           }
    return (
        <div className="logement" >
            
       
        <div style={style1}>
            <List />,
          
        </div>
       
        </div>
    )
}