import React, { useEffect, useState } from 'react'



import { SearchBar } from '../../Component/SearchBar/SearchBar'
import './Header.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

import { Navbar } from '../../Component/Navbar/Navbar'
export const Header = ({ setTheme, className }) => {
    const [state, setState] = useState(false)
    const [checked, setChecked] = useState(false)
    const [user, setUser] = useState()

    const themes = useContext(ThemeContext)
    const style = {
        backgroundColor: themes == 'dark' ? '#121212' : 'white',
        color: themes == 'dark' ? 'white' : 'black',
        width:'100%',
        textDecoration:"none"
    }
    if (checked) {
        setTheme('dark')

        document.body.style.backgroundColor = '#121212'
    } else {
        setTheme('light')

        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

   

    return (
        <header >
            <Navbar setTheme={setTheme}  checked={checked} setChecked={setChecked} theme={themes}/>

           
        </header>
    )
}
