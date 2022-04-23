
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StylishSidebar from 'stylish-sidebar';
import Setting from '../../assets/imgs/gear.svg';
import Notification from '../../assets/imgs/notifications.svg';
export const Sidebars = () => {
    const backgroundImage =false;
    const [show, setShow] = useState(false);
    /*const push = ()=>{
      history.push('/notifs')
      history.push(
        {
          pathname: '/notifs',
        }
      )
    }*/
   const paletteColor ={
    bgColor1: 'grey',
    bgColor2: '#f67062CC',
    fontColor: '#130f40',
    fontColorSelected: '#ffffff',
    dividerColor: '#e17055',
    selectedBackgroundCollapsedMode: 'dark'
   }
   
   const menuItems = [
     
      { name: 'Notifications', to: '/notification' ,subMenuItems:[],icon:Notification},
      { name: 'Settings', to: '/settings' , icon:Setting,subMenuItems:[
        { name: 'PaletteColor', to: '/paletteColor' },
      ] },
     

   ]
    

  if(window.location.pathname === '/paletteColor'){
    alert('test')
  }



   //const history = useHistory();
    //const location = useLocation();
    let navigate =useNavigate();
   const handleMenuItemClick = index => {
    for(let i=0;i<menuItems.length;i++){
     

      if(menuItems[i].name==index.target.innerText){
        console.log(menuItems[i])
        navigate(menuItems[i].to)
      }
    }
    
  
     
    };
  
   
   const style= {
    
    marginTop:'23px',
   
    
}
const header={
  fullName:"sidebar",
  shortName:"SB"
}
    return(
        <div style={style}>
                
                 
                
                  
                  
                   {/*<Notifications style={{
                        position:'fixed',
                        marginLeft:"7vw",
                       bottom:"2rem",
                       minWidth:'90rem',
                       backdropFilter:"blur(5px)",
                       
                       
                   }}  setShow={setShow}/>
                   
                  */}
               
            
            
                <StylishSidebar maxWidth="50rem" widthExpand="50%" backgroundImage={backgroundImage}  menuItems={menuItems}   header={header} isOpen={false} colorPalette={paletteColor} onMenuItemClick={handleMenuItemClick}   />
               
              
               
            
        </div>
    )

}