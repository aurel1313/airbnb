import {useForm} from 'react-hook-form';
import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import './inscription.scss'
import { Box } from '@mui/system';
import { Database } from '../../config/Database/Database';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

import {Firebase} from '../../config/Firebase/Firebase';
import { getAnalytics } from 'firebase/analytics';
import { auth } from '../../config/Firebase/Firebase';
import { Button } from '@mui/material';
import { FacebookAuthProvider, getRedirectResult } from 'firebase/auth'
import { TwitterAuthProvider } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { signInWithPopup } from 'firebase/auth';
export const Inscription = () => {
    
    const app = initializeApp(Firebase);
  const analytics = getAnalytics(app);
  const [emails,setEmail]=useState('');
  const [password,setPassword]=useState('');
const[click,setOnclick]=useState(false);
const[erreur,setError]=useState()
const [userGoogle, setUserGoogle] = useState([])
const [userFacebook, setUserFacebook] = useState([])
const [userTwitter, setUserTwitter] = useState([])
    const style={
        background:'white'
    }
    const {register,formState:{errors}} = useForm();
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
   const enregistre =async ()=>{
       console.log("test")
     
        setOnclick(true);
                createUserWithEmailAndPassword(auth,emails,password).then((userCredential)=>{
                    const user = userCredential.user
                    setError(null)
                }).catch((error)=>{
                    console.log(error.message)
                    setError(error)
                });
            
                 
              
             
       
         
   }
   const provider = new GoogleAuthProvider()
   const auths = getAuth()
   const authGoogle = () => {
       signInWithPopup(auths, provider)
           .then((result) => {
               const credential =
                   GoogleAuthProvider.credentialFromResult(result)
               const token = credential.accessToken
               const user = result.user

               setUserGoogle(user)
               localStorage.setItem('userGoogle', JSON.stringify(user))
               window.location.reload()
           })
           .catch((error) => {
               // Handle Errors here.
               const errorCode = error.code
               const errorMessage = error.message
               // The email of the user's account used.
               const email = error.customData.email
               // The AuthCredential type that was used.
               const credential = GoogleAuthProvider.credentialFromError(error)
               // ...
               console.log(errorCode, errorMessage, email, credential)
           })
    
   }
   let userBasic = JSON.parse(localStorage.getItem('user'))

   let usersGoogle = JSON.parse(localStorage.getItem('userGoogle'))

   const AuthFacebook = () => {
       const auth = getAuth()
       const provider = new FacebookAuthProvider()
       getRedirectResult(auth).then((result) => {
           // The signed-in user info.
           const user = result.user

           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
           const credential = FacebookAuthProvider.credentialFromResult(result)
           const accessToken = credential.accessToken
           setUserFacebook(user)
           localStorage.setItem('userFacebook', JSON.stringify(user))

           window.location.reload()
       })
   }
   let usersFacebook = JSON.parse(localStorage.getItem('userFacebook'))

   const authTwitter = () => {
       /*const provider = new TwitterAuthProvider();
   const auth = getAuth();
   signInWithPopup(auth, provider)
 .then((result) => {
   // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
   // You can use these server side with your app's credentials to access the Twitter API.
   const credential = TwitterAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   const secret = credential.secret;

   // The signed-in user info.
   const user = result.user;
   // IdP data available using getAdditionalUserInfo(result)
   // ...
 }).catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = TwitterAuthProvider.credentialFromError(error);
   // ...
 });*/
   }
   
   
    return (
        <div style={style} >
            <h1>Inscription</h1>
            <div className='formulaire'>
               
                    <div className='fields'>
                        <Box component="form"sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                         }} noValidate autoComplete='nope' className='forms'>
                    
                       
                   
                            <TextField {...register('email',{
                                    required:true,
                                    
                                
                                })} variant="standard" label="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" autoComplete='off' />
                           
                            
                            {errors.email && <Alert severity='error' >le email est obligatoire</Alert>}
                          
                            
                            <TextField {...register('password',{
                                    required:true,
                                    value:'',
                                   
                                })} variant="standard" label="password" type='password' onChange={(e)=>setPassword(e.target.value)} />
                            {errors.password && <Alert severity='error' >le password est obligatoire</Alert>}
                           
                          </Box>
                          
                    </div>
                    
               
            </div>
            <button onClick={enregistre} >Inscription</button>

            {!userBasic && !usersGoogle && !usersFacebook && (
                                <div className="flex flex-col ">
                                    <Button
                                        className="bg-gradient-to-r from-red-500 to-black "
                                        variant="contained"
                                        onClick={authGoogle}
                                        startIcon={<GoogleIcon />}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        google
                                    </Button>
                                    <Button
                                        className="bg-gradient-to-r from-red-500 to-black "
                                        variant="contained"
                                        startIcon={<FacebookIcon />}
                                        onClick={handleOpen}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        facebook
                                    </Button>
                                    <Button
                                        className="bg-gradient-to-r from-red-500 to-black "
                                        variant="contained"
                                        startIcon={<TwitterIcon />}
                                        onClick={handleOpen}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        twitter
                                    </Button>
                                </div>
                            )}
            { !erreur && emails && password && click   &&<Alert severity="success"className='success'>Votre compte a été créé avec succès</Alert>}
            {erreur ? erreur.message :null}
            {/*!emails && !password && click && <Alert severity="error"className='error'>Veuillez remplir tous les champs</Alert>*/}
        </div>
    )
}
            
