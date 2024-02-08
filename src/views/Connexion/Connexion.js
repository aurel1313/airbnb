import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth'
import { FacebookAuthProvider, getRedirectResult } from 'firebase/auth'
import { TwitterAuthProvider } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { auth, Firebase } from '../../config/Firebase/Firebase'
import './Connexion.scss'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { Modals } from '../../Component/Modal/Modals'
import { TextField, Typography } from '@mui/material'
export const Connexion = ({ themes }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user1, setUser1] = useState()
    const [Isloading, setLoading] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState()

    const [modal, setModal] = useState(false)
    const [userGoogle, setUserGoogle] = useState([])
    const [userFacebook, setUserFacebook] = useState([])
    const [userTwitter, setUserTwitter] = useState([])
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const style = {
        background: 'white',
    }

    const theme = createTheme({
        typography: {
            button: {
                fontFamily: 'Roboto',
            },
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
    const logout = async () => {
        //auth.signOut()

        localStorage.removeItem('userGoogle')
        localStorage.removeItem('user')
        localStorage.removeItem('userfacebook')
        window.location.reload()
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className="flex flex-row    " style={{ height: '93vh' }}>
                    <div
                        className={
                            themes == 'dark'
                                ? '  w-1/2  text-white  flex justify-center items-center  '
                                : ' w-1/2  text-black flex flex-row items-center justify-center border-2 rounded-lg full   '
                        }
                    >
                        <div className=" space-y-3 flex flex-column items-center justify-center  ">
                            {!userBasic && !usersGoogle && !usersFacebook ? (
                                <>
                                    <TextField
                                        type="text"
                                        placeholder="email"
                                        label="email"
                                        focused
                                        variant="outlined"
                                        id="outlined-basic"
                                        className="w-full"
                                        onChange={(e) =>
                                            setLoginEmail(e.target.value)
                                        }
                                        //defaultValue={user1?.email}
                                    />

                                    <TextField
                                        type="password"
                                        variant="outlined"
                                        placeholder="password"
                                        className="w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setLoginPassword(e.target.value)
                                        }
                                    />

                                    <div className="flex flex-col ">
                                        <Button
                                            variant="contained"
                                            onClick={login}
                                            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
                                        >
                                            Connexion
                                        </Button>
                                        <Button
                                            className=" text-black  "
                                            variant="contained"
                                            onClick={authGoogle}
                                            startIcon={
                                                <GoogleIcon color="primary" />
                                            }
                                            style={{
                                                textTransform: 'capitalize',
                                                backgroundColor: '#FFFFFF',
                                                fontFamily: 'Roboto',
                                            }}
                                        >
                                            Se connecter avec Google
                                        </Button>
                                        <p style={{ fontFamily: 'roboto' }}>
                                            Ou
                                        </p>
                                        <Button
                                            className=" "
                                            variant="contained"
                                            startIcon={<FacebookIcon />}
                                            onClick={handleOpen}
                                            style={{
                                                textTransform: 'capitalize',
                                                backgroundColor: '#1877F2',
                                                fontFamily: 'Roboto',
                                            }}
                                        >
                                            Se connecter avec facebook
                                        </Button>
                                        <p style={{ fontFamily: 'roboto' }}>
                                            Ou
                                        </p>
                                        <Button
                                            className="bg-gradient-to-r from-red-500 to-black "
                                            variant="contained"
                                            startIcon={<TwitterIcon />}
                                            onClick={handleOpen}
                                            style={{
                                                textTransform: 'capitalize',
                                                fontFamily: 'Roboto',
                                            }}
                                        >
                                            Se connecter avec twitter
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="contained"
                                        onClick={logout}
                                        className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                                    >
                                        deconnexion
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    {!userBasic && !usersGoogle && !usersFacebook ? (
                        <div className="w-1/2 h-full  flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-emerald-500">
                            <p className=" font-semibold text-6xl ">
                                Connexion
                            </p>
                        </div>
                    ) : (
                        <div className="w-1/2 h-full  flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-emerald-500">
                            <p className=" font-semibold text-6xl ">
                                Deconnexion
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </ThemeProvider>
    )
}
