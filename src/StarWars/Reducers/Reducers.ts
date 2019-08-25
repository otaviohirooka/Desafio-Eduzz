const INITIAL_STATE: any = {
    sw: []
}

export default function starWarsReducers(state = INITIAL_STATE, action: any ) {
    switch(action.type) {
        case 'SEARCH_STAR_WARS_SUCCESS':
            return {
                sw: searchStarWarsByName(state, action.payload)
            };
        
        default:
            return state;
    }
}

function searchStarWarsByName(state: any, filmsTitle: string) {
    
}

//action
export const searchStarWars = (filmsTitle: string) => {
    return {
        type: 'SEARCH_STAR_WARS_SUCCESS',
        payload: filmsTitle
    }
}