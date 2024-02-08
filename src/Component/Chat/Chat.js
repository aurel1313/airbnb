import { query } from 'firebase/database'
import { QuerySnapshot, collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../../config/Firebase/Firebase'
import moment from 'moment';
import './Chat.scss'
export const Chat = ({targetDateFormat}) => {
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
 
    const sortedData = messages.sort((a, b) => {
        if (!a.date && !b.date) {
          return 0;
        } else if (!a.date) {
          return 1;
        } else if (!b.date) {
          return -1;
        } else {
          const dateA = moment(a.date, 'DD MMMM YYYY HH:mm:ss');
          const dateB = moment(b.date, 'DD MMMM YYYY HH:mm:ss');
          return dateB.diff(dateA);
        }
      });
      
     
    return (
        <div className="   ">
             
            {sortedData &&
               sortedData.map((message) => (
                    <div>
                         <div
                            className={`msg ${
                               message.user=== email.email
                                    ? 'sent chat chat-start'
                                    : 'received chat chat-end '
                            } `}
                        >
                            {message.user === 'aurelienfabre439@gmail.com' ? (
                                <div className='chat-header'>
                                     {message.user && <p>{message.user}</p>}
                                     {message.date && <p>{message.date}</p>}
                                <div className="chat-bubble bg-gray-700  ">
                                       <p>{message.commentaires}</p>
                                </div>
                                </div>
                            ) : 
                                message.user &&
                                    <div className='chat-header'> 
                                                <p >{message.user}</p>
                                                {message.date && <p>{message.date}</p>}           
                                        {message.user &&
                                        <div className="     chat-bubble chat-bubble-success ">
                                       
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
