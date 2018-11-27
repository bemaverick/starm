/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { HeaderC } from './../../components';
import styles from './styles';

export default class AlleyMain extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/*<HeaderC*/}
          {/*title="Alley of glory"*/}
        {/*/>*/}
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, assumenda autem deleniti dicta ea, eaque enim ex facilis in magni mollitia nobis quam quis ratione rem reprehenderit sint vel?</Text>
      </View>
    );
  }
}
