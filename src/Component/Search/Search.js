import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
export const Search = ({ value, setValue,theme }, ...props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div >
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="search"
                        placeholder="recherche"
                       style={{backgroundColor : `${theme==='dark'  ? '#3C3C3C' :"white"}  `} }
                       className='border border-rounded'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        fullWidth
                    />
                    <button type="submit">
                        <AiOutlineSearch
                           
                            style={{ position:'absolute',transform:"translateX(-146%)" }}
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}
