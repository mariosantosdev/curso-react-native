import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'
import Task from '../components/Task'
import AddTask from '../components/AddTask'

const initialState = {
    showDoneTasks: true,
    visibleTasks: [],
    visibleModal: false,
    tasks: []
}

export default class TaskScreen extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('state')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
    }

    // Funcao para alterar o estado de filtro
    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    // Funcao para filtrar as tarefas
    filterTasks = () => {
        let visibleTasks = null

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('state', JSON.stringify(this.state))
    }

    // Funcao para concluir tarefas
    toggleTask = taskId => {
        const tasks = [...this.state.tasks]

        tasks.forEach(task => {
            if (task.id == taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    saveTask = newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Ocorreu um erro', 'Nome não informado !')
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: parseInt(Math.random() * 100),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })

        this.setState({ tasks, visibleModal: false }, this.filterTasks)
    }

    deleteTask = taskId => {
        const tasks = this.state.tasks.filter(task => task.id !== taskId)

        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        const day = moment().locale('pt-br').format('D')
        const month = moment().locale('pt-br').format('MMMM')
        const year = moment().locale('pt-br').format('YYYY')
        return (
            <View style={styles.container}>
                <AddTask
                    onCancel={() => this.setState({ visibleModal: false })}
                    onSave={this.saveTask}
                    isVisible={this.state.visibleModal}
                />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.headerBar}>
                        <View style={styles.leftItemHeader}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={[styles.text, styles.textDay]}>{day}</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={[styles.text, styles.textMonth]}>{month}</Text>
                                <Text style={[styles.text, styles.textYear]}>{year}</Text>
                            </View>
                        </View>
                        {/* <Text style={[styles.text, styles.textTitle]}>Hoje</Text> */}
                        <View style={styles.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} onDelete={this.deleteTask} toggleTask={this.toggleTask} />}
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ visibleModal: true })} activeOpacity={0.6}>
                    <Icon name="plus" size={25} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    background: { flex: 3 },
    taskList: { flex: 7 },
    headerBar: {
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    iconBar: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    leftItemHeader: {
        flexDirection: 'row'
    },
    text: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontRegular
    },
    textDay: { fontSize: 60, marginRight: 5 },
    textMonth: { fontSize: 27, fontFamily: commonStyles.fontBold },
    textYear: { fontSize: 20 },
    textTitle: { fontSize: 25, fontFamily: commonStyles.fontLight },
    addButton: {
        position: 'absolute',
        right: 25,
        bottom: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: commonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
})