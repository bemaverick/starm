/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, Image, View, TouchableOpacity, ImageBackground } from 'react-native';
import IconC from './../IconC';
import styles from './styles';


type _t_props = {
  title: string,
  imageURI: string,
  isFirst: boolean,
  onPress: Function
};
const EventItem = (props: _t_props) => {
  const Wrap = props.onPress ? TouchableOpacity : View;
  return (
    <Wrap
      onPress={props.onPress}
      style={[
        styles.container,
        props.isFirst && styles.firstItem
      ]}
    >
      <ImageBackground
        style={[
          styles.image,
          props.isFirst && styles.firstItem
        ]}
        source={{uri: props.imageURL}}
      >
        <View style={[
          styles.overlayContainer,
          props.isFirst && styles.overlayContainerFirst
        ]}>
          <View style={styles.flex3}
          >

            <Text
              style={styles.title}
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <View style={styles.row}>
              <View style={styles.pt2}><IconC type="FA" name="money" size={14} /></View>
              <Text style={styles.cash}>{props.cash}</Text>
            </View>

          </View>

          <View style={styles.additionalInfo}>
            <Text style={styles.date}>{props.date}</Text>
            <View style={styles.row}>
              <IconC type="IO" name="md-locate" size={16}  />
              <Text style={styles.location}>{props.location && props.location.toUpperCase()}</Text>
            </View>


          </View>


        </View>
      </ImageBackground>


    </Wrap>
  );
};
export default EventItem;
