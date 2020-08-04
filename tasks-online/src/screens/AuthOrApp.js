import React, { Component } from 'react'
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class AuthOrApp extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        const userDataJSON = await AsyncStorage.getItem('userData')
        let userData = null

        try {
            userData = JSON.parse(userDataJSON)
        } catch (error) {
            // userData Invalido
        }

        if (userData && userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            this.setState({ isLoading: false })
            this.props.navigation.navigate('Home', userData)
        } else {
            this.setState({ isLoading: false })
            this.props.navigation.navigate('Auth')
        }
    }

    render() {
        return (
            <Loading visible={this.props.isLoading} />
        )
    }
}