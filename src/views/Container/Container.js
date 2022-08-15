import React, { useState } from 'react'
import { Images } from '../../Component/Images/Images'
import './Container.scss'
import { useContext } from 'react'
import { ThemeContext } from "../../App"
export const Container = () => {
    const [visible, setVisible] = useState(false)
    const themes = useContext(ThemeContext);
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
    const styleLink={
        color:"white",
    }
  console.log(themes)
  if(themes==="dark"){
        
        style.color="white"
        styleLink.color="white"
       
    }else if(themes==="light"){
       
        style.color="black"
        styleLink.color="black"
        
        console.log(style)
    }
    return (
        <div style={style}>
           <h1  style={{marginTop:"-2rem"}} >Aidez a  accueillir les refugies </h1>
           
          
            <div style={{border:"1px solid white",width:"10rem"}} >
                <a href="#" style={styleLink}>En savoir plus</a>
               
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