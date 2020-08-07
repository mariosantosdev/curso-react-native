import { SET_MESSAGE } from './actionTypes'

export const onMessage = message => {
    return{
        type: SET_MESSAGE,
        payload: message
    }
}