import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/actions/post.actions'

import Header from '../components/Header'
import PostFeed from '../components/PostFeed'

const Home = props => {
    useEffect(() => {
        props.onFetchPosts()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header {...props.navigation} />
            {props.loading ?
                <PostFeed loading />
            :
                <FlatList
                    data={props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <PostFeed posts={item} onClick={() => props.navigation.navigate('Post', item)} />
                    }
                />
            }

        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: posts => dispatch(fetchPosts(posts))
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts,
        loading: posts.onLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)