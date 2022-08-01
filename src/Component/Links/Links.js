import React from "react"
export const Links = (props) => {
    return (
        <div>
            <a href={props.redirect} id={props.id} className={props.className} onClick={props.onClick} >{props.text}</a>
        </div>
        

    )
}