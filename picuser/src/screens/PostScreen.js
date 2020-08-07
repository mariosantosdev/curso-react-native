import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback as Touch,
    TextInput,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux'
import { addComment, toggleLike } from '../store/actions/post.actions'

import { colors, fonts } from '../utils/styles'
import Comment from '../components/Comments'


const Post = props => {
    const [post, setPost] = useState(props.route.params)
    const [comment, setComment] = useState('')
    var isLike = null

    post.likes.forEach(element => {
        if (element.email === props.user.email) isLike = { color: '#FF0000' }
    });

    const iconHeart = isLike ? "heart" : "heart-outline"
    const canLike = props.user.email ? () => toggleLike() : () => { }
    const canComment = props.user.email ? true : false
    

    const addComment = async () => {
        await props.onAddComment({
            postId: post.id,
            newComment: {
                author: props.user.name,
                email: props.user.email,
                comment,
            }
        })

        setComment('')
        post.comments.push({ // GAMBIARRA PARA ATUALIZAR O COMENTARIO NA TELA
            author: props.user.name,
            email: props.user.email,
            comment
        })
        setPost({ ...post })
    }

    const toggleLike = () => {
        props.onToggleLike({
            postId: post.id,
            email: props.user.email
        })

        // if (post.likes.some(like => like.email === props.user.email)) {
        //     setLikes(likesCount - 1)
        //     setIsLike(null)
        // } else {
        //     setLikes(likesCount + 1)
        //     setIsLike({ color: '#FF0000' })
        // }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image source={post.image} style={styles.image} />
                <View style={styles.topHeader}>
                    <Touch onPress={() => props.navigation.goBack()}>
                        <Icon name="arrow-left" size={25} color="#fff" />
                    </Touch>
                    <Icon name="dots-vertical" size={25} color="#fff" />
                </View>
            </View>
            <View style={styles.bottomHeader}>
                {post.desc ? <Text style={[styles.text, styles.textDesc]}>{post.desc}</Text> : null}
                <View style={styles.bottomIcons}>
                    <View style={styles.iconBottom}>
                        <Icon style={styles.icons} name="comment-outline" size={30} /><Text style={[styles.text, styles.textIcons]}>{post.comments.length}</Text>
                    </View>
                    <Touch onPress={canLike} >
                        <View style={styles.iconBottom}>
                            <Icon style={[styles.icons, isLike]} name={iconHeart} size={30} /><Text style={[styles.text, styles.textIcons]}>{post.likes.length}</Text>
                        </View>
                    </Touch>
                </View>
            </View>
            <ScrollView>
                <Comment comments={post.comments} />
            </ScrollView>
            <View style={styles.bottom}>
                <View style={styles.leftBottom}>
                    <Gravatar style={styles.avatar} options={{ email: props.user.email, secure: true }} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="rgba(0, 0, 0, 0.6)"
                    placeholder="Adicione um comentario"
                    value={comment}
                    onChangeText={comment => setComment(comment)}
                    onSubmitEditing={addComment}
                    editable={canComment}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {},
    topHeader: {
        elevation: 1,
        width: '100%',
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    bottom: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    bottomHeader: {
        paddingLeft: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.text.subText
    },
    bottomIcons: {
        flexDirection: 'row',
    },
    text: {
        fontFamily: fonts.poppins,
        color: colors.text.primary,
        fontSize: 18,
    },
    textIcons: { color: '#334354', marginLeft: 5 },
    textDesc: { marginVertical: 5, marginLeft: 5 },
    icons: { color: '#334354' },
    iconBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 2.8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 20
    },
    input: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 30,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: fonts.poppins,
        paddingLeft: 25,
    },
})

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: comment => dispatch(addComment(comment)),
        onToggleLike: post => dispatch(toggleLike(post)),
    }
}

const mapStateToPros = ({ user, posts }) => {
    return {
        user,
        loading: posts.onLoading
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Post)