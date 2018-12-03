/**
 * @format
 * @flow
 */

import React from 'react';
import Node from 'react';
import { Text, Image, TouchableOpacity, View, StatusBar, Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../constants';
import styles from './styles';


type _t_props = {
  title: string,
  onPress: Function,
  mb?: number
};
const ButtonC = (props: _t_props) => {


  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        props.mb && { marginBottom: props.mb }
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>

    </TouchableOpacity>
  )
};
export default ButtonC;
