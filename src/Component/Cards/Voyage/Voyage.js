import React, { useState } from "react"
import { TailSpin } from  'react-loader-spinner'
export const Voyage =({dataCards,loading,error})=>{


   return(
    <div className="grid grid-cols-3">
     
       
        {
             dataCards.map((element) => {
                
                 
                
                 return(
                    <div>
                        <div className="border-2 rounded-md hover:border-purple-500" >
                            <div id="img">
                              {element.fields.xl_picture_url ? <img src={element.fields.xl_picture_url} />: <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"/>}
                              {error && <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"/>}
                            </div>
                         
                             <div className="flex flex-col">
                                <p className="font-semibold">{element.fields.city}</p>
                             </div>
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