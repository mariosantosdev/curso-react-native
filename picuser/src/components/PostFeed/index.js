import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { toggleLike, deletePost } from '../../store/actions/post.actions'

import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PostLoading = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.leftHeader}>
                <View style={[styles.avatar, styles.loading]} />
                <View>
                    <Text style={[styles.text, styles.loading, { width: 60, height: 10, marginVertical: 5 }]} />
                    <Text style={[styles.text, styles.loading, { width: 40, height: 10, marginVertical: 5 }]} />
                </View>
            </View>
        </View>
        <View style={[styles.image, styles.loading]} />
        <View style={styles.bottom}>
            <View style={styles.iconBottom}>
                <Icon style={styles.icons} name="comment-outline" size={30} />
            </View>
            <View style={styles.iconBottom}>
                <Icon style={[styles.icons]} name={"heart-outline"} size={30} />
            </View>
        </View>
    </View>
)

const Post = props => {
    if (props.loading) return <PostLoading />
    
    let isLike = null

    props.posts.likes.forEach(element => {
        if (element.email === props.user.email) return isLike = { color: '#FF0000' }
    });

    const iconHeart = isLike ? "heart" : "heart-outline"
    const canLike = props.user.email ? () => toggleLike() : () => { }

    const toggleLike = () => {
        props.onToggleLike({
            postId: props.posts.id,
            email: props.user.email
        })
    }

    const deletePost = post => {
        props.onDelete(post)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Gravatar style={styles.avatar} options={{ email: props.posts.author.email, secure: true }} />
                    <View>
                        <Text style={[styles.text, styles.textName]}>{props.posts.author.name}</Text>
                        <Text style={[styles.text, styles.textLocal]}>{props.posts.local}</Text>
                    </View>
                </View>
                <View>
                    {props.user.email == props.posts.author.email
                        ? <TouchableOpacity activeOpacity={0.6} onPress={() => deletePost(props.posts)}>
                            <Icon style={styles.icons} name="trash-can-outline" size={30} />
                        </TouchableOpacity>
                        : null
                    }
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onClick} activeOpacity={0.6}>
                <Image style={styles.image} source={props.posts.image} />
            </TouchableWithoutFeedback>
            {props.posts.desc ? <Text style={[styles.text, styles.textDesc]}>{props.posts.desc}</Text> : null}
            <View style={styles.bottom}>
                <TouchableWithoutFeedback onPress={props.onClick} activeOpacity={0.6}>
                    <View style={styles.iconBottom}>
                        <Icon style={styles.icons} name="comment-outline" size={30} /><Text style={[styles.text, styles.textIcons]}>{props.posts.comments.length}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={canLike}>
                    <View style={styles.iconBottom}>
                        <Icon style={[styles.icons, isLike]} name={iconHeart} size={30} /><Text style={[styles.text, styles.textIcons]}>{props.posts.likes.length}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleLike: post => dispatch(toggleLike(post)),
        onDelete: post => dispatch(deletePost(post))
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)