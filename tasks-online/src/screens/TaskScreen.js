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
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'
import { server, showError } from '../services/config'
import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'

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
        const savedState = JSON.parse(stateString) || initialState

        this.loadTasks()

        this.setState({ showDoneTasks: savedState.showDoneTasks }, this.filterTasks)
    }


    loadTasks = async () => {
        const maxDate = moment().add({ days: this.props.daysAhead }).endOf('day').toDate()

        await axios.get(`${server}/tasks?date=${maxDate}`)
            .then(res => {
                this.setState({ tasks: res.data }, this.filterTasks)
            })
            .catch(error => error.response.data ? showError(error.response.data) : showError(error))
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
        AsyncStorage.setItem('state', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    // Funcao para concluir tarefas
    toggleTask = async taskId => {
        try {
            await axios.put(`${server}/tasks/${taskId}/toggle`)
            this.loadTasks()
        } catch (error) {
            error.response.data ? showError(error.response.data) : showError(error)
        }
    }

    saveTask = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Ocorreu um erro', 'Nome não informado !')
            return
        }

        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                createdAt: newTask.date
            })
        } catch (e) {
            e.response.data ? showError(e.response.data) : showError(e)
        }

        this.setState({ visibleModal: false }, this.loadTasks)
    }

    deleteTask = async taskId => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`)
            this.loadTasks()
        } catch (error) {
            error.response.data ? showError(error.response.data) : showError(error)
        }
    }

    getImage = () => {
        switch (this.props.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            default: return monthImage
        }
    }

    getColor = () => {
        switch (this.props.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tommorow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
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
                    headerColor={this.getColor}
                />
                <ImageBackground source={this.getImage()} style={styles.background}>
                    <View style={styles.headerBar}>
                        <View style={styles.iconBar}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="bars" size={20} color={commonStyles.colors.secondary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.leftItemHeader}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={[styles.text, styles.textDay]}>{day}</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={[styles.text, styles.textMonth]}>{month}</Text>
                                <Text style={[styles.text, styles.textYear]}>{year}</Text>
                            </View>
                            {this.props.title &&
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={[styles.text, styles.textTitle]}>{this.props.title}</Text>
                                </View>
                            }
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item._id}`}
                        renderItem={({ item }) => <Task {...item} onDelete={this.deleteTask} toggleTask={this.toggleTask} />}
                    />
                </View>
                <TouchableOpacity style={[styles.addButton, {backgroundColor: this.getColor()}]} onPress={() => this.setState({ visibleModal: true })} activeOpacity={0.6}>
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
        margin: 30,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    iconBar: {
        flex: 2,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftItemHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
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