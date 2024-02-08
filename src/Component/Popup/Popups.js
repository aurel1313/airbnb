import React, { createRef } from 'react'
import { useEffect, useRef } from 'react'
export const Popups = ({ coordinate }) => {
    const buttonRef = useRef(null)

    return (
        <div id="info" className="  bg-white">
            <div>{coordinate}</div>
        </div>
    )
}
