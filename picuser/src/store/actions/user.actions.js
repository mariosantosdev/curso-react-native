import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'
import AsyncStorage from '@react-native-community/async-storage'

export const isLogin = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const isLogout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const login = user => {
    return async dispatch => {
        const getUser = await AsyncStorage.getItem('userData')
        const userRes = getUser ? JSON.parse(getUser) : user
        if (!getUser) await AsyncStorage.setItem('userData', JSON.stringify(user))

        dispatch(isLogin(userRes))
    }
}

export const logout = () => {
    return async dispatch => {
        await AsyncStorage.getItem('userData') && await AsyncStorage.removeItem('userData')

        dispatch(isLogout())
    }

}