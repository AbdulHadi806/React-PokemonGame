const initialState = {
    pokemonsData: [],
    addToHeart: [],
    pokemonsDetails: []
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "GETPOKEMONDATA":
            return {
                ...state,
                pokemonsData: action.payload,
            }
        case "ADDTOHEART":
            const isItem = state.addToHeart.find(ci => ci.id === action.payload.id)
            if (isItem) {
                return {
                    ...state,
                    addToHeart: state.addToHeart.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...item }
                        } else {
                            return item
                        }
                    })
                }
            }
            else {
                return {
                    ...state,
                    addToHeart: [...state.addToHeart, { ...action.payload, count: 1 }]
                }
            }
        case "REMOVEFROMHEART":
            return {
                ...state, addToHeart: state.addToHeart.filter((item) => item.id !== action.payload.id)
            }
        case "POKEMONDETAILS":
            return {
                ...state, pokemonsDetails: state.pokemonsData.filter((item) => item.id === action.payload.id)
            }

    }
}