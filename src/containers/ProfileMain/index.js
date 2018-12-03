/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, Text, View, Dimensions, Button } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
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
    console.log(currentUser)
    if (currentUser && currentUser._user) {
      this.setState({currentUser: { email: currentUser._user.email}})
    }
  }

 logout = () => {
   firebase.auth().signOut()
     .then(() => console.log("success"))
     .catch((error) => console.log("error", error))

 }

  _renderItem ({item, index}, parallaxProps) {
    return (
      <View style={{flex: 1}}>
        <ParallaxImage
          source={{ uri: 'https://www.sideshowtoy.com/wp-content/uploads/2018/03/marvel-avengers-infinity-war-thor-sixth-scale-figure-hot-toys-silo-903422.png' }}
          containerStyle={{width: 400, height: 400}}
          style={{ width: 400, height: 400}}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
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

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={[123, 42321, 44231]}
            hasParallaxImages={true}
            renderItem={this._renderItem}
            sliderWidth={500}
            itemWidth={400}
          />
          <Button title="logout" onPress={this.logout}/>
          <Text>{this.state.currentUser.email}</Text>

        </View>
      </View>
    );
  }
}
