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
export const Inscription = () => {
    
    const app = initializeApp(Firebase);
  const analytics = getAnalytics(app);
  const [emails,setEmail]=useState('');
  const [password,setPassword]=useState('');
const[click,setOnclick]=useState(false);
    const style={
        background:'white'
    }
    const {register,formState:{errors}} = useForm();
   

    
   const enregistre =()=>{
       console.log("test")
       try{
        setOnclick(true);
                const resp =  createUserWithEmailAndPassword(auth,emails,password);
            
                 console.log(resp);
              
             
       }
         catch(error){
             document.getElementById('error').innerHTML=error;
                console.log(error)
                
            }
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
            {emails && password && click  && <Alert severity="success"className='success'>Votre compte a été créé avec succès</Alert>}
            {/*!emails && !password && click && <Alert severity="error"className='error'>Veuillez remplir tous les champs</Alert>*/}
        </div>
    )
}
            
