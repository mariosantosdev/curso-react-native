import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './routes/Stack'
import Tab from './routes/Tab'
import Drawer from './routes/Drawer'

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Stack /> */}
                {/* <Tab /> */}
                <Drawer />
            </NavigationContainer>
        </SafeAreaView>
    )
}