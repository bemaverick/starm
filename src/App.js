/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Navigator from './navigation';
import styles from './styles';



type Props = {};



export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

