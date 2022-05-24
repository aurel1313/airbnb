import React, { useState } from 'react'
import { Images } from '../../Component/Images/Images'
import './Container.scss'
export const Container = () => {
    const [visible, setVisible] = useState(false)
   
    const style={
        display:"flex",
        flexDirection:"column",
        margin:"0 auto",
        background:"rgb(255,56,92)", 
        width:"100%",
        height:"30rem",
        paddingTop:"10%",
        width:"80%",
        borderRadius:"10px",
        justifyContent:"flex-start",
        marginTop:"5rem",
        alignItems:"center",
        
    }
  
    return (
        <div style={style}>
           <h1 className="text-white" style={{marginTop:"-2rem"}} >Aidez a  accueillir les refugies </h1>
           
          
            <div style={{border:"1px solid white",width:"10rem"}} >
                <a href="#" style={{color:"white"}}  >En savoir plus</a>
               
            </div>
          <div className='global-proposition'> 
          <div className='proposition'>
              <Images src="https://picsum.photos/id/11/1630/500" text="Profitez de votre voyage" style={{width:"80vw",height:"26.2rem"}}   />
              
          </div>
         <div className='activity'>
          <div >
              
              <Images src="https://picsum.photos/id/1002/2000/2150" visible={visible} style={{width:"30rem",height:'26rem'}} />
              
          </div>
          <div>
              <Images src="https://picsum.photos/id/1043/2000/2150" visible={visible} style={{width:'30rem',height:'26rem'}}/>
          </div>
        </div> 
       </div>
    </div>
    )
}