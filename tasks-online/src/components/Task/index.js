import React from 'react'
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './style'

export default props => {
    const date = props.doneAt ? props.doneAt : props.createdAt
    const formattedDate = moment(date).locale('pt-br').format('DD[/]MM[/]YYYY')

    const getCheckView = (doneAt) => {
        if (doneAt == null) {
            return (
                <Icon name="circle-thin" size={30} color='#555' />
            )
        } else {
            return (
                <Icon name="check-circle" size={30} color='#10ac84' />
            )
        }
    }

    const doneTitleStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {}

    const RightComponent = () => {
        return(
            <TouchableOpacity onPress={() => props.onDelete && props.onDelete(props._id)} style={styles.rightComponent}>
                <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
        )
    }
    
    const LeftComponent = () => {
        return(
            <TouchableOpacity style={styles.leftComponent}>
                <Icon name="trash" size={20} color="#fff" />
                <Text style={styles.textExclude}>Excluir</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable
            renderRightActions={RightComponent}
            renderLeftActions={LeftComponent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props._id)}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props._id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneTitleStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate + ''}</Text>
                </View>
            </View>
        </Swipeable>
    )
}