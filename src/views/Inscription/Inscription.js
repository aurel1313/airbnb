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
   

    let resp;
   const enregistre =async()=>{
       try{
               resp = await createUserWithEmailAndPassword(auth,emails,password);
            
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
                           
                            {errors?.email?.type==='required' && <Alert severity="error">Email est obligatoire</Alert>}
                            {errors.email && <Alert severity='error' >le email est obligatoire</Alert>}
                          
                            
                            <TextField {...register('password',{
                                    required:true,
                                    value:'',
                                    message:'le password est obligatoire'
                                })} variant="standard" label="password" type='password' onChange={(e)=>setPassword(e.target.value)} />
                            {errors.password && <Alert severity='error' >le password est obligatoire</Alert>}
                            <Button variant ="contained" onClick={()=>[setOnclick(true),enregistre]}  >Inscription</Button>
                          </Box>
                        
                    </div>
                <div id="error"></div>
               
            </div>
            {emails && password && click  && <Alert severity="success"className='success'>Votre compte a été créé avec succès</Alert>}
            {!emails && !password && click && <Alert severity="error"className='error'>Veuillez remplir tous les champs</Alert>}
        </div>
    )
}
            
