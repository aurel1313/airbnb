import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Cards } from '../../Component/Cards/Cards'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export const Hebergement = () => {
    const [data, setData] = useState([])
    const [numberData,setNumberData] =useState(10);
    const themes = useContext(ThemeContext)
    
   
 

      useEffect(()=>{
        axios.get(  `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${numberData}&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&facet=landscape&refine.features=Instant%20Bookable`)
        .then(response=>{
           
             setData(response.data.records)
        }).catch(error=>{
             console.log(error)
        })
      },[])
      
            
          
        
       
      
    
   
    let location = useLocation()
    const style = {
        backgroundColor: 'white',
        color:'black'
    }
    if (themes === 'dark') {
        style.backgroundColor = 'black'
        style.color="white"
    } else {
        style.backgroundColor = 'white'
        style.color="black"
    }
    return (
       
            <div  >
                {location.pathname == '/hebergement' && <h1 className='font-sans text-2xl flex justify-center'>Hebergement</h1>}

                {<Cards data={data} style={style} themes={themes}/>}
            </div>
        
    )
}
