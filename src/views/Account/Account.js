import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CardsAccount } from "../../Component/Cards/CardsAccount"
import './Account.scss'
import { Payment } from "./Payment/Payment"
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const Account = () => {
    const style={
        backgroundColor:"white"
    }
    const[visible,setVisible]=useState(false)
    const[user,setUser]=useState()
   
    let location = useLocation()
    const auth = getAuth();
 
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
   
    
   
    return (
        <div style={style} className="Account">
            <h3>Gestion des parametres</h3>
            <div className="account-infos">
              
               {user && <h3>compte de {user.email}</h3>}
               {user && <p>{user.email}</p>}
                {  /*user ? <p onClick={()=>setVisible(true)}><strong>******</strong></p> :user &&<p onClick={()=>setVisible(false)}>{user.uid}</p>*/}
              
              
            </div>
            <div id="grid-account">
                
                    <Link to="payment" className="paiement-link" >
                    <CardsAccount style={{color:'rgb(34,34,34)',fontWeight:'600',fontSize:'16px'}} content="Paiements et versements" styleText={{marginTop:"2rem" , color:"rgb(113,113,113)"}} text ="Consultez les paiements, les versements, les coupons, les cartes cadeaux et les taxes." />
                   
                    
                    </Link>
                    
                    <CardsAccount style={{color:'rgb(34,34,34)',fontWeight:'600',fontSize:'16px'}} content = "Notifications" styleText={{marginTop:"2rem" , color:"rgb(113,113,113)"}} text="choisissez vos préférences de notifications et la façon dont vous voulez etre contacter" />
                
            </div>
           {/*location.pathname==="/account/payment"? <Payment/> : null*/}
        </div>
    )
}