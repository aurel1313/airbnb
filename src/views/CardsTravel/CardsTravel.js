import { Voyage } from '../../Component/Cards/Voyage/Voyage'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import data from '../../features/data/data'
import { SearchBar } from '../../Component/SearchBar/SearchBar'
import { Search } from '../../Component/Search/Search'
import { Filter } from '../../Component/Filter/Filter'
import { Link } from '@mui/material'
export let fetchMoreData
export const CardsTravel = ({ classname }) => {
    const [dataCards, setDataCards] = useState([])
    let [addData, setAddData] = useState(10)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [value, setValue] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    const [filtrePlage, setFiltrePlage] = useState()
    const [clickLink, setClickLink] = useState(false)
    useEffect(() => {
        async function loadData() {
            setLoading(true)
            const response = await fetch(
                'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features'
            )
            const newData = await response.json()
            const records = newData.records

            if (response.status == '404') {
                setError(true)
            }
        }

        loadData()
    }, [dataCards, loading])
    useEffect(() => {
        fetchMoreData = async () => {
            setAddData(addData + 100)

            const response = await fetch(
                `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${addData}&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features`
            )
            const newData = await response.json()
            const records2 = newData.records

            if (response.status === '404') {
                console.log(response)
                setError('aucune donnée')
            }
            if (records2.length <= 300) {
                setDataCards(records2)
            }
        }
    }, [dataCards, addData, loading])

    return (
        <div>
            <div className="flex flex-row"></div>
            <Search classname="max-w-sm" value={value} setValue={setValue} />

            <Voyage
                dataCards={dataCards}
                loading={loading}
                error={error}
                value={value}
                search={resultSearch}
                setLoading={setLoading}
                clickLink={clickLink}
            />
            <Button onClick={fetchMoreData} error={error}>
                Plus de données
            </Button>
        </div>
    )
}
