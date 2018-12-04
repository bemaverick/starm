/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, Text, View, Dimensions, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'react-native-firebase';

import { HeaderC, ChampionItem } from './../../components';
import { topChampions } from './../../database/category';
import styles from './styles';


export default class AlleyMain extends Component<Props> {

  state = {
    keys: [],
    data: {}
  };


  componentDidMount() {
    const { currentUser } = firebase.auth()
    console.log( currentUser );
    // real time updating
    topChampions.on('value', (childrenSnapshot) => {
      console.log(childrenSnapshot)
      this.setState({
        keys: childrenSnapshot._childKeys,
        data: childrenSnapshot._value
      })
    })



    //fetch data once
    topChampions.once('value', function (snapshot) {
      console.log(snapshot.val())
    });
  }

  renderItems = ({item, index}) => {
    const { data } = this.state;
    const { navigation } = this.props;
    const championData = data[item];
    return (
      <ChampionItem
        onPress={() => this.props.navigation.navigate("AlleyChampion", {championData})}
        imageURI={data[item].avatar_url}
        title={data[item].last_name}
      />
    )
  }


  render() {
    const { navigation } = this.props;
    const rightIcon = (<MaterialIcon name="person-add" size={24} color="#099" />);
    return (
      <View style={styles.container}>
        <HeaderC
          leftLogo
          title="Alley of glory"
          rightIcon={rightIcon}
          rightIconAction={() => navigation.navigate('AlleyAddChampion')}
        />

        <FlatList
          numColumns={3}
          keyExtractor = {(item, index) => item}
          data={this.state.keys}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}
