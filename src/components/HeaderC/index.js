/**
 * @format
 * @flow
 */

import React from 'react';
import Node from 'react';
import { Text, Image, TouchableOpacity, View, StatusBar, Platform } from 'react-native';

import { logo_bemaverick } from "../../assets/images/identity";
import { Colors } from '../../constants';
import IconC from "./../IconC";
import styles from './styles';


type _t_props = {
  backgroundColor: string,
  transparent?: boolean,

  title: string,

  leftLogo?: boolean,

  rightIcon?: Node,
  rightIconAction?: Function,

  leftIcon?: Node,
  leftIconAction?: Function
};
const HeaderC = (props: _t_props) => {
  let leftIcon = props.leftIcon;
  const LeftWrap = props.leftIconAction ? TouchableOpacity : View;
  if (props.leftIcon === 'back') {
    leftIcon = (<IconC type="IO" name="ios-arrow-back" />);
  }

  const rightIcon = props.rightIcon;
  const RightWrap = props.rightIconAction ? TouchableOpacity : View;

  return (
    <View
      style={[
        styles.container,
        props.transparent && styles.transparent,
        props.style,
        props.backgroundColor && { backgroundColor: props.backgroundColor },


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
          props.leftLogo && (
            <Image source={logo_bemaverick} style={styles.image}/>
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
