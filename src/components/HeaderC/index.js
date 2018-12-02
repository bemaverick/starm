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
  transparent?: boolean,
  title: string,
  backgroundColor: string,
  leftItemImageURI?: string,
  rightIcon?: Node,
  rightIconAction?: Function,
  leftIcon?: Node,
  leftIconAction?: Function
};
const HeaderC = (props: _t_props) => {
  let leftIcon = props.leftIcon;
  const LeftWrap = props.leftIconAction ? TouchableOpacity : View;
  if (props.leftIcon === 'back') {
    leftIcon = (<Ionicon name="ios-arrow-back" color={Colors.white} size={24} />);
  }

  const rightIcon = props.rightIcon;
  const RightWrap = props.rightIconAction ? TouchableOpacity : View;

  return (
    <View
      style={[
        styles.container,
        props.backgroundColor && { backgroundColor: props.backgroundColor },
        props.transparent && styles.transparent
        ]}
    >
      <StatusBar
        hidden={Platform.OS === 'android'}
        backgroundColor={props.backgroundColor ? props.backgroundColor : Colors.darkGreen}
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
