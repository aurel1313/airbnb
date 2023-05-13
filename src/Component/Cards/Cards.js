import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { HebergementDetail } from '../../views/Hebergement/HebergementDetails'
import './Cards.scss'
export const Cards = (data) => {
    const [click, isOnclick] = useState(false)
    const [visible, setVisible] = useState(true)
    const style = {
        backgroundColor: 'white',
        border: '1px solid black',
        width: '20rem',
        height: '20rem',
        marginRight: '5rem',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5rem',
    }
    const img = {
        height: '-webkit-fill-available',
    }
    const { id } = useParams()

    let navigate = useNavigate()
    let location = useLocation()

    return (
        <div className="cards" visible={visible}>
            {visible == true &&
                location.pathname == '/hebergement' &&
                data.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={style}>
                                {/* <strong className='name'>{item.name}</strong>/**/}
                                <img
                                    src={item.imageUrl}
                                    alt="image"
                                    className="img"
                                    style={img}
                                />
                            </div>
                            <Link to={`hebergementDetail/${item.id}`}>
                                {item.name}
                            </Link>
                        </div>
                    )
                })}

            {location.pathname == '/hebergement/hebergementDetail/' + id && (
                <HebergementDetail data={data} />
            )}
        </div>
    )
}
