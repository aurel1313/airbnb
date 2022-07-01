import React from "react";
import { useSelector } from "react-redux";
import { Form } from "../../Component/Form/Form";
export const AjoutLogement = () => {
    const style={
        background:"white"
    }
   const redux = useSelector((state) => state.data);

    return (
        <div style={style}>
            <h1>Ajouter un logement</h1>
            <div>
                <Form/>
            </div>
        </div>
    )
}