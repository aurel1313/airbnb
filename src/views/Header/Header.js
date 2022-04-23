import { useState } from "react"
import { BsGlobe } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { Links } from "../../Component/Links/Links"
import { SearchBar } from "../../Component/SearchBar/SearchBar"
import { Sidebars } from "../../Component/Sidebar/Sidebars"
import React from "react"
import './Header.scss'
export const Header = () => {
    const[state,setState]=useState(false)
    
    const style={
        height:"50px",
        
    }
   
    return(
        <header className="header">
            
           
           <div className="nav-wrapper black " style={style} >
           <img src="https://img.icons8.com/color/48/000000/airbnb.png" className="left" alt=""/>
           <p className="text-white left mt-1 fw-bold fs-4 ms-3">AirHotel</p>
           <ul className="center pt-1">
                <li className="p-2 d-flex flex-row justify-content-center ">
                    <Link to="/hebergement" className="mt-2 text-white me-5 bd-highlight" text="hebergement" >hebergement</Link>
                    
                    <Links redirect="#" className="mt-2 text-white me-5  bd-highlight" text="voyages" />
                    <Links redirect="#" className="mt-2 text-white me-5 bd-highlight " text="Experience en ligne"/>
                    <div className="right text-white " style={{marginLeft:"30rem"}}>
                       <Links redirect="#" text="Devenez hotes" className="hotes text-white "/>
                       <BsGlobe style={{marginLeft:"5rem"}}/>
                       
                    </div>
                    <Link to="/inscription" className="text-white" text="Inscription" >Inscription</Link>
                    
                 
                </li>
                <Sidebars />
           </ul>
              
            </div> 

            {state? <SearchBar />:null}
            
             
           
        </header>
        
    )

}