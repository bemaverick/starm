/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createNavigationContainer,  } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AlleyMain } from './src/containers';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <Button title="Go" onPress={() => this.props.navigation.navigate('Card')}/>
      </View>
    );
  }
}

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
      tabBarColor: '#032'
    },

  },

  Competitor: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <MaterialCommunityIcon size={24} name="human-handsup" color={focused ? 'white' : tintColor}/>

        )

      },
      tabBarColor: "blue"

    }
  },
  Profile: { screen: Home },
  Setting: { screen: AlleyMain },
  Event: { screen: AlleyMain }
}, {
  initialRouteName: 'Alley',
  activeColor: '#fff',
  inactiveColor: '#999',
  barStyle: { backgroundColor: '#032' },
});

const Navigator = createNavigationContainer(TabNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
