import React from "react"
export const Links = (props) => {
    return (
        <div>
            <a href={props.redirect} className={props.className} onClick={props.onClick} >{props.text}</a>
        </div>
        

    )
}