import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
export const Search = ({ value, setValue }, ...props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='mt-5 mb-2'>
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="search"
                        placeholder="recherche"
                        className={props.classname}
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
