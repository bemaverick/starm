import React from 'react';

import { createNavigationContainer, createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { AlleyMain } from "./../containers";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "./../constants";

const AlleyStack = createStackNavigator({
  AlleyMain: {
    defaultNavigationOptions: {
    },
    screen: AlleyMain
  },
  Card: {
    screen: AlleyMain
  }
}, {
  defaultNavigationOptions: {
    header: null

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
    screen: AlleyMain,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <MaterialCommunityIcon size={24} name="human-handsup" color={focused ? 'white' : tintColor}/>

        )

      },
      tabBarColor: "blue"

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
