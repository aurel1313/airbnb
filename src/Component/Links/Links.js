import { Link } from "@mui/material"
import React from "react"
export const Links = (props) => {
    return (
        <div>
            <Link href={props.redirect} id={props.id} className={props.className} onClick={props.onClick} underline={props.underline} color={props.color}>{props.text}</Link>
        </div>
        

    )
}