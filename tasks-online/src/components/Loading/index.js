import React from 'react'
import { Modal, View, Text, ActivityIndicator } from 'react-native'
import styles from './style'

export default props => {
    const styleContainer = props.overlay ? styles.container : [styles.container, { backgroundColor: 'rgb(0, 0, 0)' }]
    return (
        <Modal visible={props.visible} transparent={true}>
            <View style={styleContainer}>
                <Text style={styles.text}>Carregando...</Text>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        </Modal>
    )
}