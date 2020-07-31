import React, { useState } from 'react'
import {
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    TextInput,
    Platform,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import styles from './style'

import moment from 'moment'
import commonStyles from '../../commonStyles'

// Componente de overlay
const Overlay = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onCancel}>
            <View style={styles.overlay} />
        </TouchableWithoutFeedback>
    )
}

// Componente do botao
const Button = props => {
    const styleButton = [styles.button]
    if (props.success) styleButton.push(styles.buttonSuccess)
    if (props.cancel) styleButton.push(styles.buttonCancel)

    return (
        <TouchableOpacity style={styleButton} onPress={props.event}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const initialState = {
    desc: '',
    date: new Date(),
    showDatePicker: false
}

export default props => {
    const [desc, setDesc] = useState(initialState.desc)
    const [date, setDate] = useState(initialState.date)
    const [showDatePicker, setShowDatePicker] = useState(initialState.showDatePicker)

    // Funcao para resetar os estados
    const setupState = () => {
        setDesc(initialState.desc)
        setDate(initialState.date)
        setShowDatePicker(initialState.showDatePicker)
    }

    // Funcao para pegar a data
    const getDate = () => {
        const dateString = moment(date).format('ddd, D [de] MMMM [de] YYYY')
        let datePicker = <DateTimePicker value={date} mode='date'
            onChange={(event, date) => {
                if(event.type === 'dismissed') setShowDatePicker(false)
                if(date === undefined){
                    setDate(new Date())
                    setShowDatePicker(false)
                }else{
                    setDate(date)
                    setShowDatePicker(false)
                }
            }} />

        if (Platform.OS === 'android') {
            datePicker = (
                <View style={{ alignItems: 'center', marginTop: 7 }}>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={{fontFamily: commonStyles.fontRegular, fontSize: 20}}>{dateString}</Text>
                    </TouchableOpacity>
                    {showDatePicker && datePicker}
                </View>
            )
        }

        return datePicker
    }

    // Funcao para salvar a task
    const saveTask = () => {
        console.log('a')
        const newTask = {
            desc,
            date
        }

        props.onSave && props.onSave(newTask)
        setupState()
    }

    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
            <Overlay {...props} />
            <View style={styles.container}>
                <Text style={styles.title}>Adicionar Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome da Tarefa'
                    value={desc}
                    onChangeText={(desc) => setDesc(desc)}
                />
                {getDate()}
                <View style={styles.buttonsBar}>
                    <Button text="Salvar" event={() => saveTask()} success />
                    <Button text="Cancelar" event={props.onCancel} cancel />
                </View>
            </View>
            <Overlay {...props} />
        </Modal>
    )
}