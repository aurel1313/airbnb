import { Voyage } from "../../../Component/Cards/Voyage/Voyage"
import React, { useState } from "react"
import { useEffect } from "react"

export const CardsTravel= ()=>{
   const [dataCards,setDataCards]=useState([]);

    useEffect(() => {
        fetch( "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features")
         .then((response) => response.json())
         .then((data)=>{
            console.log(data.records)
            setDataCards(data.records)
         })
       }, []);
    
    
    return (
        <div>
            <Voyage dataCards={dataCards}/>
        </div>
    )
}