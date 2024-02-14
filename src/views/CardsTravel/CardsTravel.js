import { Voyage } from '../../Component/Cards/Voyage/Voyage'
import React, { useState } from 'react'
import { useEffect } from 'react'


import { Search } from '../../Component/Search/Search'


export const CardsTravel = ({ dataCards,loading,error,value,resultSearch,setLoading,clickLink,setValue,theme}) => {
   

    return (
        <div>
            <div className="flex flex-row"></div>
            <Search classname="w-1/2" value={value} setValue={setValue} theme={theme} />

            <Voyage
                dataCards={dataCards}
                loading={loading}
                error={error}
                value={value}
                search={resultSearch}
                setLoading={setLoading}
                clickLink={clickLink}
                theme={theme}
            />
           
        </div>
    )
}
