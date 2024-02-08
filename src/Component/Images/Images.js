import React from 'react'

import './Images.scss'
export const Images = ({ visible,className, setVisible,theme, ...props }) => {
    const style = {
        backgroundImage: `url:(${props.src})`,
    }

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('${props.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                   
                    filter: 'sepia(1)',
                    filter: theme=='dark'? 'brightness(50%)':'brightness(100%)'
                }}
                className={className}
            ></div>
         
        </div>
    )
}
