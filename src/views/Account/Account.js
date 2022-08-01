import React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CardsAccount } from "../../Component/Cards/CardsAccount"
import './Account.scss'
import { Payment } from "./Payment/Payment"
export const Account = () => {
    const style={
        backgroundColor:"white"
    }
    const[visible,setVisible]=useState(false)
    
    const json = JSON.parse(localStorage.getItem('user'))
    console.log(json)
    let location = useLocation()
    return (
        <div style={style} className="Account">
            <h3>Gestion des parametres</h3>
            <div className="account-infos">
                <h3>compte de {json.user.email}</h3>
                <p>{json.user.email}</p>
                {!visible ? <p onClick={()=>setVisible(true)}><strong>******</strong></p> : <p onClick={()=>setVisible(false)}>{json.user.uid}</p>}
                
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