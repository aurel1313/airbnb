import React from "react"
export const Button = (props) => {

    return (
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    )


}
zbi