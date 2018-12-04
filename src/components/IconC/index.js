/**
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import { Colors } from '../../constants';


type _t_props = {

};
const IconC = (props: _t_props) => {
  let Icon;
  switch (props.type) {
    case "AD":
      Icon = AntDesign;
      break;
    case "EN":
      Icon = Entypo;
      break;
    case "EI":
      Icon = EvilIcons;
      break;
    case "FE":
      Icon = Feather;
      break;
    case "FA":
      Icon = FontAwesome;
      break;
    case "FA5":
      Icon = FontAwesome5;
      break;
    case "FO":
      Icon = Foundation;
      break;
    case "IO":
      Icon = Ionicons;
      break;
    case "MI":
      Icon = MaterialIcons;
      break;
    case "MIC":
      Icon = MaterialCommunityIcons;
      break;
    case "OC":
      Icon = Octicons;
      break;
    case "ZO":
      Icon = Zocial;
      break;
    case "SLI":
      Icon = SimpleLineIcons;
      break;
    default:
      Icon = View;
  }
 return <Icon name={props.name} size={props.size || 24} color={props.color || Colors.white} />;
};
export default IconC;
