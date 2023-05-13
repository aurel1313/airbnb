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
import { GoogleAuthProvider } from 'firebase/auth'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, createTheme, ThemeProvider } from '@mui/system'
import { FacebookAuthProvider, getRedirectResult } from 'firebase/auth'
import { TwitterAuthProvider } from 'firebase/auth'
import { Modals } from '../../Component/Modal/Modals'
export const Connexion = ({ themes }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user1, setUser1] = useState()
    const [Isloading, setLoading] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState()
    const [userGoogle, setUserGoogle] = useState([])
    const [userFacebook, setUserFacebook] = useState([])
    const [userTwitter, setUserTwitter] = useState([])
    const [modal, setModal] = useState(false)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
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
            })
            .catch((error) => {
                setError(error)
            })
    }

    const logout = async () => {
        //auth.signOut()
        setUser1('')
        setUserGoogle('')
        setUserFacebook('')
        localStorage.removeItem('userGoogle')
        localStorage.removeItem('user')
        localStorage.removeItem('userfacebook')
        window.location.reload()
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
    console.log(themes)
    return (
        <div className="flex flex-row">
            <div
                className={
                    themes == 'dark'
                        ? '  w-1/2  text-white  flex justify-center items-center h-screen '
                        : ' w-1/2  flex flex-row items-center justify-center border-2 rounded-md h-screen  '
                }
            >
                {!usersGoogle && !userBasic?.email && (
                    <div className=" space-y-3 ">
                        <input
                            type="text"
                            placeholder="email"
                            className="font-['Roboto'] font-normal text-xl"
                            onChange={(e) => setLoginEmail(e.target.value)}
                            defaultValue={user1?.email}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={login}
                            className="bg-gradient-to-r from-red-500 to-black "
                        >
                            Connexion
                        </Button>
                        <p className="font-['Roboto'] font-normal text-xl">
                            ou
                        </p>
                        <div className="flex justify-center">
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
                        </div>
                    </div>
                )}

                {usersGoogle && (
                    <div>
                        <img className="rounded-full" src="" />
                    </div>
                )}
                <div className="">
                    {userBasic?.email && (
                        <Button variant="contained" onClick={logout}>
                            deconnexion
                        </Button>
                    )}
                    {usersGoogle && (
                        <Button variant="contained" onClick={logout}>
                            deconnexion
                        </Button>
                    )}
                    {usersFacebook && (
                        <Button variant="contained" onClick={logout}>
                            deconnexion
                        </Button>
                    )}
                </div>

                {open && (
                    <Modals
                        open={open}
                        handleClose={handleClose}
                        theme={themes}
                    />
                )}
            </div>
            <div className="w-1/2 h-screen bg-gradient-to-b from-red-500 to-black flex items-center">
                <p className="text-white font-semibold text-6xl ">Connexion</p>
            </div>
        </div>
    )
}
