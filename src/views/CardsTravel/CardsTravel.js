import { Voyage } from "../../Component/Cards/Voyage/Voyage"
import React, { useState } from "react"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import data from "../../features/data/data"
import { SearchBar } from "../../Component/SearchBar/SearchBar"
import { Search } from "../../Component/Search/Search"
export let fetchMoreData;
export const CardsTravel= ({classname})=>{
   const [dataCards,setDataCards]=useState([]);
   let [addData,setAddData]=useState(10)
const[loading,setLoading]=useState(false)
const[error,setError]=useState(false)
const [value,setValue]=useState('');
const [resultSearch,setResultSearch]=useState([])
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
       }, [dataCards,loading]);
       useEffect(()=>{
        fetchMoreData= async ()=>{
            setAddData(addData+100)
            setLoading(true)
            const response =  await fetch( `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${addData}&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features`)
            const newData = await response.json();
            const records2 =newData.records
         
    
            setDataCards(records2)
           
            if(response.status==="404"){
                console.log(response)
                setError("aucune donnée")
            }
         
        }
    
       },[addData,loading])
    
  
  
    return (
        <div>
            <Search classname="max-w-sm" value={value} setValue={setValue}/> 
             <Voyage dataCards={dataCards} loading ={loading} error={error} value={value} search={resultSearch} setLoading={setLoading}/> 
             <Button onClick={fetchMoreData} error={error}>Plus de données</Button> 
        </div>
    )
}