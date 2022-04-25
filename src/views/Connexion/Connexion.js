import React from "react"
import { auth } from "../../config/Firebase/Firebase"
import './Connexion.scss'
import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { signOut } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
export const Connexion = () => {
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');
    const [user,setUser] = useState({});
    
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    console.log(auth)
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
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
           window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  
    return(
        <div className="connexion" style={style}>
            <h1>Connexion</h1>
            <div className="formulaire">
                <div className="fields">
                    <input type="text" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)} defaultValue={user?.email}/>
                    <input type="password" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)} />
                   {!auth.currentUser && <button onClick={login}>Connexion</button>}
                {auth.currentUser ? <p>{user?.email}</p> : <p>pas connecté</p>}
            </div>
            <button onClick={logout}>deconnexion</button>
        </div>
    </div>
    )
}