/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Animated, MaskedViewIOS, Text, View, Image, Button, Easing} from 'react-native';

import { HeaderC, ButtonC, IconC, EventItem } from './../../components';

import { Colors } from './../../constants';
import styles from './styles';



export default class FeedMain extends Component<Props> {

  componentDidMount() {

  }



  render() {
    const { navigation } = this.props;
    const rightHeaderIcon = (<IconC type="AD" name="calendar" />);
    return (
      <View style={styles.container}>
        <HeaderC
         // transparent
          backgroundColor={'rgba(0, 0, 0, .6)'}
          leftLogo
          title="Feed"
          rightIcon={rightHeaderIcon}
          rightIconAction={() => navigation.navigate('EventCalendar')}
        />


      </View>
    );
  }
}
