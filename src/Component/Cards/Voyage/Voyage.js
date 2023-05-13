import React, { useEffect, useState, useRef } from 'react'
import { TailSpin } from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroller'
import { fetchMoreData } from '../../../views/CardsTravel/CardsTravel'

export const Voyage = ({ dataCards, loading, value, clickLink }) => {
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
        <div id="test" className="grid grid-cols-1" data-aos="fade-down">
            <InfiniteScroll
                className="grid grid-cols-3"
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
                        return (
                            <div>
                                <div key={element.id}>
                                    <div>
                                        <div id="img">
                                            {element.fields.xl_picture_url && (
                                                <img
                                                    src={
                                                        element.fields
                                                            .xl_picture_url
                                                    }
                                                    className="rounded-lg"
                                                    width="300"
                                                    height="300"
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
                                        </div>

                                        <div className="flex flex-col items-start mt-2">
                                            <p className=" font-semibold">
                                                {element.fields.market}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
