import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export const addPostAC = (NewPost) => ({type: ADD_POST, NewPost})
export const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatusAC(data))
            })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                dispatch(setStatusAC(status))
            })
    }
}



const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "1342"},
        {id: 2, message: "Hello, men", likesCount: "3478"},
        {id: 3, message: "I'm steel alive", likesCount: "2443"},
        {id: 4, message: "Wazzzzzap", likesCount: "44200"}
    ],
    userProfile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.NewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}
export default profileReducer;
