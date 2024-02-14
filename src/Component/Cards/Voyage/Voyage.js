import React, { useEffect, useState, useRef } from 'react'
import { TailSpin } from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroller'

import {  Card, CardContent, CardMedia } from '@mui/material'
import { Button, Buttons } from '../../Button/Buttons'
import { Links } from '../../Links/Links'

import { fetchMoreData } from '../../../App'
export const Voyage = ({ dataCards, loading, value, clickLink,theme }) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [resultSearch, setResultSearch] = useState(dataCards)

    let resultats
    const limit = 5

    useEffect(() => {
        resultats = dataCards.filter((item) => item.fields.market === value)
        //setResultSearch(dataCards.filter(item=>item.fields.market===value).slice(0,limit))
    }, [resultats, value, limit])
    let Plage
    useEffect(() => {}, [dataCards])

   
    return (
        <div id="test"  data-aos="fade-down">
            <InfiniteScroll
                className="grid grid-cols-4 gap-4"
                pageStart={0}
                loadMore={fetchMoreData}
                hasMore={true || false}
                loader={
                    <div className="loader" key={0}>
                        Loading ...
                    </div>
                }
            >
                {!value &&
                    dataCards &&
                    dataCards.map((element, index) => {
                       
                       const id =element.fields.id
                  
                      const styleCard ={
                        background:theme=='dark'?'rgb(18,18,18)':'white',
                        color:theme=='dark'?'white':'black'
                      }
                        return (
                            <Card style={styleCard}>
                           
                                            {element.fields.xl_picture_url && (
                                                <CardMedia
                                                component="img"
                                                   image={
                                                        element.fields
                                                            .xl_picture_url
                                                    }
                                                    className="h-1/2"
                                                   
                                                    onError={({
                                                        currentTarget,
                                                    }) => {
                                                        currentTarget.onerror =
                                                            null // prevents looping
                                                        currentTarget.src =
                                                            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                                                    }}
                                                />
                                            )}
                                            {!element.fields.xl_picture_url && (
                                                <img
                                                    src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                                                    width="300"
                                                    height="300"
                                                />
                                            )}
                                        
                                        <CardContent>
                                      
                                            <p className=" font-semibold">
                                                {element.fields.market}
                                            </p>
                                            <p className='whitespace-normal overflow-ellipsis line-clamp-3 '>
                                                {element.fields.description}
                                            </p>
                                            
                                            <Links text="Details"  redirect={`/${id}`}/>
                                           
                                          
                                       
                                                
                                        </CardContent>
                                       
                               
                           
                            </Card>
                        )
                    })}
            </InfiniteScroll>
            <div className="grid grid-cols-3">
                {value &&
                    dataCards &&
                    dataCards
                        .filter((item) => item.fields.market === value)
                        .slice(0, limit)
                        .map((search) => {
                            return (
                                <div key={search.id}>
                                    <div id="img">
                                        {search.fields.xl_picture_url && (
                                            <img
                                                src={
                                                    search.fields.xl_picture_url
                                                }
                                                className="rounded-lg"
                                                width="300"
                                                height="300"
                                                onError={({
                                                    currentTarget,
                                                }) => {
                                                    currentTarget.onerror = null // prevents looping
                                                    currentTarget.src =
                                                        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                                                }}
                                            />
                                        )}
                                        {!search.fields.xl_picture_url && (
                                            <img
                                                src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                                                width="300"
                                                height="300"
                                            />
                                        )}
                                        <p>{search.fields.market}</p>
                                    </div>
                                </div>
                            )
                        })}
            </div>

            {loading && !dataCards && (
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    visible={true}
                />
            )}
        </div>
    )
}
