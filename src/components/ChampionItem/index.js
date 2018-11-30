/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';


type _t_props = {
  title: string,
  imageURI: string
};
const ChampionItem = (props: _t_props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.imageURI}} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
export default ChampionItem;
