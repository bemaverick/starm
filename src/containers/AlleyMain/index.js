/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { HeaderC } from './../../components';
import styles from './styles';

const logoURL = "https://www.westada.org/cms/lib/ID01904074/Centricity/Template/GlobalAssets/images///logos/logo_mountainview-04.png"
export default class AlleyMain extends Component<Props> {
  render() {
    const rightIcon = (<MaterialIcon name="person-add" size={24} color="#099" />);
    return (
      <View style={styles.container}>
        <HeaderC
          leftItemImageURI={logoURL}
          title="Alley of glory"
          rightIcon={rightIcon}
        />
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, assumenda autem deleniti dicta ea, eaque enim ex facilis in magni mollitia nobis quam quis ratione rem reprehenderit sint vel?</Text>
      </View>
    );
  }
}
