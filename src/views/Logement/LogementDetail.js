import { Button } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
export const LogementDetail = ()=>{
    const style={
        background:"white"
        
    }
    const redux = useSelector((state)=>state.data)
    const {id} =useParams()
    
    const datas = redux.value.records
    
    const data = datas.find((data)=>data)
    const json = JSON.parse(localStorage.getItem('user'))
   
        /*datas.map((data)=>{
            if(data.fields.id===id){
                console.log(data)
            }
        })*/
    const styleP ={
        color :'black',
       fontWeight:'100',
        marginTop :'10rem',
    }
    const styleP2={
        color :'black',
       fontWeight:'100',
    }
    const style2={
        border :'1px solid black',
        marginLeft:'20vw',
        width:'70vw',
        boxShadow:'0px 0px 10px black',
        borderRadius:'10px',
    }
 
    return (
        <div style={style}>
            <h1>Logement Detail</h1>
            {
                  datas.map((data)=>{
                    if(data.fields.id===id){
                        return(
                            <div style={style2}>
                                <h1>{data.fields.name}</h1>
                             
                                <div>
                                   
                                    <img src={data.fields.xl_picture_url} width="300" height="200" alt=""/>
                                    
                             
                                </div>
                                    <p style={styleP}>{data.fields.description}</p>
                                    <p style={styleP}>{data.fields.city}</p>
                                    <div>
                                        <h3>Infos sur l'hebergeur</h3>
                                        <p style={styleP2}>{data.fields.host_name}</p>
                                    </div>
                                   {!json? <Link to="/connexion">Connectez vous pour reserver</Link> : <Link to="" style={{pointerEvents:'none'}}>Reserver</Link>}
                                    {json && json.user.email=="aurelienfabre439@gmail.com" ? 
                                        <Button variant="contained" color="primary" style={{marginLeft:'20vw',marginTop:'10rem'}}>ajouter des photos</Button>
                                    :null}
                                </div>
                        )
                    }
                })
            }
        </div>
    )

}