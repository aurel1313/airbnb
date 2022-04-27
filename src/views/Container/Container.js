import './Container.scss'
import React from 'react'
import { Images } from '../../Component/Images/Images'
import { useState } from 'react'
import { Button } from '../../Component/Button/Button'
export const Container = () => {
    const [visible, setVisible] = useState(false)
   
    const style={
        display:"flex",
        flexDirection:"column",
        margin:"0 auto",
        background:"rgb(255,56,92)", 
        width:"100%",
        height:"30rem",
        paddingTop:"50px",
        width:"80%",
        borderRadius:"10px",
        justifyContent:"flex-start",
        marginTop:"5rem"
        
    }
  
    return (
        <div style={style}>
           <h1 className="text-white" style={{marginTop:"-2rem"}} >Aidez a  accueillir les refugies </h1>
           
          
            <div style={{border:"1px solid white",width:"10rem" ,marginLeft:"15rem"}} >
                <a href="#" style={{color:"white"}}  >En savoir plus</a>
               
            </div>
            
          <div className='proposition'>
              <Images src="https://picsum.photos/id/11/1630/500" text="Profitez de votre voyage"   />
              
          </div>
         <div className='activity'>
          <div >
              
              <Images src="https://picsum.photos/id/1002/2000/2150" visible={visible} style={{width:"30rem"}} />
              
          </div>
          <div>
              <Images src="https://picsum.photos/id/1043/2000/2150" visible={visible} style={{width:'30rem'}}/>
          </div>
           
       </div>
    </div>
    )
}