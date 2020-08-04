import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'
import Loading from '../components/Loading'

import { server, showError, showSuccess } from '../services/config'

export default class AuthScreen extends Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        stageNew: false,
        isLoading: false
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signin = async () => {
        this.setState({ isLoading: true })

        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.senha
            })

            AsyncStorage.setItem('userData', JSON.stringify(res.data))
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home', res.data)
        } catch (error) {
            showError(error)
        }

        this.setState({ isLoading: false })
    }

    // Função para criar um usuário
    signup = async () => {
        if (this.state.senha !== this.state.confirmarSenha) return showError('As senhas são diferentes.')

        this.setState({ isLoading: true })
        await axios.post(`${server}/signup`, {
            name: this.state.nome,
            email: this.state.email,
            password: this.state.senha
        })
            .then(_ => {
                this.setState({ stageNew: false, isLoading: false })
                showSuccess('Usuário cadastrado')
            })
            .catch(error => {
                if (error.response.data) {
                    showError(error.response.data)
                } else {
                    showError(error)
                }
                this.setState({ isLoading: false })
            })

    }

    render() {
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.senha && this.state.senha.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.nome && this.state.nome.trim().length >= 2)
            validations.push(this.state.senha === this.state.confirmarSenha)
        }

        const validForm = validations.reduce((t, a) => t && a)

        return (
            <View style={styles.container}>
                <Loading visible={this.state.isLoading} overlay />
                <View style={styles.header}>
                    <Text style={styles.title}>Tasks</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ? 'Criar conta' : 'Entrar'}
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput style={styles.input} placeholderTextColor='#fff'
                            icon="account-outline"
                            placeholder="Nome"
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                        />
                    }
                    <AuthInput style={styles.input} placeholderTextColor='#fff'
                        icon="at"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <AuthInput style={styles.input} placeholderTextColor='#fff' secureTextEntry={true}
                        icon="lock-outline"
                        placeholder="Senha"
                        value={this.state.senha}
                        onChangeText={senha => this.setState({ senha })}
                    />
                    {this.state.stageNew &&
                        <AuthInput style={styles.input} placeholderTextColor='#fff' secureTextEntry={true}
                            icon="lock-outline"
                            placeholder="Confirmar Senha"
                            value={this.state.confirmarSenha}
                            onChangeText={confirmarSenha => this.setState({ confirmarSenha })}
                        />
                    }
                    <TouchableOpacity onPress={() => this.signinOrSignup()} disabled={!validForm}>
                        <View style={[styles.button, validForm ? {} : { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ stageNew: !this.state.stageNew })} disabled={!validForm}>
                        <Text style={styles.textRef}>
                            {this.state.stageNew ? 'Já tenho conta.' : 'Criar minha conta.'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#252830',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '85%',
    },
    title: {
        fontFamily: commonStyles.fontLight,
        color: commonStyles.colors.secondary,
        fontSize: 40,
        marginTop: 40
    },
    subTitle: {
        fontFamily: commonStyles.fontRegular,
        color: commonStyles.colors.secondary,
        fontSize: 25,
        textAlign: 'center',
    },
    formContainer: {
        flex: 3,
        padding: 20,
        width: '85%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#F7AC1B',
        marginTop: 10,
        color: '#fff'
    },
    button: {
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        borderRadius: 50,
        marginTop: 50,
        padding: 10,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: commonStyles.fontRegular,
        fontSize: 25
    },
    textRef: {
        textAlign: 'center',
        fontFamily: commonStyles.fontRegular,
        fontSize: 15,
        color: '#fff',
        marginTop: 10
    }
})