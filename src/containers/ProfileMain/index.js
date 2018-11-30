/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, Text, View, Dimensions, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'react-native-firebase';
import { HeaderC, } from './../../components';

const logoURL = "https://www.westada.org/cms/lib/ID01904074/Centricity/Template/GlobalAssets/images///logos/logo_mountainview-04.png";

export default class ProfileMain extends Component<Props> {
  state = {
    currentUser: {
      email: ''
    }
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    if (currentUser && currentUser._user) {
      this.setState({currentUser: { email: currentUser._user.email}})
    }
  }

 logout = () => {
   firebase.auth().signOut()
     .then(() => console.log("success"))
     .catch(() => console.log("error"))

 }


  render() {
    const { navigation } = this.props;
    const rightIcon = (<MaterialIcon name="person-add" size={24} color="#099" />);
    return (
      <View style={{ flex: 1}}>
        <HeaderC
          leftItemImageURI={logoURL}
          title="User Profile"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button title="logout" onPress={this.logout}/>
          <Text>{this.state.currentUser.email}</Text>

        </View>
      </View>
    );
  }
}
