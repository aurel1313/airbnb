import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { HebergementDetail } from '../../views/Hebergement/HebergementDetails'
import './Cards.scss'
export const Cards = ({data,themes}) => {
    const [click, isOnclick] = useState(false)
    const [visible, setVisible] = useState(true)
    const style = {
     
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
    
    }
    const { id } = useParams()

    let navigate = useNavigate()
    let location = useLocation()

    return (
        <div className="cards " visible={visible}>
            {visible == true &&
                location.pathname == '/hebergement' &&
                data.map((item, index) => {
                    return (
                        <div key={index}   className={themes ==='dark'?"card  w-96  bg-dark-color text-white mt-5" :"card  card-bordered  w-96 bg-white mt-5"}>
                          
                                {/* <strong className='name'>{item.name}</strong>/**/}
                                <figure>
                                {item.fields.xl_picture_url &&
                                <img
                                    src={item.fields.xl_picture_url}
                                    alt="image"
                                  
                                    style={img}
                                    onError={({
                                        currentTarget,
                                    }) => {
                                        currentTarget.onerror =
                                            null // prevents looping
                                        currentTarget.src =
                                            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                                    }}
                                />
                            }
                                 {!item.fields.xl_picture_url && (
                                                <img
                                                    src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                                                   
                                                />
                                )}
                                </figure>
                           <div className='card-body'>
                            <p className='whitespace-normal overflow-ellipsis line-clamp-4'>{item.fields.description}</p>
                            <div className='card-actions justify-end'>
                            <Link to={`hebergementDetail/${item.fields.host_id}`} role='button' className='btn bg-btn-color-vert text-white'>
                                Voir plus
                            </Link>
                            </div>
                            </div>
                            </div>
                      
                    )
                })}

            {location.pathname == '/hebergement/hebergementDetail/' + id && (
                <HebergementDetail data={data} themes={themes} />
            )}
        </div>
    )
}
