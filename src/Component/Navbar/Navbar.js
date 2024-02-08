import React, { useState } from 'react'
import Switch from 'react-switch'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { color } from '@mui/system'
import { Link } from 'react-router-dom'
import { Links } from '../../Component/Links/Links'
import { BsGlobe } from 'react-icons/bs'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import useMediaQuery from '@mui/material/useMediaQuery'
export const Navbar = ({ style, checked, setChecked, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const email =
        JSON.parse(localStorage.getItem('user')) ||
        JSON.parse(localStorage.getItem('userGoogle'))

    const toogleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }
    const isMobile = useMediaQuery('(max-width: 600px)')
    return (
        <div
            className={`${
                theme === 'dark' ? 'text-white ' : 'text-dark-color '
            }`}
        >
            <nav style={{ height: '84px' }}>
                {isMobile && (
                    <div className="max:[600px]:hidden">
                        <button className="block " onClick={toogleMenu}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                )}
                <div
                    className={`${
                        menuOpen
                            ? 'flex flex-col justify-evenly items-center z-10 h-dvh  absolute top-0 right-0  w-full p-4 backdrop-blur bg-white/30'
                            : 'flex flex-row justify-around '
                    }`}
                >
                    {menuOpen && (
                        <div
                            className="absolute top-4 right-4 cursor-pointer bg-red-500 "
                            onClick={closeMenu}
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </div>
                    )}

                    <p className="    fw-bold max-[600px]:text-lg ">AirHotel</p>

                    <div className=" max-[600px]:border-2 max-[600px]:text-center max-[600px]:w-full hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        <Link
                            to="/"
                            className=" font-['Roboto'] font-normal align-center  bd-highlight  "
                        >
                            Accueil
                        </Link>
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        <Link
                            to="/hebergement"
                            className=" font-['Roboto'] font-normal  bd-highlight"
                            text="hebergement"
                        >
                            hebergement
                        </Link>
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        {email && email.email && (
                            <Link
                                to="/avis"
                                className=" font-['Roboto'] font-normal   bd-highlight"
                            >
                                Avis
                            </Link>
                        )}
                    </div>
                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        <Links
                            to="/"
                            className="font-['Roboto'] font-normal    bd-highlight"
                        >
                            Voyages
                        </Links>
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-auto  hover:bg-black hover:text-white   rounded-lg">
                        <Link
                            to="/XpOnline"
                            id="xpOnline"
                            className=" font-['Roboto'] font-normal  bd-highlight "
                        >
                            Experience en ligne
                        </Link>
                    </div>

                    <div className=" flex flex-row max-[600px]:text-center  hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        <Link
                            to="/"
                            className="font-['Roboto'] font-normal  bd-highlight"
                        >
                            Devenez hotes
                        </Link>
                        <BsGlobe
                            className={`${
                                theme == 'dark' ? 'fill-white' : 'fill-black'
                            }`}
                        />
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        {!email && (
                            <Link to="/inscription" text="Inscription">
                                Inscription
                            </Link>
                        )}
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        {email ? (
                            <Link to="/connexion" text="deconnexion">
                                deconnexion
                            </Link>
                        ) : (
                            <Link to="/connexion" text="Connexion">
                                Connexion
                            </Link>
                        )}
                    </div>

                    <div className="max-[600px]:text-center hover:h-12 hover:text-center hover:w-24  hover:bg-black hover:text-white rounded-lg">
                        {email && <Link to="/account">{email.email}</Link>}
                    </div>

                    <div className="theme-button ml-10">
                        <WbSunnyOutlinedIcon
                            style={{
                                color: theme == 'dark' ? 'yellow' : 'black',
                            }}
                        />
                        <Switch
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                        <ModeNightOutlinedIcon
                            className=""
                            style={{
                                color: theme == 'dark' ? 'yellow' : 'black',
                            }}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}
