/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen'
import firebase from 'react-native-firebase';

import configureStore from "./redux";
import Navigator from './navigation';
import styles from './styles';
import { firebaseConfig } from './config';



type Props = {};

console.disableYellowBox = true;

const { store, persistor } = configureStore();


export default class App extends Component<Props> {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    SplashScreen.hide();
    console.log(firebase.database().getServerTime())
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <View style={styles.container}>
            <Navigator />
          </View>
        </PersistGate>

      </Provider>
    );
  }
}

