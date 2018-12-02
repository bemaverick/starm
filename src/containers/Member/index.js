/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, ImageBackground, Text, View, Dimensions, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { HeaderC, ChampionItem } from './../../components';
import { Colors, METRICKS } from './../../constants';
import styles from './styles';
import { getRandomColorHex } from "../../helper";


export default class Member extends Component<Props> {

  state = {
  };


  componentDidMount() {

  }


  render() {
    const { navigation } = this.props;
    const randomColor = getRandomColorHex()
    const memberData = navigation.getParam('memberData');

    return (
      <View style={styles.container}>
        <HeaderC
          transparent
          title="Member"
          leftIcon="back"
          leftIconAction={() => navigation.goBack()}
        />
        <View>
          <View
            style={{
              width: METRICKS.SCREEN_WIDTH,
              height: METRICKS.SCREEN_WIDTH * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: randomColor,
              opacity: 0.85,
            }}
          >
          </View>
          <View
            style={{
              width: METRICKS.SCREEN_WIDTH,
              height: METRICKS.SCREEN_WIDTH * 0.9,
              paddingTop: 40,
              position: 'absolute',
              top: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: memberData.avatar }}
              style={{
                width: METRICKS.SCREEN_WIDTH / 2,
                height: METRICKS.SCREEN_WIDTH / 2,
                borderRadius: METRICKS.SCREEN_WIDTH / 4
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              opacity: 0.7,
              backgroundColor: randomColor,
              height: 40
            }}
          >


          </View>

          <View
            style={{
              flex: 1,
              opacity: 1,
              backgroundColor: randomColor,
              height: 40
            }}
          />
        </View>




        </View>
    );
  }
}
