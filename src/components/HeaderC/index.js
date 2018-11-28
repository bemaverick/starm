/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Node from 'react';
import {Dimensions, Text, Image, TouchableOpacity, View, StatusBar, Platform } from 'react-native';
import { Colors } from '../../constants';
import styles from './styles';

const { width } = Dimensions.get('window');

type _t_props = {
  title: string,
  leftItemImageURI?: string,
  rightIcon?: Node,
  rightIconAction?: Function,
  leftIcon?: Node,
  leftIconAction?: Function
};
const HeaderC = (props: _t_props) => {
  const leftIcon = props.leftIcon;
  const LeftWrap = props.leftIconAction ? TouchableOpacity : View;

  const rightIcon = props.rightIcon;
  const RightWrap = props.rightIconAction ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={Platform.OS === 'android'}
        backgroundColor={Colors.darkGreen}
        barStyle="light-content"
      />
      <LeftWrap
        style={styles.leftBlock}
        onPress={props.leftIconAction}
      >
        {
          leftIcon
        }
        {
          !! props.leftItemImageURI && (
            <Image source={{uri: props.leftItemImageURI}} style={styles.image}/>
          )
        }
      </LeftWrap>
      <View style={styles.centralBlock}>
        <Text style={styles.mainText}>
          {props.title && props.title.toUpperCase()}
        </Text>
      </View>
      <RightWrap
        style={styles.rightBlock}
        onPress={props.rightIconAction}
      >
        {
          rightIcon
        }
      </RightWrap>
    </View>
  )
};
export default HeaderC;
