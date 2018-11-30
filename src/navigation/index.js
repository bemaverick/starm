import React from 'react';

import { createNavigationContainer, createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  AlleyMain, AlleyAddChampion,
  MemberMain
} from "./../containers";
import { CustomIcon } from "./../components";

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "./../constants";

const AlleyStack = createStackNavigator({
  AlleyMain: {
    defaultNavigationOptions: {
    },
    screen: AlleyMain
  },
  AlleyAddChampion: {
    screen: AlleyAddChampion
  }
}, {
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: true
  }
});

const TabNavigator = createMaterialBottomTabNavigator({
  Alley: {
    screen: AlleyStack,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcon size={24} name="account-star" color="white"/>
      ),
      tabBarColor: Colors.darkGreen
    },

  },

  Competitor: {
    screen: MemberMain,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <MaterialCommunityIcon size={24} name="human-handsup" color={focused ? 'white' : tintColor}/>

        )

      },
      tabBarColor: Colors.darkBlue

    }
  },
  Profile: { screen: AlleyMain },
  Setting: { screen: AlleyMain },
  Event: { screen: AlleyMain }
}, {
  initialRouteName: 'Alley',
  activeColor: '#fff',
  inactiveColor: '#999',
  barStyle: { backgroundColor: Colors.darkGreen },
});

const Navigator = createNavigationContainer(TabNavigator);

export default Navigator;
