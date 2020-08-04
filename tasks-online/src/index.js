import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import AuthScreen from './screens/AuthScreen'
import TaskScreen from './screens/TaskScreen'
import AuthOrApp from './screens/AuthOrApp'

import Menu from './components/Drawer'
import commonStyles from './commonStyles'

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontRegular,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            fontWeight: 'bold',
            color: '#fff'
        },
        activeBackgroundColor: '#F7AC1B'
    }
}

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <TaskScreen title="Hoje" daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskScreen title="Amanhã" daysAhead={1} {...props} />,
        navigationOptions: {
            title: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <TaskScreen title="Semana" daysAhead={7} {...props} />,
        navigationOptions: {
            title: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen: props => <TaskScreen title="Mês" daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mês'
        }
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const mainRoutes = {
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: AuthScreen
    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, { initialRouteName: 'AuthOrApp' })

export default createAppContainer(mainNavigator)