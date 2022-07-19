import React, { useState } from "react"
import { BsGlobe } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { Links } from "../../Component/Links/Links"
import { SearchBar } from "../../Component/SearchBar/SearchBar"
import './Header.scss'
export const Header = () => {
    const[state,setState]=useState(false)
    
    const style={
        height:"50px",
        
    }
  const json = JSON.parse(localStorage.getItem('user'))
    return(
        <header className="header">
            
           
           <div className="nav-wrapper black " style={style} id="navigation">
           <img src="https://img.icons8.com/color/48/000000/airbnb.png" className="left mt-3" alt=""/>
           <p className="text-white left mt-4 fw-bold fs-4 ms-3">AirHotel</p>
           <ul className="navigation">
                <li className="links">
                    <Link to="/" className="mt-2 text-white me-5 bd-highlight">Accueil</Link>
                    <Link to="/hebergement" className="mt-2 text-white me-5 bd-highlight" text="hebergement" >hebergement</Link>
                    
                    <Links redirect="#" className="mt-2 text-white me-5  bd-highlight" text="voyages" />
                    <Links redirect="#" className="mt-2 text-white me-5 bd-highlight " text="Experience en ligne"/>
                    <div className="right text-white " style={{marginLeft:"30rem"}}>
                       <Links redirect="#" text="Devenez hotes" className="hotes text-white "/>
                       <BsGlobe style={{marginLeft:"5rem"}}/>
                       
                    </div>

             {!localStorage.getItem('user')&& <Link to="/inscription" className="text-white" text="Inscription" >Inscription</Link>}
                   
                   {/*console.log(json.user.email)*/}
                    <Link to="/connexion" className="text-white" text="Connexion" >Connexion</Link>
                    
               {localStorage.getItem('user')&& <Link to="/account" className="text-white">{json.user.email}</Link>}  
                </li>
                
           </ul>
              
            </div> 

            {state? <SearchBar />:null}
            
             
           
        </header>
        
    )

}