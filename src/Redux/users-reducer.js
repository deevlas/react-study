import {followAPI, usersAPI} from "../api/api";

const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const ADD_DISABLED_USER_FOLLOW = 'ADD_DISABLED_USER_FOLLOW'
const DELETE_DISABLED_USER_FOLLOW = 'DELETE_DISABLED_USER_FOLLOW'


export const followAC = (userId) => ({type: FOLLOWED, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOWED, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addDisabledUserFollowAC = (userId) => ({type: ADD_DISABLED_USER_FOLLOW, userId})
export const deleteDisabledUserFollowAC = (userId) => ({type: DELETE_DISABLED_USER_FOLLOW, userId})




export const getUsers = (pageUsersSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(pageUsersSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setCurrentPageAC(currentPage))
                dispatch(setTotalUsers(data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(addDisabledUserFollowAC(userId))
        followAPI.addFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                    dispatch(deleteDisabledUserFollowAC(userId))
                }
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(addDisabledUserFollowAC(userId))
        followAPI.delFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                    dispatch(deleteDisabledUserFollowAC(userId))
                }
            })
    }
}


const initialState = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageUsersSize: 5,
    isFetching: false,
    disabledUsersFollow: []
}

const usersReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case FOLLOWED: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case ADD_DISABLED_USER_FOLLOW:
            return {
                ...state,
                disabledUsersFollow: [...state.disabledUsersFollow, action.userId]
            }
        case DELETE_DISABLED_USER_FOLLOW:
            return {
                ...state,
                disabledUsersFollow: [state.disabledUsersFollow].filter(userId =>
                    userId !== action.userId)
            }
        default:
            return state;
    }
}
export default usersReducer;
