import 'bootstrap/dist/css/bootstrap.min.css'

import React, { createContext,useEffect } from 'react'
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
import { HomeTravel } from './Component/Cards/Voyage/HomeTravel'
export let fetchMoreData
export const ThemeContext = createContext('light')
function App() {
    const [theme, setTheme] = useState('light')
    const [dataCards, setDataCards] = useState([])
    let [addData, setAddData] = useState(10)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [value, setValue] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    const [filtrePlage, setFiltrePlage] = useState()
    const [clickLink, setClickLink] = useState(false)
    
    useEffect(() => {
        async function loadData() {
            setLoading(true)
            const response = await fetch(
                'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features'
            )
            const newData = await response.json()
            const records = newData.records

            if (response.status == '404') {
                setError(true)
            }
        }

        loadData()
    }, [dataCards, loading])
    useEffect(() => {
        fetchMoreData = async () => {
            setAddData(addData + 100)

            const response = await fetch(
                `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${addData}&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features`
            )
            const newData = await response.json()
            const records2 = newData.records

            if (response.status === '404') {
                console.log(response)
                setError('aucune donnée')
            }
            if (records2.length <= 300) {
                setDataCards(records2)
            }
        }
    }, [dataCards, addData, loading])
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
                                element={<Container setTheme={setTheme}     dataCards={dataCards}
                                loading={loading}
                                error={error}
                                value={value}
                                search={resultSearch}
                                setLoading={setLoading}
                                clickLink={clickLink} 
                                setValue ={setValue}/>}
                            />
                            <Route path='/:id' element={<HomeTravel dataCards={dataCards}/>}/>
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
