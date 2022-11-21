import React, { useEffect } from 'react'

// importing Redux
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'


export default function ProtectedRoutesDescription() {
    const pokemonsItemsDetails = useSelector(state => state.pokemonsDetails)
    const navigate = useNavigate()
    const PokemonLength = pokemonsItemsDetails.length
    useEffect(() => {
        if (PokemonLength <= 0) {
            navigate('/', { replace: true })
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}
