import { SET_POSTS, ON_LOADING, IS_LOAD, GET_COMMENTS } from './actionTypes'
import { onMessage } from './message.actions'
import api from '../../services/api'

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const onGetComments = comments => {
    return {
        type: GET_COMMENTS,
        payload: comments
    }
}

export const onLoading = () => {
    return {
        type: ON_LOADING
    }
}

export const isLogged = () => {
    return {
        type: IS_LOAD
    }
}

export const toggleLike = post => {
    return dispatch => {
        try {
            api.get(`/posts/${post.postId}.json`)
                .then(res => {
                    const likeArray = res.data.likes || []

                    if (likeArray.some(like => like.email === post.email)) {
                        likeArray.pop(post.email)
                    } else {
                        likeArray.push({ email: post.email })
                    }

                    api.patch(`/posts/${post.postId}.json`, { likes: likeArray })
                        .then(_ => dispatch(fetchPosts(true)))
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
}

export const addComment = comment => {
    return dispatch => {
        try {
            api.get(`/posts/${comment.postId}.json`)
                .then(async res => {
                    const comments = res.data.comments || []
                    comments.push(comment.newComment)
                    await api.patch(`/posts/${comment.postId}.json`, { comments })
                        .then(res => {
                            dispatch(getPost(comment.postId))
                        })
                        .catch(err => {
                            dispatch(onMessage({ title: 'ATENÇÃO', message: 'Ocorreu um erro na conexão com o servidor' }))
                            dispatch(isLogged())
                        })
                })
                .catch(err => {
                    dispatch(onMessage({ title: 'ATENÇÃO', message: 'Ocorreu um erro na conexão com o servidor' }))
                    dispatch(isLogged())
                })
        } catch (err) {
            dispatch(onMessage({ title: 'ATENÇÃO', message: 'Ocorreu um erro no sistema' }))
            dispatch(isLogged())
        }
    }
}

export const addPost = post => {
    return async dispatch => {
        dispatch(onLoading())
        try {
            return api.post('/posts.json', { ...post })
                .then(res => {
                    dispatch(fetchPosts(true))
                    dispatch(isLogged())
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }

    }
}

export const deletePost = post => {
    return dispatch => {
        try {
            return api.delete(`/posts/${post.id}.json`)
                .then(res => {
                    dispatch(fetchPosts(true))
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
}

export const getPost = (postId) => {
    return dispatch => {
        api.get('/posts.json')
            .then(res => {
                var comments = []

                for(var [id, post] of Object.entries(res.data)){
                    if(id === postId){
                        comments = post.comments
                    }
                }

                dispatch(onGetComments(comments))
            })
            .catch(err => console.log(err))
    }
}

export const fetchPosts = (isShown = false) => {
    if (isShown == true) { // se o post já estiver sendo exibido e a ação for chamada não precisa usar o skeleton loading
        return dispatch => {
            api.get('/posts.json')
                .then(res => {
                    const rawPosts = res.data
                    const posts = []
                    for (let key in rawPosts) {
                        posts.push({
                            ...rawPosts[key],
                            id: key,
                            likes: rawPosts[key].likes || [],
                            comments: rawPosts[key].comments || []
                        })
                    }

                    dispatch(setPosts(posts.reverse()))
                })
                .catch(err => console.log(err))
        }
    } else { // se o post NÃO estiver sendo exibido e a ação for chamada PRECISA usar o skeleton loading
        return dispatch => {
            dispatch(onLoading())
            api.get('/posts.json')
                .then(res => {
                    const rawPosts = res.data
                    const posts = []
                    for (let key in rawPosts) {
                        posts.push({
                            ...rawPosts[key],
                            id: key,
                            likes: rawPosts[key].likes || [],
                            comments: rawPosts[key].comments || []
                        })
                    }

                    dispatch(setPosts(posts.reverse()))
                    dispatch(isLogged())
                })
                .catch(err => console.log(err))
        }
    }
}