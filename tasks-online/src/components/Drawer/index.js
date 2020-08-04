import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'

import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import styles from './style'

export default props => {
    const gravatarOption = {
        email: props.navigation.getParam('email'),
        secure: true
    }

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Gravatar style={styles.avatar} options={gravatarOption} />
                <View style={styles.infoUser}>
                    <Text style={[styles.text, styles.name]}>{props.navigation.getParam('name')}</Text>
                    <Text style={[styles.text, styles.email]}>{props.navigation.getParam('email')}</Text>
                </View>
            </View>
            <DrawerItems {...props} />
            <TouchableOpacity onPress={logout}>
                <View style={styles.logoutContent}>
                    <Text style={[styles.text, styles.logout]}> Sair</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}