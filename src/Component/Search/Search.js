 import React, { useState } from "react"
 import {AiOutlineSearch } from 'react-icons/ai'
export const Search= ({value,setValue},...props)=>{
    
   
    const handleSubmit = (e)=>{
        e.preventDefault();
     
    }
    return (
        <div>
            <div >
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="recherche" className={props.classname} value={value} onChange={e=>setValue(e.target.value)} />
                    <button type="submit"><AiOutlineSearch className="relative bottom-10 left-1/3"/></button>

                </form>
            </div>
           
            
        </div>
    )
}