import {GETPOKEMONDATA,ADDTOHEART,REMOVEFROMHEART,POKEMONDETAILS,SEARCHINPUTIEMS,POKEMONCOMPARITION,REMOVECOMPARESELECTION} from "../redux/type.js"

export const getPokemonData = (data) => {
    return {
        type: GETPOKEMONDATA,
        payload:data
    }
}
export const AddToHeart = (data) => {
    return {
        type: ADDTOHEART,
        payload:data
    }
}
export const removeFromHeart = (data) => {
    return {
        type: REMOVEFROMHEART,
        payload:data
    }
}
export const pokemonsDetails = (data) => {
    return {
        type: POKEMONDETAILS,
        payload:data
    }
}
export const searchInputItm = (data)=> {
    return {
        type: SEARCHINPUTIEMS,
        payload: data
    }
}
export const pokemonComparition = (data) => {
    return {
        type:POKEMONCOMPARITION,
        payload:data
    }
}
export const pokemonComparitionDeleter = (data) => {
    return {
        type: REMOVECOMPARESELECTION,
        payload:data
    }
}