import React, { useEffect, useState } from "react"
import { BsGlobe } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { Links } from "../../Component/Links/Links"
import { SearchBar } from "../../Component/SearchBar/SearchBar"
import './Header.scss'
import { useContext } from "react"
import { ThemeContext } from "../../App"
import Switch from "react-switch";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const Header = ({setTheme,className}) => {
    const[state,setState]=useState(false);
    const [checked,setChecked]=useState(false);
    const [user,setUser]=useState()
    const style={
        height:"50px",
        
    }
    const themes = useContext(ThemeContext);
    if(checked){
        setTheme("dark");
       
        document.body.style.backgroundColor = "black";

    }else{
        setTheme("light");
        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    const email = JSON.parse(localStorage.getItem('user'))||JSON.parse(localStorage.getItem('userGoogle'))


    return(
        
        <header className={className}  >
            
            
           <div className="nav-wrapper black h-50" style={style} id="navigation">
           <img src="https://img.icons8.com/color/48/000000/airbnb.png" className="left mt-3" alt=""/>
           <p className=" font-['Roboto'] font-normal text-white left mt-4 fw-bold fs-4 ms-3">AirHotel</p>
           
           <ul className="navigation">
                <li className="links">
                    <Link to="/" className="mt-2 font-['Roboto'] font-normal text-white me-5 bd-highlight ">Accueil</Link>
                    <Link to="/hebergement" className="mt-2 text-white me-5 bd-highlight" text="hebergement" >hebergement</Link>
                    
                  
                    <Links redirect="#" className="mt-2 font-['Roboto'] font-normal text-white me-5  bd-highlight" text="voyages" />
                    <Links redirect="#" id="xpOnline" className="mt-2 font-['Roboto'] font-normal text-white me-5 bd-highlight " text="Experience en ligne" />
                    <div className="right text-white " >
                       <Links redirect="#" text="Devenez hotes" className="hotes font-['Roboto'] font-normal text-white "/>
                       <BsGlobe style={{marginLeft:"2rem"}}/>
                       
                    </div>
                   
                  

             {!email&& <Link to="/inscription" className="text-white" text="Inscription" >Inscription</Link>}
                   
                 
                   {email ? <Link to="/connexion" className="text-white" text="deconnexion" >deconnexion</Link>:<Link to="/connexion" className="text-white" text="Connexion" >Connexion</Link>}
                    
               {email&& <Link to="/account" className="text-white" style={{marginLeft:'2rem'}}>{email.email}</Link>} 

                    <div className="theme-button">
                        <label className="text-white" >Theme</label> 
                        <Switch checked={checked} onChange={()=>setChecked(!checked)}   uncheckedIcon={false}
            checkedIcon={false}/>
            
                    </div> 
                </li>
                
           </ul>
           
            </div> 
            
            {state? <SearchBar />:null}
            
             
           
        </header>
        
    )

}