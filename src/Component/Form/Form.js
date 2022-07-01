import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../features/data/data";
import { Input2 } from "../Input/Input";
import { Upload } from "../Upload/Upload";

export const Form = (props) => {
    const [value, setValue] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
      
    }
    const redux = useSelector((state) => state.data);
 const [pictures, setPictures] = React.useState({});
const [pictures2, setPictures2] = React.useState(null);
   const dispatch = useDispatch();
  
  
   useEffect(() => {
        fetch("/api").then((res) => res.json()).then((data) => {
            setPictures2(data.message);
            console.log(data);
            
        })
        fetch('/test').then((res) => res.json()).then((data) => {
            setPictures(data.message);
            console.log(data);
            
        })
   });
    
  
      
    
       
    
  
  
    return (
        <div >
            
                <Input2 type="text" id="nom" label="Nom du logement" labelClassName="label"  onChange={handleChange} value={props.value} style={{width:'30vw'}} />
                <Upload pictures={pictures} setPictures={setPictures}>
                    
                </Upload>
                <form action="/" method="post">
                    <input type="submit"/>
                </form>
                <p>{!pictures2 ? "Chargement ..." : pictures2}</p> 
              
                
               
        </div>

    )
}