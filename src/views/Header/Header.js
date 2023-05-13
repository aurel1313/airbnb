import React, { useEffect, useState } from 'react'
import { BsGlobe } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Links } from '../../Component/Links/Links'
import { SearchBar } from '../../Component/SearchBar/SearchBar'
import './Header.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import Switch from 'react-switch'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { color } from '@mui/system'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
export const Header = ({ setTheme, className }) => {
    const [state, setState] = useState(false)
    const [checked, setChecked] = useState(false)
    const [user, setUser] = useState()

    const themes = useContext(ThemeContext)
    const style = {
        backgroundColor: themes == 'dark' ? '#121212' : '#121212',
        color: themes == 'dark' ? 'white' : 'black',
    }
    if (checked) {
        setTheme('dark')

        document.body.style.backgroundColor = '#121212'
    } else {
        setTheme('light')

        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

    const email =
        JSON.parse(localStorage.getItem('user')) ||
        JSON.parse(localStorage.getItem('userGoogle'))

    return (
        <header className={className}>
            <div id="navigation">
                <img
                    src="https://img.icons8.com/color/48/000000/airbnb.png"
                    className="left mt-3"
                    alt=""
                />
                <p className=" font-['Roboto'] font-normal text-white left mt-4 fw-bold fs-4 ms-3">
                    AirHotel
                </p>

                <ul className="h-24" style={style}>
                    <li id="links" className="pt-4">
                        <Link
                            to="/"
                            className="mt-2 font-['Roboto'] font-normal text-white me-5 bd-highlight "
                        >
                            Accueil
                        </Link>
                        <Link
                            to="/hebergement"
                            className="mt-2 text-white me-5 bd-highlight"
                            text="hebergement"
                        >
                            hebergement
                        </Link>
                        {email && email.email && (
                            <Link
                                to="/avis"
                                className="mt-2 font-['Roboto'] font-normal text-white me-5  bd-highlight"
                            >
                                Avis
                            </Link>
                        )}
                        <Links
                            redirect="#"
                            className="mt-2 font-['Roboto'] font-normal text-white me-5  bd-highlight"
                            text="voyages"
                        />
                        <Links
                            redirect="#"
                            id="xpOnline"
                            className="mt-2 font-['Roboto'] font-normal text-white me-5 bd-highlight "
                            text="Experience en ligne"
                        />

                        <Links
                            redirect="#"
                            text="Devenez hotes"
                            className="hotes font-['Roboto'] font-normal text-white "
                        />
                        <BsGlobe
                            style={{ marginLeft: '2rem' }}
                            className="mr-2"
                        />

                        {!email && (
                            <Link
                                to="/inscription"
                                className="text-white"
                                text="Inscription"
                            >
                                Inscription
                            </Link>
                        )}

                        {email ? (
                            <Link
                                to="/connexion"
                                className="text-white"
                                text="deconnexion"
                            >
                                deconnexion
                            </Link>
                        ) : (
                            <Link
                                to="/connexion"
                                className="text-white ml-10"
                                text="Connexion"
                            >
                                Connexion
                            </Link>
                        )}

                        {email && (
                            <Link
                                to="/account"
                                className="text-white"
                                style={{ marginLeft: '2rem' }}
                            >
                                {email.email}
                            </Link>
                        )}

                        <div className="theme-button ml-10">
                            <WbSunnyOutlinedIcon
                                style={{
                                    color: 'yellow',
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
                                    color: 'yellow',
                                }}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            {state ? <SearchBar /> : null}
        </header>
    )
}
