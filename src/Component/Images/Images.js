import React from "react"
import { Link } from "react-router-dom"
import './Images.scss'
export const Images = ({visible,setVisible,...props}) => { 
  console.log(visible)
    return(
        <div className="card" style={props.style}>
            <img src={props.src} alt={props.alt} style={props.style}/>
          <div className="content"> 
            <p className="text">{props.text}</p>
            {
                visible===false?<div className="button" style={{display:"none"}}>
                    <Link className="more" to="/logement"  onClick={props.onClick}  >Details</Link>
                </div>:<div className="button">
                    <Link className="more" to="/logement"  onClick={props.onClick}  >Details</Link>
                </div>
            }
           </div>
            
           
        </div>
    )

}