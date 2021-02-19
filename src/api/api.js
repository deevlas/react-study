import axios from "axios";

const confAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7a76ebf1-b575-4dcf-8e82-2c0b58787768'
    }
})


export const profileAPI = {
    getProfile(userId) {
        return confAxios.get(`profile/` + userId)
            .then(response => {
                return response.data
            })},
    getStatus(userId){
            return confAxios.get(`profile/status/` + userId)
                .then(response => {
                    return response.data
                })
        },
    updateStatus(status){
            return confAxios.put(`profile/status/`, { status })
                .then(response => {
                    if(response.data.resultCode === 0) {
                    return response.data
                }})
        }}


export const usersAPI = {
    getUsers(pageUsersSize, currentPage) {
        return confAxios.get(`users?count=${pageUsersSize}&page=${currentPage}`)
            .then(response => {
                    return response.data
                }
            )
    }
}


export const authAPI = {
    getAuthUser() {
        return confAxios.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    logIn(email, password, rememberMe) {
        return confAxios.post('auth/login', {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logOut() {
        return confAxios.delete('auth/login')
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    delFollow(id) {
        return confAxios.delete(`follow/${id}`)
            .then(response => {
                    return response.data
                }
            )
    },
    addFollow(id) {
        return confAxios.post(`follow/${id}`)
            .then(response => {
                    return response.data
                }
            )
    }
}


