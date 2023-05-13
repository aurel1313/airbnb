import React from 'react'
import { Link } from 'react-router-dom'
import './Images.scss'
export const Images = ({ visible, setVisible, ...props }) => {
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
                    height: '49rem',
                    filter: 'sepia(1)',
                }}
            ></div>
            <div className="content">
                <div className="button">
                    <Link
                        className="more"
                        to="/logement"
                        onClick={props.onClick}
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
