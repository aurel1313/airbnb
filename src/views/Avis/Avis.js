import React from 'react'

import { Database } from '../../config/Database/Database'
import Box from '@mui/material/Box'
import { Textarea } from '../../Component/Textarea/Textarea'
import { useState, useRef, useEffect } from 'react'
import { db } from '../../config/Firebase/Firebase'
import { getDatabase } from 'firebase/database'
import { addDoc, collection } from 'firebase/firestore'
import { Chat } from '../../Component/Chat/Chat'
import moment from 'moment';
import 'moment/locale/fr';
export const Avis = ({}) => {
    const [valeurTextarea, setValeurTextarea] = useState('')
    const[animationButton,setAnimationButton] =useState(false)
    const handleChange = (e) => {
        setValeurTextarea(e.target.value)
    }
    const dbs = getDatabase()
    const currentDate = moment();
    const formattedDate = currentDate.format('DD MMMM YYYY');
const formattedTime = currentDate.format('HH:mm:ss');
   
    const time =formattedDate+ ' ' +formattedTime
    const email =
        JSON.parse(localStorage.getItem('user')) ||
        JSON.parse(localStorage.getItem('userGoogle'))
    const msgCollection = collection(db, 'messages')
    const handleSubmit = async (e) => {
        e.preventDefault()
        setAnimationButton(true);
        console.log(valeurTextarea)
        await addDoc(msgCollection, {
            user: email.email,
            commentaires: valeurTextarea,
            date: time
        })
        setAnimationButton(false)
    }
    
    return (
        <div>
            <h2>Mettre un avis</h2>

            <div className="flex flex-col min-h-screen">
                <Chat targetDateFormat={formattedDate} />
                <div className="mt-auto">
                    <form onSubmit={handleSubmit}>
                        <Textarea
                        className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                            valeurTextarea={valeurTextarea}
                            setValeurTextarea={setValeurTextarea}
                            name="content"
                            onChange={handleChange}
                        />

                       <button type='submit' className='btn'>
                        {animationButton && <span class="loading loading-spinner"></span>}
                            envoyer
                       </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
