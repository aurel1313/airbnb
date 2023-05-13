import { query } from 'firebase/database'
import { QuerySnapshot, collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../config/Firebase/Firebase'
import './Chat.scss'
export const Chat = () => {
    const [messages, setMessages] = useState([])
    const [classMsg, setClassMsg] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'messages'))
        const data = onSnapshot(q, (QuerySnapshot) => {
            let messages = []
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => data
    }, [])

    const email =
        JSON.parse(localStorage.getItem('user')) ||
        JSON.parse(localStorage.getItem('userGoogle'))
    let getClassReceived = document.getElementsByClassName('msg received')
    let getClassSend = document.getElementsByClassName('msg sent')
    let getClass = document.getElementsByClassName('msg sent')
    useEffect(() => {}, [getClass, getClassReceived, getClassSend])

    return (
        <div className="   ">
             
            {messages &&
                messages.map((message) => (
                    <div>
                                         
                        <div
                            className={`msg ${
                               message.user=== email.email
                                    ? 'sent '
                                    : 'received '
                            } `}
                        >
                            {message.user === 'aurelienfabre439@gmail.com' ? (
                                <div className=" bg-green-500 border rounded-lg w-1/3 ">
                                                
                                    {message.user && <p>{message.user}</p>}
                                                      
                                    <p>{message.commentaires}</p>
                                </div>
                            ) : 
                                message.user &&
                                <div className=" bg-cyan-600 border rounded-lg w-1/3 ">
                                  
                                        {console.log(message)}
                                                   
                                        {message.user &&
                                        <div>
                                        <p className='text-white font-bold'>{message.user}</p>
                                            <p>{message.commentaires}</p>
                                        </div>
                                        }
                                                          
                                        
                                   
                                </div>
                            }
                                           
                        </div>
                    </div>
                ))}
        </div>
    )
}
