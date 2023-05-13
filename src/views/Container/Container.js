import React, { useState } from 'react'
import { Images } from '../../Component/Images/Images'
import './Container.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { CardsTravel } from '../CardsTravel/CardsTravel'
import { Connexion } from '../Connexion/Connexion'
import { Header } from '../Header/Header'

export const Container = ({ setTheme }) => {
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
                        <Images src="https://picsum.photos/id/11/1630/500" />
                    </div>

                    <div style={style}>
                        <CardsTravel />
                    </div>
                </div>
            </div>
        </div>
    )
}
