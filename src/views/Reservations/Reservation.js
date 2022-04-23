import axios from "axios";
import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../../Component/Button/Button";
import React from "react";
export const Reservation = (data) => {
    let location = useLocation();
    const{id} = useParams();
    const[dataReservation,setDataReservation] = useState([]);
    
    useEffect( async ()=>{
        const data = await axios('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json')
        setDataReservation(data.data)
    },[])
    dataReservation.map((item)=>{
        if(item.id==id){
            console.log(item)
        }
    })
    const viewPdf=()=>{
        let ids;
        dataReservation.map((item)=>{
            if(item.id==id){
                ids=item.id;
                const doc = new jsPDF();
                doc.text(
                    item.name +" "+ item.price+ item.priceCurrency,
                 
                    10,
                    10

                    
                    
                );
                doc.addImage(item.imageUrl, 'JPEG', 10, 20, 180, 160);
                doc.save("Reservation.pdf");
            }
        })
       
        
        
        
    }
    return (
        <div style={{background:"white"}}>
            <h1>Reservation</h1>
            <Button onClick={viewPdf}>Telecharger la reservation</Button>
            
        </div>
    )
}