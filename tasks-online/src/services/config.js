import React from 'react'
import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err) {
    err = err.response.data ? err.response.data : err

    Alert.alert('Ocorreu um erro', `${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso', msg)
}

export {
    server,
    showError,
    showSuccess
}