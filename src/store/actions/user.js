import {LOGIN_REQUEST, LOGOUT_REQUEST} from './actionTypes'

export const login = user => {
    return {
        type: LOGIN_REQUEST,
        payload : user
    }
}

export const logout = () => {
    return {
        type: LOGOUT_REQUEST
    }
}