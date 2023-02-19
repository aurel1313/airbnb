import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { auth, Firebase } from "../../config/Firebase/Firebase"
import './Connexion.scss'
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook'
import { createTheme,ThemeProvider } from "@mui/system";
import { FacebookAuthProvider } from "firebase/auth";
export const Connexion = () => {
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');
  const [user1,setUser1] = useState();
  const [Isloading,setLoading] =useState(false)  
  const[click,setClick]=useState(false);
const [error,setError] =useState();
const[userGoogle,setUserGoogle]=useState([])
const[userFacebook,setUserFacebook] =useState([])
    const style={
        background:'white'
    }
   const theme = createTheme({
    typography:{
    fontFamily: [
        'Roboto',
        'sans-serif',
      ].join(','),
    },
   

   });
 
   
    const login = async () => {
        signInWithEmailAndPassword(auth,loginEmail,loginPassword).then((userCredential)=>{
            const user =userCredential.user;
            localStorage.setItem('user',JSON.stringify(user))
            setUser1(JSON.parse(localStorage.getItem('user')))
            console.log(user)
        }).catch((error)=>{
            setError(error);
        })
    }
  
  
    const logout = async() => {
        
       
       //auth.signOut()
        setUser1('')
        setUserGoogle('')
        setUserFacebook('')
        localStorage.removeItem('userGoogle');
        localStorage.removeItem('user')
        localStorage.removeItem('userfacebook')
        window.location.reload();
        
     }
     const provider = new GoogleAuthProvider();
     const auths =getAuth();
     const authGoogle = ()=>{
        signInWithPopup(auths,provider).then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token =credential.accessToken;
        const user = result.user;
     
        setUserGoogle(user)
        localStorage.setItem('userGoogle',JSON.stringify(user))
        window.location.reload();

     }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode,errorMessage,email,credential)
      });
     }
    let userBasic = JSON.parse(localStorage.getItem('user'));
    
    let usersGoogle =JSON.parse(localStorage.getItem('userGoogle'));
   
   const AuthFacebook= ()=>{
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    setUserFacebook(user)
    localStorage.setItem('userFacebook',JSON.stringify(user))
    window.location.reload();
   }
)}
let usersFacebook =JSON.parse(localStorage.getItem('userFacebook'));
console.log(usersFacebook)
    return(
        <div  style={style}>
            
           
           
           <div  className=" flex justify-center items-center h-screen " >
                {
                    !usersGoogle && !userBasic?.email &&
                <div className="border h-30 space-y-3"  >
                    <input type="text" placeholder="email" className="font-['Roboto'] font-normal text-xl" onChange={(e)=>setLoginEmail(e.target.value)} defaultValue={user1?.email}/>
                    <input type="password" placeholder="password" onChange={(e)=>setLoginPassword(e.target.value)} />
                   <Button variant="contained" onClick={login}>Connexion</Button>
                   <p className="font-['Roboto'] font-normal text-xl" >ou</p>
                   <div className="flex">
                   {
                    
                    !userBasic  && !usersGoogle && !usersFacebook &&
                    <div>
                         <Button className=" w-1/2" variant="contained" onClick={authGoogle} startIcon={<GoogleIcon/>} style={{textTransform:'lowercase'}}  >via google</Button>
                         <Button className="w-1/3" variant="contained" startIcon={<FacebookIcon/>} onClick={AuthFacebook}>via facebook</Button>
                    </div>
            }
                </div>
            </div>
                }

        {
            usersGoogle &&
            <div>
                    <img  className="rounded-full"src ="" />
                </div>
        }
           { userBasic?.email  && <Button variant="contained" onClick={logout}>deconnexion</Button>} 
           { usersGoogle  && <Button variant="contained" onClick={logout}>deconnexion</Button>} 
           { usersFacebook  && <Button variant="contained" onClick={logout}>deconnexion</Button>} 
           
        
         
        </div>
    </div>
    )
}