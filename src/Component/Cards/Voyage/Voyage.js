import React, { useCallback, useEffect, useMemo, useState } from "react"
import { TailSpin } from  'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroller';
import { fetchMoreData } from "../../../views/CardsTravel/CardsTravel";
import data from "../../../features/data/data";
export const Voyage =({dataCards,loading,value,setLoading})=>{

 const [scrollPosition, setScrollPosition] = useState(0);
  const [resultSearch,setResultSearch]=useState(dataCards)
  let searchItems
  let resultats;
const limit =5;
    
 /*useEffect(()=>{
 

    resultats = dataCards.filter(item=>item.fields.market===value)
    //setResultSearch(dataCards.filter(item=>item.fields.market===value).slice(0,limit))
   
    console.log(resultats)
   
    
    
 },[resultats,value,limit])*/
 
  
  
   return(
    <div >
    
    
     {/* <InfiniteScroll    pageStart={0}  loadMore={fetchMoreData}className="grid grid-cols-3" hasMore={true || false}loader={<div className="loader" key={0}>Loading ...</div>}> */}
       
        {
          
          
               !value && dataCards.map((element,index) => {
               
              

                  return(
                    <div key={element.id} >
                 
                        <div  >
                            <div id="img" >
                              {element.fields.xl_picture_url &&<img src={element.fields.xl_picture_url} className="rounded-lg" width="300" height="300"  onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
                      }}/>}
                      {!element.fields.xl_picture_url && <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width="300" height="300"/>}
                             
                            </div>
                         
                             <div className="flex flex-col items-start mt-2">
                                <p className=" font-semibold">{element.fields.market}</p>
                             </div>
                        </div> 
                        
                    </div>
                 )
                 


                
                
               
                
               })
              
        }
         {/* </InfiniteScroll> */}
         
        {
          value &&  dataCards && dataCards.filter(item=>item.fields.market===value).slice(0,limit).map((search)=>{
           
          
            return (
              <div className="grid grid-cols-3"  key={search.id} >
                <div  >
                     {search.fields.xl_picture_url &&<img src={search.fields.xl_picture_url} className="rounded-lg" width="300" height="300"  onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
                      }}/>}
                       {!search.fields.xl_picture_url && <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width="300" height="300"/>}
                       <p>{search.fields.market}</p>
                </div>
                
              </div>
            )
            
          })
          
        }
        
        
       
       
       {loading && <TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
 
  visible={true}
/>}
    </div>
   )
}