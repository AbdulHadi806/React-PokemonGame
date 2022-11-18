export const getPokemonData = (data) => {
    return {
        type: "GETPOKEMONDATA",
        payload:data
    }
}
export const AddToHeart = (data) => {
    return {
        type: "ADDTOHEART",
        payload:data
    }
}
export const removeFromHeart = (data) => {
    return {
        type: "REMOVEFROMHEART",
        payload:data
    }
}
export const pokemonsDetails = (data) => {
    return {
        type: "POKEMONDETAILS",
        payload:data
    }
}