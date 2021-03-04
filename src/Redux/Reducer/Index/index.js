import { combineReducers } from 'redux'
import Type from '../../ActionTypes/Index'

const LoginStatus = {
    loginData: {},
}

const initialState = {
counter:0
}


export const reducerForLogin = (state = LoginStatus, action) => {
    switch (action.type) {
        case Type.Login:
            return {
                ...state, loginData: action.loginType,
            }
        case Type.Logout:
            return LoginStatus;
    }
    return state;
}