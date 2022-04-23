import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Cards } from "../../Component/Cards/Cards";
import React from "react";
export const Hebergement = () => {
   const [data,setData] = useState([]);
   
   
    useEffect( async ()=>{
        const data = await axios('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
        setData(data.data)
    },[])
    
    let location =useLocation();
    
    return(
        <div style={{background:"white"}}>
            
            <div>
            {location.pathname=="/hebergement" && <h1>Hebergement</h1>}
            
               <Cards data={data}/>
              
               
                
            </div>
        </div>
    )

}

