import React from 'react';
import { Platform } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createNavigationContainer,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  AlleyMain, AlleyAddChampion, AlleyChampion, AlleyChampionMediaTab, AlleyChampionInfoTab,
  MemberMain, Member,
  Login, Loading, SignUp, SplashIOS,
  EventMain, EventCalendar,
  FeedMain,
  ProfileMain
} from "./../containers";
import { IconC } from "./../components";
import { Colors } from "./../constants";
import FONTS from "../constants/fonts";


const AlleyChampionTabs = createAppContainer(createMaterialTopTabNavigator({
  Info: {
    screen: AlleyChampionInfoTab
  },
  Media: {
    screen: AlleyChampionMediaTab
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      fontFamily: FONTS.ROBOTO_SLAB_400,
      letterSpacing: 0.8,
      color: Colors.white
    },
    tabStyle: {
      height: 36,
      padding: 0,
      margin: 0
    },
    indicatorStyle: {
      backgroundColor: Colors.white,
    },
    style: {
      backgroundColor: "#222",
    },
  }
}));


const AlleyStack = createStackNavigator({
  AlleyMain: {
    defaultNavigationOptions: {
    },
    screen: AlleyMain
  },
  AlleyChampion: {
    screen: AlleyChampion,
    navigationOptions: {
      tabBarVisible: false,
    },
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


AlleyStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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
  Gym: { screen: FeedMain,
    navigationOptions: ({navigationOptions}) => {
      console.log(navigationOptions)
      return {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconC type="SLI" name="location-pin" color={focused ? 'white' : Colors.white}/>
        )

      },
      //  tabBarVisible: false,

        tabBarColor: Colors.darkBlue
    }}

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
  initialRouteName: 'Gym',
  activeColor: '#fff',
  inactiveColor: '#999',
  barStyle: { backgroundColor: Colors.darkGreen },
});


const appRootNav = createSwitchNavigator({
    Loading,
    SignUp,
    Login,
    SplashIOS,
    TabNavigator
  },
  {
    initialRouteName: Platform.OS === 'ios' ? 'SplashIOS' : 'Loading'
  }
);


const Navigator = createNavigationContainer(appRootNav);

export { AlleyChampionTabs };
export default Navigator;
