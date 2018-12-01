/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import firebase from 'react-native-firebase';


import Navigator from './navigation';
import styles from './styles';
import { firebaseConfig } from './config';



type Props = {};

console.disableYellowBox = true;



export default class App extends Component<Props> {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    SplashScreen.hide();
    console.log(firebase.database().getServerTime())
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

