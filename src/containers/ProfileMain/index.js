/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, Text, View, ScrollView, Button } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';
import { membersRef } from "../../database/category";

import { HeaderC, } from './../../components';


export default class ProfileMain extends Component<Props> {
  state = {
    image: '',
    currentUser: {
      email: ''
    }
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    console.log(currentUser)
    if (currentUser && currentUser._user) {
      membersRef.doc(currentUser._user.uid).get().then((data) => {
        console.log(data.data())
        this.setState({currentUser: data.data()}, () => {
          console.log(this.state.currentUser)
        })
      });
      // this.setState({ currentUser }, () => {
      //   console.log(currentUser)
      // })
    }
  }

 logout = () => {
   firebase.auth()
     .signOut()
     .then(() => console.log("success"))
     .catch((error) => console.log("error", error))

 }

  pickPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        image
      })
      console.log(image);
    });
  }


  _renderItem = ({item, index}, parallaxProps) => {
    const { currentUser } = this.state;
    return (
      <View style={{flex: 1}}>
        <ParallaxImage
          source={{ uri: currentUser && currentUser.photoURL}}
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
    const { currentUser } = this.state;
    const rightIcon = (<MaterialIcon name="person-add" size={24} color="#099" />);
    return (
      <View style={{ flex: 1}}>
        <HeaderC
          title="User Profile"
        />

        <ScrollView>
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
            <Button title="pickPhoto" onPress={this.pickPhoto}/>
            <Text>{JSON.stringify(currentUser)}</Text>
            <Text>{JSON.stringify(this.state.image)}</Text>

            <Image
              style={{
                width: 100,
                height: 100
              }}
              source={{uri: this.state.image && this.state.image.path}}
            />

            <Button title="loadPhoto" onPress={this.loadPhoto}/>

          </View>
        </ScrollView>

      </View>
    );
  }
}
