/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';


type _t_props = {
  title: string,
  imageURI: string,
  onPress: Function
};
const ChampionItem = (props: _t_props) => {
  const Wrap = props.onPress ? TouchableOpacity : View;
  return (
    <Wrap
      onPress={props.onPress}
      style={styles.container}
    >
      <Image style={styles.image} source={{uri: props.imageURI}} />
      <Text style={styles.text}>{props.title}</Text>
    </Wrap>
  );
};
export default ChampionItem;
