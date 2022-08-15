import React, { useCallback, useEffect, useState } from "react"
import { collection, getDocs,addDoc } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";
import { useFileUpload } from 'use-file-upload'
import { db } from "../../config/Firebase/Firebase";
import { async } from "@firebase/util";
import { saveAs } from 'file-saver';


export const LogementAjout = () => {
    const style={
        backgroundColor:"white",
    }
   
    const[image,setImage]=React.useState()
    const[status,setStatus]=React.useState('')
    const [file, selectFile] = useFileUpload();
    const[files,setFile] =useState()
    const handleChange = (e) => {
        setImage(e.target.files[0])
        console.log(e.target.files[0])
        
      }
      const handleSubmit = (e) => {
          e.preventDefault()
          //addData()
      }

    /*const addData = () => {
        const file = collection(db,'files')
        
            addDoc(file,{
                filename:image.name,
                image:image
             })
      
      
   }
   var arrayImg =[]
   let img;
   let element 
   */
  
  
    /*let getData = () => {
            
        const file = collection(db,'files')
        
        getDocs(file).then(docs => {
           docs.docs.map(doc => {
                element = document.getElementById('id')
                
                arrayImg.push(doc.data())
                
                arrayImg.map(item => {
                    img = item.image
                    
                  
                    
                     
                    
                    
                   
                })
                
             
                
                
                
                
            })
        }
        )
       
    }
   
  

    getData()
    
  */

let imageNumberId
let img
let arr;
 let url
    if(file){
         img ={
            src:file,
            name:file.name
        }
        file.map(item => {
            console.log(item.name)
        })
        let items = localStorage.setItem('files', JSON.stringify(file)) || []
        items.push(img)
      
   
    }
   const storage =JSON.parse(localStorage.getItem('files'))
   console.log(arr)
    console.log(storage)
    let name = storage ? storage[0].name :null
 storage.map(item => {
    let source = new Blob([item.source], {type: 'application/octet-binary'});
    console.log(source)
   url = window.URL.createObjectURL(source);
    console.log(url)
    var reader = new FileReader();
    reader.onloadend = function() {
        var base64data = reader.result;
       
    }
    reader.readAsDataURL(source);
 })




        
return (
        <div style={style}>
              <h1>LogementAjout</h1>
              <form onSubmit={handleSubmit} method="post" action="/" >
            
                <button type="submit" onClick={()=>{
                    selectFile(
                        {multiple:true},(files)=>{
                            files.map(({ source, name, size, file }) =>{
                                console.log(source)
                                console.log(name)
                                console.log(size)
                                console.log(file)
                              
                             
                            }

                          )
                        }
                    )

                }} >Upload</button>
              
        {status && <h1>{status}</h1>}
 
        </form>
       <div>
        <h3>Image uploadé récemment</h3>
       
        {file ? file.map(({ source, name, size, file }) =>{
            return(
                <div>
                    <img src={source}></img>
                    <p>{name}</p>
                    <p>{size}</p>
                </div>
                )
        }):null}
            
        
        <div className="detailsUpload">
          
            <div>
                {
                    storage ? storage.map(({ src, name, size, file }) =>{
                        return(
                            <div className="items">
                               
                                <p>{name}</p>
                                <p>{size}</p>
                            </div>
                            )
                    }
                    ):null
                }
            </div>
        </div>
       </div>
        </div>
    )
}