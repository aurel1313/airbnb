import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
export const LogementDetail = ()=>{
    const style={
        background:"white"
        
    }
    const redux = useSelector((state)=>state.data)
    const {id} =useParams()
    console.log(id)
    const datas = redux.value.records
    
    const data = datas.find((data)=>data)
   
   
        datas.map((data)=>{
            if(data.fields.id===id){
                console.log(data)
            }
        })
    const styleP ={
        color :'black',
       fontWeight:'100',
        marginTop :'10rem',
    }
    const style2={
        border :'1px solid black',
        marginLeft:'20vw',
        width:'70vw'
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
                                    <img src={data.fields.xl_picture_url} width="200" height="200" alt=""/>
                                    
                                </div>
                                    <p style={styleP}>{data.fields.description}</p>
                                </div>
                        )
                    }
                })
            }
        </div>
    )

}