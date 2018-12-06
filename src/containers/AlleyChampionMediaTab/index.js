/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, Dimensions, Button } from 'react-native';

import styles from './styles';





export default class AlleyChampionMediaTab extends Component<Props> {

  state = {

  };


  componentDidMount() {

  }




  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>
          AlleyChampionMediaTab
        </Text>

      </View>
    );
  }
}
