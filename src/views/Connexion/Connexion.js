import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import React, { useState } from "react"

import { auth } from "../../config/Firebase/Firebase"
import './Connexion.scss'
export const Connexion = () => {
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');
  const [user,setUser] = useState({});
    
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    
    const style={
        background:'white'
    }
    const logout = async () => {
        await signOut(auth);
        window.location.reload();
        localStorage.removeItem('user');
    }
    const login = async () => {
        try {
            const user =await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
            console.log(loginPassword);
            localStorage.setItem('user', JSON.stringify(user));
           window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  
    return(
        <div className="connexion" style={style}>
            {
                !auth.currentUser ?
                <h1>
                    Connexion
                </h1> :
                <h1>
                    Bonjour {auth.currentUser.email}
                </h1>
            }
           
           
            <div className="formulaire">
                {!auth.currentUser &&
                <div className="fields">
                    <input type="text" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)} defaultValue={user?.email}/>
                    <input type="password" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)} />
                   {!auth.currentUser && <button onClick={login}>Connexion</button>}
                {auth.currentUser ? <p>{user?.email}</p> : <p>pas connecté</p>}
            </div>
}
            <button onClick={logout}>deconnexion</button> 
        </div>
    </div>
    )
}