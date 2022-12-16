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
export const Header = ({setTheme}) => {
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

  const json = JSON.parse(localStorage.getItem('user'))
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user)
          setUser(user)
          // ...
        } else {
          // User is signed out
          // ...
          console.log("pas connecté")
          setUser(null)
        }
      });
  },[])

    return(
        <header className="header" >
            
            
           <div className="nav-wrapper black " style={style} id="navigation">
           <img src="https://img.icons8.com/color/48/000000/airbnb.png" className="left mt-3" alt=""/>
           <p className="text-white left mt-4 fw-bold fs-4 ms-3">AirHotel</p>
           
           <ul className="navigation">
                <li className="links">
                    <Link to="/" className="mt-2 text-white me-5 bd-highlight">Accueil</Link>
                    <Link to="/hebergement" className="mt-2 text-white me-5 bd-highlight" text="hebergement" >hebergement</Link>
                    
                  
                    <Links redirect="#" className="mt-2 text-white me-5  bd-highlight" text="voyages" />
                    <Links redirect="#" id="xpOnline" className="mt-2 text-white me-5 bd-highlight " text="Experience en ligne" />
                    <div className="right text-white " >
                       <Links redirect="#" text="Devenez hotes" className="hotes text-white "/>
                       <BsGlobe style={{marginLeft:"2rem"}}/>
                       
                    </div>
                   
                  

             {!user&& <Link to="/inscription" className="text-white" text="Inscription" >Inscription</Link>}
                   
                 
                   {user ? <Link to="/connexion" className="text-white" text="deconnexion" >deconnexion</Link>:<Link to="/connexion" className="text-white" text="Connexion" >Connexion</Link>}
                    
               {user&& <Link to="/account" className="text-white" style={{marginLeft:'2rem'}}>{user.email}</Link>} 

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