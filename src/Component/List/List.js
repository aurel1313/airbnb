import React from "react"

import data2 from "../../Data/data2.json"

import './List.scss'


export const List =()=>{
  let img ="https://loremflickr.com/g/320/240/house?lock=30976"
 
  
    return (
     <div >
            <h1>Liste des logements</h1>
        
       <div className="data">
           {data2.map(data=>{
            
               const image ="https://loremflickr.com/g/320/240/house?lock="+data.id
                return(
                     <div className="items" >
                          <h3>{data.address}</h3>
                          <p style={{color:"black"}}>{data.country}</p>
                          <img src={image} alt=""/>
                        
                     </div>
                )
              })}
           
       </div>
     </div>
 )      
}
     