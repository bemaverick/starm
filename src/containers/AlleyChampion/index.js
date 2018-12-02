/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, Dimensions, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'react-native-firebase';
import { HeaderC, ResponsiveImage } from './../../components';
import { topChampions } from './../../database/category';
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
        <ScrollView>
          <ResponsiveImage
            uri={championData.avatar_url}
          />
        </ScrollView>


      </View>
    );
  }
}
