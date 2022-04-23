import { useState } from "react"
import { Input } from "../Input/Input"
import React from "react"
export const SearchBar=(props)=>{
    const[change,setChange]=useState('')
    
    return(
        <div >
            <Input type="text" value ="test" onChange={(e)=>setChange(e.target.value)} className={props.className} />
        </div>
    )

}