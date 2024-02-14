import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { auth, Firebase } from '../../config/Firebase/Firebase'
import './Connexion.scss'

import { Box, createTheme, ThemeProvider } from '@mui/system'

import { Modals } from '../../Component/Modal/Modals'
import { TextField } from '@mui/material'
export const Connexion = ({ themes }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user1, setUser1] = useState()
    const [Isloading, setLoading] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState()
   
    const [modal, setModal] = useState(false)
  
  
    const style = {
        background: 'white',
    }
    const theme = createTheme({
        typography: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
        },
    })
    const background = require('../../assets/imgs/img1.jpg')
    const login = async () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                const user = userCredential.user
                localStorage.setItem('user', JSON.stringify(user))
                setUser1(JSON.parse(localStorage.getItem('user')))
                console.log(user)
                window.location.reload()
            })
            .catch((error) => {
                setError(error)
            })
    }

    const logout = async () => {
        //auth.signOut()
     
        localStorage.removeItem('userGoogle')
        localStorage.removeItem('user')
        localStorage.removeItem('userfacebook')
        window.location.reload()
    }
  
 
    return (
        <div className="flex flex-row">
            <div
                className={
                    themes == 'dark'
                        ? '  w-1/2  text-white  flex justify-center items-center h-screen '
                        : ' w-1/2  text-black flex flex-row items-center justify-center border-2 rounded-lg h-screen   '
                }
            >
     
                    <div className=" space-y-3 flex flex-column items-center justify-center">
                        
                       
                        <TextField
                            type="text"
                            placeholder="email"
                            autoComplete='false'
                            label="email"
                            focused
                            variant='outlined'
                            id="outlined-basic"
                            onChange={(e) => setLoginEmail(e.target.value)}
                            //defaultValue={user1?.email}
                          
                        />
                       
                        <TextField
                            type="password"
                            variant="outlined"
                            placeholder="password"
                            autoComplete='false'
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={login}
                            className="bg-gradient-to-r from-red-500 to-black "
                        >
                            Connexion
                        </Button>
                        
                    </div>
           

                <div className="">
                    {localStorage.getItem('user') && (
                        
                        <Button variant="contained" onClick={logout}>
                            deconnexion
                        </Button>
                    )}
                   
                </div>

                
            </div>
            <div className="w-1/2 h-screen  flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-emerald-500">
                <p className=" font-semibold text-6xl ">Connexion</p>
            </div>
        </div>
    )
}
