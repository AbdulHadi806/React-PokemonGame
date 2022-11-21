import { GETPOKEMONDATA, ADDTOHEART, REMOVEFROMHEART, POKEMONDETAILS, SEARCHINPUTIEMS, POKEMONCOMPARITION, REMOVECOMPARESELECTION } from "../redux/type.js"


const initialState = {
    pokemonsData: [],
    addToHeart: [],
    pokemonsDetails: [],
    SearchInputItems: [],
    pokemonCompare: [],
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case GETPOKEMONDATA:
            return {
                ...state,
                pokemonsData: action.payload,
            }
        case ADDTOHEART:
            const isItem = state.addToHeart.find(ci => ci.id === action.payload.id)
            if (isItem) {
                return {
                    ...state,
                    addToHeart: state.addToHeart
            
                }
            }
            else {
                return {
                    ...state,
                    addToHeart: [...state.addToHeart, { ...action.payload }]
                }
            }
        case REMOVEFROMHEART:
            return {
                ...state, addToHeart: state.addToHeart.filter((item) => item.id !== action.payload.id)
            }
        case POKEMONDETAILS:
            return {
                ...state, pokemonsDetails: state.pokemonsData.filter((item) => item.id === action.payload.id)
            }
        case SEARCHINPUTIEMS:
            return {
                ...state,
                SearchInputItems: action.payload
            }
        case POKEMONCOMPARITION:
            const item = state.pokemonCompare.find(ci => ci.id === action.payload.id)
            if (item) {
                return {
                    ...state,
                    pokemonCompare: state.pokemonCompare.map(item => {
                        if (item.id === action.payload.id && state.pokemonCompare.length < 2) {
                            return  item
                        } else {
                            return item
                        }
                    })
                }
            }
            else if (state.pokemonCompare.length < 2) {
                return {
                    ...state,
                    pokemonCompare: [...state.pokemonCompare, { ...action.payload }]
                }
            }
        case REMOVECOMPARESELECTION:
            return {
                ...state,
                pokemonCompare: state.pokemonCompare.filter((item) => item.id !== action.payload.id)
            }

    }
}