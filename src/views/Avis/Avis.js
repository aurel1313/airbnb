import React from 'react'

import { Database } from '../../config/Database/Database'
import Box from '@mui/material/Box'
import { Textarea } from '../../Component/Textarea/Textarea'
import { useState, useRef, useEffect } from 'react'
import { db } from '../../config/Firebase/Firebase'
import { getDatabase } from 'firebase/database'
import { addDoc, collection } from 'firebase/firestore'
import { Chat } from '../../Component/Chat/Chat'
export const Avis = ({}) => {
    const [valeurTextarea, setValeurTextarea] = useState('')
    const handleChange = (e) => {
        setValeurTextarea(e.target.value)
    }
    const dbs = getDatabase()
    const email =
        JSON.parse(localStorage.getItem('user')) ||
        JSON.parse(localStorage.getItem('userGoogle'))
    const msgCollection = collection(db, 'messages')
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(valeurTextarea)
        await addDoc(msgCollection, {
            user: email.email,
            commentaires: valeurTextarea,
        })
    }
    return (
        <div>
            <h2>Mettre un avis</h2>

            <div className="flex flex-col min-h-screen">
                <Chat />
                <div className="mt-auto">
                    <form onSubmit={handleSubmit}>
                        <Textarea
                            valeurTextarea={valeurTextarea}
                            setValeurTextarea={setValeurTextarea}
                            name="content"
                            onChange={handleChange}
                        />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
