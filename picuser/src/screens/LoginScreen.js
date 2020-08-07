import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { login } from '../store/actions/user.actions'

import { fonts, colors } from '../utils/styles'

const Login = props => {
    const [state, setState] = useState({
        name: '',
        email: '',
    })

    useEffect(() => {
        async function getUser() {
            const user = JSON.parse(await AsyncStorage.getItem('userData'))
            if (user) {
                props.onLogin({ ...user })
                props.navigation.navigate('Profile')
            }
        }

        getUser()
    }, [])

    const login = async () => {
        props.onLogin({ ...state })
        setState({ name: '', email: '' })
        
        props.navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.textTitle]}>PicUser</Text>
            <View style={styles.form}>
                <View style={styles.formItem}>
                    <Text style={[styles.text, styles.textInput]}>Nome</Text>
                    <TextInput style={styles.input}
                        autoFocus={true}
                        value={state.name}
                        onChangeText={text => setState({ ...state, name: text })}
                    />
                </View>
                <View style={styles.formItem}>
                    <Text style={[styles.text, styles.textInput]}>E-mail</Text>
                    <TextInput style={styles.input}
                        keyboardType="email-address"
                        value={state.email}
                        onChangeText={text => setState({ ...state, email: text })}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.formItem}>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.buttonLogin]} onPress={() => login()}>
                        <Text style={[styles.text, styles.textLogin]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, marginHorizontal: 30, marginTop: 20 },
    text: { fontFamily: fonts.poppins, color: colors.text.primary, fontSize: 20 },
    textTitle: { fontSize: 30, fontFamily: fonts.poppinsBold, fontWeight: 'bold' },
    textInput: { color: colors.text.subText, marginBottom: 10, },
    textLogin: { color: colors.text.secondary, textAlign: 'center' },
    textRegister: { color: colors.text.primary, textAlign: 'center' },
    form: { marginTop: 30 },
    formItem: { marginVertical: 20 },
    input: { borderWidth: 1, borderColor: colors.text.primary, borderRadius: 5 },
    button: {
        padding: 15,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        borderColor: colors.text.primary,
        borderWidth: 1
    },
    buttonLogin: { backgroundColor: colors.blue.primary, borderColor: colors.blue.dark },
    buttonRegister: { marginTop: -20 }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)