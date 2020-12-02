const initialState = {
    titles: [],
}

export const ActionTypes = {
    SET_TITLES: 'SET_NOTES',
    SEARCH_TITLE: 'SEARCH_TITLE',
    NEW_TITLE: 'NEW_TITLE',
    EDIT_TITLE: 'EDIT_TITLE'
}

export const ActionCreators = {
    setTitles: payload => ({type: ActionTypes.SET_TITLES, payload}),
    searchTitle: payload => ({type: ActionTypes.SEARCH_TITLE, payload}),
    newTitle: payload => ({type: ActionTypes.NEW_TITLE, payload}),
    editTitle: payload => ({type: ActionTypes.EDIT_TITLE, payload}),
} 

export default function TitlesReducer(state = initialState,action){
    switch(action.type) {

        case ActionTypes.SET_TITLES:
            return {...state, titles: [...action.payload]};

        case ActionTypes.SEARCH_TITLE:

            for(let i = 0; i < state.titles.length; i++){

                if(state.titles[i].id === action.payload.id){
                    state.titles.splice(i, 1);
                    break;
                }
            }
            return { ...state, titles: [...state.titles]}

        case ActionTypes.NEW_TITLE:
            return { ...state, titles: [...state.titles, action.payload]}

        case ActionTypes.EDIT_TITLE:
            for(let i = 0; i < state.titles.length; i++){

                if(state.titles[i].id === action.payload.id){
                    state.titles[i].value = action.payload.value;
                }                
            }
            return { ...state, titles: [...state.titles]}

        default:
            return state;
    }
}