import React from 'react'
import { ScrollView, Animated, Image, View, TouchableOpacity, Easing, Platform, Text } from 'react-native';

import { signInBackground } from "../../../assets/images/background";
import { ButtonC, IconC } from './../../../components';
import {Colors} from "../../../constants";

import styles from './styles';

export default class Login extends React.Component {

  arrowTopOffset = new Animated.Value(400);
  arrowOpacity = new Animated.Value(0);

  state = {
    signIn: true,
    confirmResult: {}
  };


  chooseLoginOrRegister = (actionType) =>  {
    this.animateBackArrowAppear(30, 1);
    this.setState({ signIn: actionType === 'SignIn' }, () => {
      this.scrollView &&
      this.scrollView.scrollToEnd({ animated: true })
    })
  };

  goBack = () => {
    this.scrollView && this.scrollView.scrollTo({x: 0, y: 0 }, { animated: true });
    this.animateBackArrowAppear(400, 0);
  };

  animateBackArrowAppear = (offset, opacity) => {
    Animated.parallel([
      Animated.timing(
        this.arrowTopOffset,
        {
          toValue: offset,
          duration: 350,
          easing: Easing.linear,
        }
      ),
      Animated.timing(
        this.arrowOpacity,
        {
          toValue: opacity,
          duration: 350,
          easing: Easing.linear,
        }
      )
    ]).start();
  };



  render() {
    const { navigation } = this.props;
    const { signIn } = this.state;

    return (
      <View style={styles.container}>

        <Image
          style={styles.backgroundRootImage}
          blurRadius={Platform.OS === 'ios' ? 8 : 1}
          source={signInBackground}
        />

        <Animated.View
          style={[
            styles.backArrow,
            {
              top: this.arrowTopOffset,
              opacity: this.arrowOpacity
            }
          ]}>
          <TouchableOpacity
            onPress={this.goBack}
          >
            <IconC type="IO" name="ios-arrow-back" color={Colors.white} size={24} />
          </TouchableOpacity>
        </Animated.View>



        <View style={styles.flex1}>
          <Text style={styles.logoText}>
            POPOYE
          </Text>
        </View>

        <View>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            ref={ref => this.scrollView = ref}
          >
            <View style={styles.buttonBlockContainer}>
              <ButtonC
                inverted
                title="Sign In"
                onPress={() => this.chooseLoginOrRegister("SignIn")}
                mb={20}
              />
              <ButtonC
                inverted
                title="Sign Up"
                onPress={() => this.chooseLoginOrRegister("SignUp")}
                mb={20}
              />
            </View>

            <View style={styles.buttonBlockContainer} />

            <View style={styles.buttonBlockContainer}>
              {
                signIn ? (
                  <>
                    <ButtonC
                      inverted
                      title="Sign In with email"
                      onPress={() => navigation.navigate("SignInEmail")}
                      mb={20}
                    />
                    <ButtonC
                      inverted
                      title="Sign In with phone"
                      onPress={() => navigation.navigate("SignInPhone")}
                      mb={20}
                    />
                    <ButtonC
                      title="Sign in fb" mb={20} />
                  </>
                ) : (
                  <>
                    <ButtonC
                      title="Sign Up with email"
                      onPress={() => navigation.navigate("SignUpEmail")}
                      mb={20}
                    />
                    <ButtonC
                      title="Sign up fb" mb={20} />
                    {/*<ButtonC*/}
                      {/*title="Sign in" mb={10}*/}
                      {/*onPress={() => this.setState({signIn: true})}*/}

                    {/*/>*/}
                  </>
                )
              }

            </View>


          </ScrollView>
        </View>

      </View>
    )
  }
}
