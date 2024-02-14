import React, { useState } from 'react'
import { Images } from '../../Component/Images/Images'
import './Container.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { CardsTravel } from '../CardsTravel/CardsTravel'

import { Link } from 'react-router-dom'
export const Container = ({ setTheme,dataCards,loading,error,value,resultSearch,setLoading,clickLink,setValue },...props) => {
    const [visible, setVisible] = useState(false)
    const themes = useContext(ThemeContext)

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    const styleLink = {
        color: 'white',
    }
    console.log(themes)
    if (themes === 'dark') {
        style.color = 'white'
        styleLink.color = 'white'
    } else if (themes === 'light') {
        style.color = 'black'
        styleLink.color = 'black'
    }
    return (
        <div data-aos="fade-down" className="-mt-4">
            <div>
                <div className="global-proposition">
                    <div className="proposition">
                        <Images src="https://picsum.photos/id/11/1630/500" theme={themes} className=" h-1/3 max-[600px]:h-full" />
                    </div>
                    <div className="content">
                <div className="button mt-5">
                    <Link
                        className="more "
                        to="/logement"
                        onClick={props.onClick}
                    >
                        Details
                    </Link>
                </div>
            </div>
                    <div style={style}>
                        <CardsTravel      dataCards={dataCards}
                loading={loading}
                error={error}
                value={value}
                search={resultSearch}
                setLoading={setLoading}
                clickLink={clickLink}
                setValue={setValue}
                theme={themes}
                />
                    </div>
                </div>
            </div>
        </div>
    )
}
