import React from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import styles from './style'

const Button = (props) => {
    const styleButton = [styles.button]
    if(props.easy) styleButton.push(styles.bgEasy)
    if(props.medium) styleButton.push(styles.bgMedium)
    if(props.hard) styleButton.push(styles.bgHard)

    return(
        <TouchableOpacity
            style={styleButton}
            onPress={() => {
                if(props.easy) props.onLevelSelected(0.1)
                if(props.medium) props.onLevelSelected(0.2)
                if(props.hard) props.onLevelSelected(0.3)
            }}
        >
            {props.easy ? <Text style={styles.buttonLabel}>Fácil</Text> : null}
            {props.medium ? <Text style={styles.buttonLabel}>Normal</Text> : null}
            {props.hard ? <Text style={styles.buttonLabel}>Difícil</Text> : null}
        </TouchableOpacity>
    )
}

export default props => {

    return(
        <View>
            <Modal
                onRequestClose={props.onClose}
                visible={props.isVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.frame}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Selecione o nível</Text>
                        <Button {...props} easy />
                        <Button {...props} medium />
                        <Button {...props} hard />
                    </View>
                </View>
            </Modal>
        </View>
    )
}