import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Cards } from "../../Component/Cards/Cards";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { height } from "@mui/system";
export const Hebergement = () => {
   const [data,setData] = useState([]);
   
   const themes = useContext(ThemeContext);
    const fetchData =async()=>{

        const Fetchdata = await axios('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
        setData(Fetchdata.data)
    }
    fetchData()
   
    let location =useLocation();
   const style= {
        backgroundColor:"white"
   }
   if(themes==="dark"){

    style.backgroundColor="black"
    }
    else{
        style.backgroundColor="white"
    }
    return(
        <div>
            
            <div style={style}>
       
            {location.pathname=="/hebergement" && <h1>Hebergement</h1>}
            
               <Cards data={data} />
              
               
                
            </div>
        </div>
    )

}

