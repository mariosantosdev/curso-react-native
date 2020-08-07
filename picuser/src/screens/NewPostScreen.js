import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Alert,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

import { addPost } from '../store/actions/post.actions'
import { fonts, colors } from '../utils/styles'

const NewPost = props => {
    const [user, setUser] = useState({})
    const [image, setImage] = useState(null)
    const [desc, setDesc] = useState('')
    const [local, setLocal] = useState('')

    const pickImage = () => {
        if (!props.user.email) return

        ImagePicker.showImagePicker({
            title: 'Escolha uma imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.uri, base64: res.data })
            }
        })
    }

    const getUser = async () => {
        const user = await AsyncStorage.getItem('userData')
        return user.toString().trim() ? true : false
    }

    const save = async () => {
        if (await !getUser()) return
        if (!image) return

        props.onAddPost({
            desc,
            author: {
                name: props.user.name,
                email: props.user.email
            },
            local,
            image,
            comments: new Array(),
            likes: new Array()
        })

        setImage(null)
        setDesc('')
        setLocal('')
        props.navigation.navigate('Home')
    }

    if (!props.user.email) {
        return (
            <View style={styles.notLogged}>
                <Text style={styles.textNotLogged}>Você não está conectado!</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
                    <Text style={{color: colors.blue.primary}}>Clique Aqui para conectar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Adicionar uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.button} disabled={props.loading}>
                    <Text style={styles.buttonText}>Escolher Foto</Text>
                </TouchableOpacity>
                <TextInput placeholder="Adicione uma descrição"
                    style={styles.input}
                    value={desc}
                    onChangeText={text => setDesc(text)}
                    editable={!props.loading}
                />
                <TextInput placeholder="Adicione um local"
                    style={styles.input}
                    value={local}
                    onChangeText={text => setLocal(text)}
                    editable={!props.loading}
                />
                <TouchableOpacity onPress={() => save()} style={styles.button} disabled={props.loading}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    notLogged: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    textNotLogged: { fontFamily: fonts.poppins, fontSize: 25, color: colors.text.primary, textAlign: 'center' },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        fontFamily: fonts.poppinsBold,
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#ddd',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: colors.blue.primary
    },
    buttonText: {
        fontSize: 20,
        color: colors.text.secondary
    },
    input: {
        width: '90%',
        paddingLeft: 25,
        marginTop: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 30,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: fonts.poppins,
    },
})

const mapStateToProps = ({ user, posts }) => {
    return {
        user,
        loading: posts.onLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)