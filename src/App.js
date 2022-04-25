import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Database } from './config/Database/Database';
import { Header } from './views/Header/Header';
import { Hebergement } from './views/Hebergement/Hebergement';
import { HebergementDetail } from './views/Hebergement/HebergementDetails';
import Notifications from './views/Notification/Notifications';
import { Reservation } from './views/Reservations/Reservation';
import { Inscription } from './views/Inscription/Inscription';
import React from 'react';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {Firebase} from './config/Firebase/Firebase';
import { getAnalytics } from 'firebase/analytics';
function App() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  
  // Initialize Firebase
 
  const style={
    backgroundColor:"black"
  }
 
  return (
    <div className="App" style={style}>
        
        <Header/>,
        <Container/>
        
        <Routes>
          
          <Route path="inscription" element={<Inscription />} />
          <Route path="notification" element={<Notifications/>}/>
           <Route path="hebergement" element={<Hebergement />} >
              <Route path="hebergementDetail/:id" element={<HebergementDetail />} />

                  
              </Route>
           
            
                <Route path="hebergement/hebergementDetail/:id/reservation" element={<Reservation/>} />
      </Routes>
    </div>
  );
}

export default App;
