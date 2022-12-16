import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"

import { auth } from "../../config/Firebase/Firebase"
import './Connexion.scss'
export const Connexion = () => {
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');
  const [user,setUser] = useState();
  const [Isloading,setLoading] =useState(false)  
  const[click,setClick]=useState(false);
const [error,setError] =useState();
    const style={
        background:'white'
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user)
          // ...
        } else {
          // User is signed out
          // ...
          console.log("user is not signout")
          
        }
      });
   
    const login = async () => {
        signInWithEmailAndPassword(auth,loginEmail,loginPassword).then((userCredential)=>{
            const user =userCredential.user;
            setUser(user)
        }).catch((error)=>{
            setError(error);
        })
    }
  
   
    const logout = () => {
        
       
       auth.signOut()
       window.location.reload();
        
     }

    return(
        <div className="connexion" style={style}>
            
            {
              /*  !auth.currentUser ?
                <h1>
                    Connexion
                </h1> :
                <h1>
                    Bonjour {auth.currentUser.email}
                </h1>
                */
            }
           
           
           <div className="formulaire">
                {!user &&
                <div className="fields">
                    <input type="text" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)} defaultValue={user?.email}/>
                    <input type="password" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)} />
                   <button onClick={login}>Connexion</button>
                
            </div>
}
{user? <p>{user?.email}</p> : <p>pas connecté</p>}
           {user && <button onClick={logout}>deconnexion</button>}  
   

         
        </div>
    </div>
    )
}