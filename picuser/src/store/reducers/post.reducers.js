import { SET_POSTS, GET_COMMENTS, ON_LOADING, IS_LOAD } from '../actions/actionTypes'

const initialState = {
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case ON_LOADING:
            return {
                ...state,
                onLoading: true
            }

        case IS_LOAD:
            return {
                ...state,
                onLoading: false
            }

        case GET_COMMENTS:
            // console.log(action.payload)
            return {
                ...state,
                comments: action.payload
            }

        default:
            return { ...state }
    }
}