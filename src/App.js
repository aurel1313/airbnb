import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store from './app/store';
import { Connexion } from './views/Connexion/Connexion';
import { Container } from './views/Container/Container';
import { Header } from './views/Header/Header';
import { Hebergement } from './views/Hebergement/Hebergement';
import { HebergementDetail } from './views/Hebergement/HebergementDetails';
import { Inscription } from './views/Inscription/Inscription';
import { Logement } from './views/Logement/Logement';
import { LogementDetail } from './views/Logement/LogementDetail';
import Notifications from './views/Notification/Notifications';
import { Reservation } from './views/Reservations/Reservation';
function App() {
  
  
  // Initialize Firebase
 
  const style={
    backgroundColor:"black"
  }
 
  return (
    <div className="App" style={style}>
        <Provider store={store}>
        <Header/>,
       
        
        <Routes>
          <Route path="/" element={<Container/>}/>
          <Route path="logement" element={<Logement/>}>
        
          </Route>
         
          <Route path="inscription" element={<Inscription />} />
          <Route path="connexion" element={<Connexion/>}/>
          <Route path="notification" element={<Notifications/>}/>
           <Route path="hebergement" element={<Hebergement />} >
              <Route path="hebergementDetail/:id" element={<HebergementDetail />} />

                  
              </Route>
           
            
                <Route path="hebergement/hebergementDetail/:id/reservation" element={<Reservation/>} />
                <Route path="logement/logementDetail/:id" element={<LogementDetail/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
