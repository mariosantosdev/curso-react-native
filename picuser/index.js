/**
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

import storeConfig from './src/store/store.config'

const store = storeConfig()

const ReduxNavigator = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxNavigator);
