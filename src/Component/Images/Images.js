import React from "react"
import './Images.scss'
import { Button } from "../Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
export const Images = ({visible,setVisible,...props}) => { 
  console.log(visible)
    return(
        <div className="card" style={props.style}>
            <img src={props.src} alt={props.alt} />
            <p>{props.text}</p>
            {
                visible===false?<div className="button" style={{display:"none"}}>
                    <Link className="more" to="/logement"  onClick={props.onClick}  >Details</Link>
                </div>:<div className="button">
                    <Link className="more" to="/logement"  onClick={props.onClick}  >Details</Link>
                </div>
            }
           
            
           
        </div>
    )

}