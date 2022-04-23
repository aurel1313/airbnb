import { useState } from "react"
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import React from "react"
export const Input = (props) => {
    const style={
        height:"50px",
        marginRight:"10rem",
        backgroundColor:"white",
        width:"50px",
        borderRadius:"5px",

    }
    /**
     * state of the input
     */
    const [visible,setVisible]=useState(false)
    const[click,setClick]=useState(false)
    
    
    return (
        <div className="input-field">
            <input type={props.type} id={props.id} className={props.className} onChange={props.onChange} value={props.value} style={style} onClick={()=>setClick(true)}  />
            <label className={props.labelClassName} htmlFor={props.id}>{props.label}</label>
            {
               click? <Modal visible={()=>setVisible(true)} />:null
            }
            <Button onClick={()=>setVisible(false)} children ="close"/>
            
        </div>
    )
}