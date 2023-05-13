import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import React, { createContext } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import store from './app/store'
import { Connexion } from './views/Connexion/Connexion'
import { Container } from './views/Container/Container'
import { Header } from './views/Header/Header'
import { Hebergement } from './views/Hebergement/Hebergement'
import { HebergementDetail } from './views/Hebergement/HebergementDetails'
import { Inscription } from './views/Inscription/Inscription'
import { AjoutLogement } from './views/Logement/AjoutLogement'
import { Logement } from './views/Logement/Logement'
import { LogementDetail } from './views/Logement/LogementDetail'
import Notifications from './views/Notification/Notifications'
import { Reservation } from './views/Reservations/Reservation'
import { LogementAjout } from './views/Logement/LogementAjout'
import { Account } from './views/Account/Account'
import { Payment } from './views/Account/Payment/Payment'
import { CardsTravel } from './views/CardsTravel/CardsTravel'
import { useState } from 'react'
import { Filter } from './Component/Filter/Filter'
import { Avis } from './views/Avis/Avis'
export const ThemeContext = createContext('light')
function App() {
    const [theme, setTheme] = useState('light')

    // Initialize Firebase

    const style = {
        backgroundColor: 'black',
    }

    return (
        <div className="App">
            <React.StrictMode>
                <Provider store={store}>
                    <ThemeContext.Provider value={theme}>
                        <Header setTheme={setTheme} />
                    </ThemeContext.Provider>

                    <ThemeContext.Provider value={theme}>
                        <Routes>
                            <Route
                                path="/"
                                element={<Container setTheme={setTheme} />}
                            />

                            <Route
                                path="logement"
                                element={<Logement />}
                            ></Route>
                            <Route
                                path="logement/ajouterLogement"
                                element={<AjoutLogement />}
                            />
                            <Route
                                path="inscription"
                                element={<Inscription />}
                            />
                            <Route
                                path="connexion"
                                element={<Connexion themes={theme} />}
                            />
                            <Route path="account" element={<Account />}></Route>
                            <Route
                                path="account/payment"
                                element={<Payment />}
                            />
                            <Route path="avis" element={<Avis />}></Route>
                            <Route
                                path="notification"
                                element={<Notifications />}
                            />
                            <Route path="hebergement" element={<Hebergement />}>
                                <Route
                                    path="hebergementDetail/:id"
                                    element={<HebergementDetail />}
                                />
                            </Route>

                            <Route
                                path="hebergement/hebergementDetail/:id/reservation"
                                element={<Reservation />}
                            />
                            <Route
                                path="logement/logementDetail/:id"
                                element={<LogementDetail />}
                            />
                            <Route
                                path="logement/logementAjout"
                                element={<LogementAjout />}
                            />
                            <Route path="filtreMer" element={<Filter />} />
                        </Routes>
                    </ThemeContext.Provider>
                </Provider>
            </React.StrictMode>
        </div>
    )
}

export default App
