import {useForm} from 'react-hook-form';
import React from "react"
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import './inscription.scss'
import { Box } from '@mui/system';
export const Inscription = () => {
    const style={
        background:'white'
    }
    const {register,formState:{errors},handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={style} >
            <h1>Inscription</h1>
            <div className='formulaire'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='fields'>
                        <Box component="form"sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                         }} noValidate autoComplete="off" className='forms'>
                    
                            <TextField {...register('nom',{
                                 required:true,
                                value:'',
                                message:'le nom est obligatoire'
                        })} variant="standard" label="Nom" />
                            {errors.nom && <Alert severity='error' >le nom est obligatoire</Alert>}
                   
                   
                       

                            <TextField {...register('prenom',{
                                    required:true,
                                    value:'',
                                    message:'le prenom est obligatoire'
                                })} variant="standard" label="prenom"/>
                        </Box>
                            {errors.prenom && <Alert severity='error' >le prenom est obligatoire</Alert>}
                    </div>
                   
                     <input type="submit" value="S'inscrire" />
                </form>

            </div>
        </div>
    )
}