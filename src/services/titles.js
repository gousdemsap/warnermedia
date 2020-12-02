import { ActionCreators } from "../redux/titlesReducer";

export const GetTitles = async (dispatch) => {
    try {
            // api call
            const response = [
                {value: 'Study for exam in 3 weeks', id:1},
                {value: 'Study for exam in 2 weeks', id:2},
                {value: 'Study for exam in 1 weeks', id:3},
                {value: 'Study for exam in 6 weeks', id:4},
                {value: 'Study for exam in 7 weeks', id:5},
                {value: 'Study for exam in 9 weeks', id:6},
            ]

            dispatch(ActionCreators.setTitles(response))
    }catch {
        console.log('Error!');
    }
}

export const SearchTitle = async (dispatch, title) => {
    try {
            // api call
            dispatch(ActionCreators.searchTitle(title))
    } catch {
        console.log('Error!');
    }
}

export const NewTitle = async (dispatch, title) => {
    try {
            // api call
            const response = {value: title, id: 1};
            dispatch(ActionCreators.newTitle(response));
    } catch {
        console.log('Error!');
    }
}

export const EditTitle = async (dispatch, title) => {
    try {
            // api call
            const response = {value: title, id: 1};
            dispatch(ActionCreators.editTitle(response));
    } catch {
        console.log('Error!');
    }
}