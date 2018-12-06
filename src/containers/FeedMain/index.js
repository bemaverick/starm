/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Animated, MaskedViewIOS, Text, View, Image, Button, Easing} from 'react-native';

import { HeaderC, ButtonC, IconC, EventItem } from './../../components';

import { Colors } from './../../constants';
import styles from './styles';
import FONTS from "../../constants/fonts";
import METRICKS from "../../constants/metricks";


export default class FeedMain extends Component<Props> {
  fontScale = [1,2,3,4,5,6,7].map(() => new Animated.Value(0));
  Value = [
    new Animated.Value(1),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0)
  ]

  imageOpacity = [
    new Animated.Value(1),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0)
  ]

  constructor(props) {
    super(props);
    this.Value1 = new Animated.Value(1);
  }

  componentDidMount() {

    setTimeout(() => {
      this.runAnimation(0)
    }, 2000)




      // Animated.timing(
      //   this.fontScale,
      //   {
      //     toValue: 1,
      //     duration: 2000,
      //     easing: Easing.linear,
      //     useNativeDriver: true,
      //   }
      // ).start();

  }

  runAnimation(i) {
    Animated.stagger(4000, [
      Animated.timing(
        this.fontScale[i],
        {
          toValue: 1,
          duration: 5000,
          easing: Easing.easeIn,
        }
      ),
      Animated.parallel([
        // Animated.timing(
        //   this.Value[i + 1],
        //   {
        //     toValue: 1,
        //     duration: 100,
        //     easing: Easing.linear,
        //   }
        // ),
        Animated.timing(
          this.imageOpacity[i + 1],
          {
            toValue: 1,
            duration: 800,
            easing: Easing.easeIn,
          }
        ),
        ]
      )

    ]).start(() => {
      if (i < 5) {
        this.Value[i + 1].setValue(1)

        this.runAnimation(i + 1)
      }
    })




    // Animated.sequence([
    //   Animated.stagger(1500, [
    //     Animated.timing(
    //       this.fontScale[0],
    //       {
    //         toValue: 1,
    //         duration: 2000,
    //         easing: Easing.linear,
    //         useNativeDriver: true,
    //       }
    //     ),
    //     Animated.parallel([
    //       // Animated.timing(
    //       //   this.Value[0],
    //       //   {
    //       //     toValue: 0,
    //       //     duration: 800,
    //       //     easing: Easing.linear,
    //       //     useNativeDriver: true,
    //       //   }
    //       // ),
    //       Animated.timing(
    //         this.Value1,
    //         {
    //           toValue: 1,
    //           duration: 800,
    //           easing: Easing.linear,
    //           useNativeDriver: true,
    //         }
    //       )
    //     ])
    //
    //
    //
    //
    //   ])
    // ]).start()

    // Animated.stagger(1500, [
    //   Animated.timing(
    //     this.fontScale,
    //     {
    //       toValue: 1,
    //       duration: 2000,
    //       easing: Easing.linear,
    //       useNativeDriver: true,
    //     }
    //   ),
    //   Animated.timing(
    //     this.Value[0],
    //     {
    //       toValue: 1,
    //       duration: 500,
    //       easing: Easing.linear,
    //       useNativeDriver: true,
    //     }
    //   )
    // ])
  }

  render() {
    const { navigation } = this.props;
    const rightHeaderIcon = (<IconC type="AD" name="calendar" />);
    return (
      <View style={styles.container}>
        <HeaderC
          backgroundColor={'rgba(0, 0, 0, .6)'}
          leftLogo
          title="Feed"
          rightIcon={rightHeaderIcon}
          rightIconAction={() => navigation.navigate('EventCalendar')}

      />

        <MaskedViewIOS
          style={{ flex: 1, flexDirection: 'row', height: '100%' }}
          maskElement={
            <View style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[0].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[0]

                }}
              >
                P
              </Animated.Text>

              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[1].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[1]

                }}
              >
                O
              </Animated.Text>

              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[2].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[2]

                }}
              >
                P
              </Animated.Text>

              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[3].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[3]

                }}
              >
                O
              </Animated.Text>

              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[4].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[4]

                }}
              >
                Y
              </Animated.Text>

              <Animated.Text
                style={{
                  fontSize: 570,
                  lineHeight: 650,
                  position: 'absolute',
                  fontFamily: FONTS.ROBOTO_SLAB_700,
                  transform: [{scale: this.fontScale[5].interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })}],
                  opacity: this.Value[5]

                }}
              >
                E
              </Animated.Text>


            </View>
          }
        >

          <Animated.Image
            source={{uri: 'https://uproxx.files.wordpress.com/2018/04/wal-billboard-jpg.jpeg?quality=95&w=650'}}
            style={{
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: this.imageOpacity[0]
            }}
          />

          <Animated.Image
            source={{uri: 'https://i.ytimg.com/vi/fcjJYsKY84o/maxresdefault.jpg'}}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              opacity: this.imageOpacity[1]
            }}
          />

          <Animated.Image
            source={{uri: 'https://pbs.twimg.com/profile_images/448944912692568064/_9ZV6Q4b.jpeg'}}
            style={{
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: this.imageOpacity[2]
            }}
          />


          <Animated.Image
            source={{uri: 'https://i.pinimg.com/originals/4c/39/99/4c3999f62aa5d89a6389603a70d007ef.jpg'}}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              opacity: this.imageOpacity[3]
            }}
          />

          <Animated.Image
            source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2017/02/20110723-DSC_0567.jpg'}}
            style={{
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: this.imageOpacity[4]
            }}
          />


          <Animated.Image
            source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2017/02/20110723-DSC_0567.jpg'}}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: METRICKS.SCREEN_WIDTH, height: METRICKS.SCREEN_HEIGHT,
              opacity: this.imageOpacity[5]
            }}
          />
          {/*<View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />*/}
          {/*<View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />*/}
          {/*<View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />*/}
        </MaskedViewIOS>

      </View>
    );
  }
}
