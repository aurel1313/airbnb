import { Button, Snackbar } from '@mui/material';
import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import './HebergementDetails.scss';
export const HebergementDetail = (data,{themes}) => {
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
        <div className={themes ==='dark'?"card  w-96  bg-dark-color text-white mt-5" :"card  card-bordered  w-full bg-white mt-5"} >
            <h1>details de l'hebergement</h1>
            <Link to="/hebergement" >Retour</Link>
            
            {
               /* Fetching the data from the API and displaying the data in the details section. */
               
                data.data.map((item,index)=>{
                    if(item.fields.host_id==id){
                        {console.log(item)}
                       
                        return(
                            <div key={index} >
                              
                       
                               
                               <figure>
                                    <img src={item.fields.xl_picture_url} alt="image"   onClick={()=>angrandissementImage()} />
                               </figure>
                               
                                <div className='card-title'>
                                     <strong className='strong'>{item.fields.name}</strong>
                               </div>
                                     <div className='card-actions' >
                                             <p style={{color:"black"}}>Le prix de l'hebergement: <strong>{item.fields.price}{item.fields.priceCurrency}</strong> par nuit</p>
                                             <Button onClick={handleClick} variant ="contained">reservation schedule is coming</Button>
                                             <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} message="calendrier de reservation bientot disponible"/>
                                             <div className='reserve'>
                                                 
                                                <Link to={`/hebergement/hebergementDetail/${id}/reservation`} className="reservation" >Reserver</Link>
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