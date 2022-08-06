import React from "react"
import './CardsAccount.scss'
export const CardsAccount = (props) => {
    return (
        <div className="cardsAccount">
            <strong style={props.style}>{props.content}</strong>
            <p style= {props.styleText}>{props.text}</p>
        </div>
    )
}