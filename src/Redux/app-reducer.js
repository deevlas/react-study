import {getAuth} from "./auth-reducer";

const SET_INITIAL = 'SET_INITIAL'

export const setInitial = () => ({type: SET_INITIAL})

export const setInitialTC = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitial())
        })
}

const initialState = {
    initial: false
}

const appReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case SET_INITIAL: {
            return {
                ...state,
                initial: true
            }
        }
        default:
            return state;
    }
}


export default appReducer;
