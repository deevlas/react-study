import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export const setAuthUserAC = (id, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, login, email, isAuth}
})

export const getAuth = () => (dispatch) => {
    return authAPI.getAuthUser()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserAC(id, login, email, true));
            }
        })
}

export const logInTC = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logOutTC = () => (dispatch) => {
    authAPI.logOut()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserAC(null, null, null, false))
            }
        })
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}


export default authReducer;
