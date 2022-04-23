import { useState } from "react";
import { Modal } from "react-bootstrap";
import React from "react";

 export const Notifications = (props) => {
    const [show, setShow] = useState(false);
   const data = fetch("https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
       document.getElementById('nom').innerHTML = data[0].name;
        document.getElementById('container').innerHTML = '<img src="'+data[0].imageUrl+'" alt="image" height="100" width="100"/>';

    })
  
    
    return (
        <div >
           
            {/* This is a modal dialog box. It is used to display a message to the user. */}
            <Modal.Dialog style={props.style} centered  dialogClassName="modal-90w"   >
            
                <Modal.Header closeButton>
                
                    <Modal.Title>Notifications</Modal.Title>
                   
                </Modal.Header>
                
                <Modal.Body>
                <h1>Nouveau Logement disponible</h1> 
                
               
                
                <p id="nom"></p>
                    <div id="container">
                       
                        
                   </div>
                   
                </Modal.Body>
                
            </Modal.Dialog>
            
               
            
        </div>
    )

}
export default Notifications;