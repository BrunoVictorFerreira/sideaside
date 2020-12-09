import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../actions/actionTypes'

const initialState = {
    isLogged: false,
    usuario: null,
    senha: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                usuario: action.payload.usuario,
                senha: action.payload.senha,
                isLogged: true
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                usuario: null,
                senha: null,
                isLogged: false
            }
        default:
            return state
    }
}

export default userReducer