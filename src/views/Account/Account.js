import React from "react"
import { useState } from "react"
export const Account = () => {
    const style={
        backgroundColor:"white"
    }
    const[visible,setVisible]=useState(false)
    
    const json = JSON.parse(localStorage.getItem('user'))
    const jsonBuffer =new Buffer(json.user.uid).toString('base64');
    console.log(jsonBuffer)
    return (
        <div style={style} className="Account">
            <h1>Account</h1>
            <div className="account-infos">
                <p>{json.user.email}</p>
                {!visible ? <p onClick={()=>setVisible(true)}><strong>******</strong></p> : <p onClick={()=>setVisible(false)}>{json.user.uid}</p>}
                
            </div>
           
        </div>
    )
}