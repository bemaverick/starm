import React from 'react';
import { createNavigationContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  AlleyMain, AlleyAddChampion, AlleyChampion,
  MemberMain, Member,
  Login, Loading, SignUp,
  EventMain, EventCalendar,
  ProfileMain
} from "./../containers";
import { IconC } from "./../components";
import { Colors } from "./../constants";


const AlleyStack = createStackNavigator({
  AlleyMain: {
    defaultNavigationOptions: {
    },
    screen: AlleyMain
  },
  AlleyChampion,
  AlleyAddChampion: {
    screen: AlleyAddChampion
  }
}, {
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: true
  }
});

const MemberStack = createStackNavigator({
  MemberMain: {
    screen: MemberMain
  },
  Member
}, {
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: true
  }
});

const EventStack = createStackNavigator({
  EventMain: {
    screen: EventMain
  },
  EventCalendar
}, {
  initialRouteName: 'EventMain',
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: true
  }
});

const ProfileStack = createStackNavigator({
  ProfileMain: {
    screen: ProfileMain
  },
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
        <IconC type="IO" name="md-medal" color="white"/>
      ),
      tabBarColor: Colors.darkGreen
    },

  },

  Member: {
    screen: MemberStack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconC type="MIC" name="account-group" color={focused ? 'white' : Colors.white}/>
        )

      },
      tabBarColor: Colors.darkBlue
    }
  },
  Event: {
    screen: EventStack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconC type="IO" name="ios-calendar" color={focused ? 'white' : Colors.white}/>
        )

      },
      tabBarColor: Colors.darkRed
    }
  },
  Gym: { screen: AlleyMain,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconC type="SLI" name="location-pin" color={focused ? 'white' : Colors.white}/>
        )

      },
      tabBarColor: Colors.darkBlue
    }

  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconC type="IO" name="ios-settings" color={focused ? 'white' : Colors.white}/>
        )

      },
      tabBarColor: Colors.darkBlue
    }
  },
}, {
  initialRouteName: 'Event',
  activeColor: '#fff',
  inactiveColor: '#999',
  barStyle: { backgroundColor: Colors.darkGreen },
});


const appRootNav = createSwitchNavigator({
    Loading,
    SignUp,
    Login,
    TabNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);


const Navigator = createNavigationContainer(appRootNav);

export default Navigator;
