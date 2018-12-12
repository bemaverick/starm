/**
 * @format
 * @flow
 */

import React from 'react';
import Node from 'react';
import { Text, Image, TouchableOpacity, View, StatusBar, Platform } from 'react-native';
import { Colors } from '../../constants';
import styles from './styles';


type _t_props = {
  title: string,
  onPress: Function,
  color?: string,
  mb?: number,
  icon?: Node,
  inverted: boolean
};
const ButtonC = (props: _t_props) => {


  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        props.mb && { marginBottom: props.mb },
        props.color && { borderColor: props.color},
        props.inverted && styles.inverted
      ]}
    >
      {
        !!props.icon && (
          <View
            style={styles.iconBlock}
          >
            {props.icon}
          </View>
        )
      }

      <Text
        style={[
          styles.text,
          props.color && { color: props.color},
          props.inverted && styles.invertedText
        ]}
      >
        {props.title}
      </Text>

    </TouchableOpacity>
  )
};
export default ButtonC;
