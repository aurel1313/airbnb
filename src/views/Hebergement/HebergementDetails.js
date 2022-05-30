import { Button, Snackbar } from '@mui/material';
import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import './HebergementDetails.scss';
export const HebergementDetail = (data,props) => {
    let location = useLocation();
    let img =document.getElementById('img');
    const {id} = useParams();
    const datas =data;
   const angrandissementImage=()=>{
         img.style.transform="scale(1.5)";

   }
   const [open,setOpen]=React.useState(false);
   const handleClick=()=>{
         setOpen(true);
   }
   const handleClose=()=>{
            setOpen(false);
   }
    // "AIzaSyAcaImITkQU2WvI6GfMcLTw8KsmyUzDF6o"//
    return (
        <div className="detailsHebergement">
            <h1>details de l'hebergement</h1>
            <Link to="/hebergement" >Retour</Link>
            
            {
               /* Fetching the data from the API and displaying the data in the details section. */
                data.data.data.map((item,index)=>{
                    if(item.id==id){
                        {console.log(item)}
                        return(
                            <div key={index} className="details">
                                 <strong className='strong'>{item.name}</strong>
                             <div className='main'>
                               
                               <div>
                                    <img src={item.imageUrl} alt="image" height="500" width="800" className='imgDetails' onClick={()=>angrandissementImage()} id="img"/>
                               </div>
                               
                                
                                
                               <div className='paiement'>
                                     <div className='reserver'>
                                             <p style={{color:"black"}}>Le prix de l'hebergement: <strong>{item.price}{item.priceCurrency}</strong> par nuit</p>
                                             <Button onClick={handleClick} variant ="contained">reservation schedule is coming</Button>
                                             <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} message="calendrier de reservation bientot disponible"/>
                                             <div className='reserve'>
                                                 
                                                <Link to={`/hebergement/hebergementDetail/${id}/reservation`} className="reservation" >Reserver</Link>
                                             </div>
                                            
                                    </div>
                                   
                                </div>  
                               
                              
                                
                                
                            </div>
                                
                               
                            </div>
                            
                        )
                    }
                })
               
}
        </div>
    )
    
}