import { Voyage } from "../../../Component/Cards/Voyage/Voyage"
import React, { useState } from "react"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import data from "../../../features/data/data"
export const CardsTravel= ()=>{
   const [dataCards,setDataCards]=useState([]);
   let [addData,setAddData]=useState(10)
const[loading,setLoading]=useState(false)
const[error,setError]=useState(false)
    useEffect(() => {
        async function loadData(){
            setLoading(true)
            const response =  await fetch( "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features")
            const newData = await response.json();
            const records =newData.records
            setDataCards(records)
            setLoading(false)
            if(response.status=='404'){
                setError(true)
            }   
        }
       
        loadData()
       }, []);
       const fetchMoreData= async ()=>{
        setAddData(addData+100)
        setLoading(true)
        const response =  await fetch( `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${addData}&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features`)
        const newData = await response.json();
        const records2 =newData.records
       console.log(records2)
        setDataCards(records2)
        setLoading(false)
    }
    
    return (
        <div>
            <Voyage dataCards={dataCards} loading ={loading} error={error}/>
            <Button onClick={fetchMoreData}>Plus de données</Button>
        </div>
    )
}