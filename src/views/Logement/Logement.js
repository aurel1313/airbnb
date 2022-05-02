import React from "react"
import './Logement.scss'
import { List } from "../../Component/List/List"
export const Logement = () => {
    
        fetch('')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

            const style={
                display:"flex",
                flexDirection:"column"
            }
    
    return (
        <div className="logement">
       
        <div>
            <List/>
        </div>
        </div>
    )
}