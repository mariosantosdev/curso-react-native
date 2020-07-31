import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import TelaD from '../screens/TelaDrawer'

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator initialRouteName="TelaA">
            <Drawer.Screen name="TelaA" component={TelaA} />
            <Drawer.Screen name="TelaB" component={TelaB} />
            <Drawer.Screen name="TelaD"  component={TelaD} options={{title: 'Especial'}} />
        </Drawer.Navigator>
    )
}