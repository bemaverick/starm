/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, Dimensions, Button } from 'react-native';
import { AlleyChampionTabs } from "../../navigation";
import { HeaderC, ResponsiveImage } from './../../components';
import styles from './styles';





export default class AlleyChampion extends Component<Props> {

  state = {

  };


  componentDidMount() {

  }




  render() {
    const { navigation } = this.props;
    const championData = navigation.getParam('championData');
    return (
      <View style={styles.container}>

        <HeaderC
          transparent
         // title={championData.last_name}
          leftIcon="back"
          leftIconAction={() => navigation.goBack()}
        />

        <View style={styles.imageWrap}>
          <ResponsiveImage
            uri={championData.avatar_url}
          />
          <View style={styles.champNameBlock}>
            <Text style={styles.championName}>{championData.first_name} {championData.last_name}</Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <AlleyChampionTabs />
        </View>



      </View>
    );
  }
}
