import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Link, useLocation, useParams } from "react-router-dom";
import React  from 'react';
import './HebergementDetails.scss';
export const HebergementDetail = (data,props) => {
    let location = useLocation();
    let img =document.getElementById('img');
    const {id} = useParams();
    const datas =data;
   const angrandissementImage=()=>{
         img.style.transform="scale(1.5)";

   }
    // "AIzaSyAcaImITkQU2WvI6GfMcLTw8KsmyUzDF6o"//
    return (
        <div className="detailsHebergement">
            <h1>HebergementDetail</h1>
            <Link to="/hebergement" >Retour</Link>
            
            {
               /* Fetching the data from the API and displaying the data in the details section. */
                data.data.data.map((item,index)=>{
                    if(item.id==id){
                        return(
                            <div key={index} className="details">
                                <strong>{item.name}</strong>
                                <p>Le prix de l'hebergement: {item.price}{item.priceCurrency} par nuit</p>
                                <img src={item.imageUrl} alt="image" height="200" width="200" className='imgDetails' onClick={()=>angrandissementImage()} id="img"/>
                                
                                
                                <div id="map">
                                  <LoadScript googleMapsApiKey="AIzaSyAjelGkVsDOvlBHlglJf4pTEHw_GYfuVjo">
                                    <GoogleMap
                                        mapContainerStyle={{ height: "200px", width: "400px" }}
                                        zoom={8}
                                        center={{ lat: item.lat, lng: item.lng }}
                                    >
                                    </GoogleMap>
                                    </LoadScript>
                                </div>
                                {console.log(id)}
                                <Link to={`/hebergement/hebergementDetail/${id}/reservation`} className="reservation" >Reserver</Link>
                                
                                
                            </div>
                            
                        )
                    }
                })
               
}
        </div>
    )
    
}