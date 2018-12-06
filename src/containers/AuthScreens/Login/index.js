import React from 'react'
import { ScrollView, Animated, Image, View, TouchableOpacity, Easing, Platform, Text } from 'react-native';
import firebase from 'react-native-firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { signInBackground } from "../../../assets/images/background";
import { ButtonC, TextInputC } from './../../../components';
import styles from './styles';
import {Colors} from "../../../constants";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.arrowTopOffset = new Animated.Value(400);
    this.arrowOpacity = new Animated.Value(0);
    this.state = {
      email: '',
      password: '',
      phone: '',
      code: '',
      loginType: 'Email', // or Phone
      confirmResult: {
      }
    };
  }

  goToLogin = (loginType) =>  {
    this.animateBackArrowAppear(30, 1);
    this.setState({ loginType }, () => {
      this.scrollView && this.scrollView.scrollToEnd({ animated: true })
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

  onChangeLoginText = (text) => {
    const { loginType } = this.state;

    if (loginType === 'Email') {
      this.setState({email: text})
    } else {
      this.setState({phone: text})
    }
  };

  onChangeCodeText = (text) => {
    const { loginType } = this.state;

    if (loginType === 'Email') {
      this.setState({password: text})
    } else {
      this.setState({code: text})
    }
  }

  loginEmailOrPhone = () => {
    const { loginType } = this.state;

    if (loginType === 'Email') {
      this.loginWithEmail();
    } else {

    }
  };

  loginWithEmail = () => {
    const { navigation } = this.props;
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('TabNavigator'))
      .catch(error => this.setState({ errorMessage: error.message }))
  };

  loginWithPhone = () => {

  }

  onVerificationCode = () => {
    const { confirmResult, password } = this.state;
    confirmResult.confirm(password)
      .then((user) => {

        console.log(user)
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message)

        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }


  onLoginOrRegister = () => {


    const phoneNumber = this.state.email;
    console.log(phoneNumber)
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then((confirmResult) => {
        // This means that the SMS has been sent to the user
        // You need to:
        //   1) Save the `confirmResult` object to use later
        this.setState({ confirmResult });
        //   2) Hide the phone number form
        //   3) Show the verification code form
      })
      .catch((error) => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
    // representation of the error
  });
  };


  render() {
    const { navigation } = this.props;
    const {
      email, phone, password, loginType, code
    } = this.state;
    const emailLogin = loginType === "Email";
    const firstInputIcon = emailLogin ?
      (<Ionicons name="ios-mail" color={'black'} size={24} />) :
      (<SimpleLineIcons name="screen-smartphone" color={'black'} size={24}  />);
    const secondInputIcon = (<MaterialIcons name={emailLogin ? "lock" : "input" } color={'black'} size={24} />);
    const placeholder = emailLogin ? "Password" : "Code";

    return (
      <View style={styles.container}>



        <Image
          style={styles.backgroundRootImage}
          blurRadius={Platform.OS === 'ios' ? 8 : 1}
          source={signInBackground}
        />

        <Animated.View style={[styles.backArrow, {top: this.arrowTopOffset, opacity: this.arrowOpacity}]}>
          <TouchableOpacity
            onPress={this.goBack}
          >
            <Ionicons name="ios-arrow-back" color={Colors.white} size={24} />
          </TouchableOpacity>
        </Animated.View>



        <View style={styles.flex1}>
          <Text style={styles.logoText}>
            StARM
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
                  title="Sign In with email" mb={20}
                  onPress={() => this.goToLogin("Email")}
                />
                <ButtonC
                  title="Sign In with phone" mb={20}
                  onPress={() => this.goToLogin("Phone")}
                />
                <ButtonC title="Sign in fb" mb={20} />
                <ButtonC
                  title="Sign up" mb={10}
                  onPress={() => navigation.navigate("SignUp")}
                />
              </View>

              <View style={styles.buttonBlockContainer}>
                <TextInputC
                  onChangeText={(text) => this.onChangeLoginText(text)}
                  value={emailLogin ? email : phone}
                  keyboardType={emailLogin ? "email-address" : "phone-pad"}
                  placeholder={loginType}
                  icon={firstInputIcon}
                  mb={20}
                />
                <TextInputC
                  onChangeText={(text) => this.onChangeCodeText(text)}
                  value={emailLogin ? password : code}
                  keyboardType={emailLogin ? "default" : "numeric"}
                  secureTextEntry={loginType === 'Email'}
                  icon={secondInputIcon}
                  mb={20}
                  placeholder={placeholder}
                />
                <ButtonC
                  title="Sign In"
                  onPress={this.loginEmailOrPhone}
                  mb={20}
                />
              </View>

            </ScrollView>

          </View>



          {/*<ButtonC title="Login" />*/}

          {/*<Button title="Login" onPress={this.handleLogin} />*/}
          {/*<Button title="Login Mobile" onPress={this.onLoginOrRegister} />*/}
          {/*<Button title="Verif Code" onPress={this.onVerificationCode} />*/}
          {/*<Button*/}
            {/*title="Don't have an account? Sign Up"*/}
            {/*onPress={() => this.props.navigation.navigate('SignUp')}*/}
          {/*/>*/}
        {/*</View>*/}

      </View>
    )
  }
}
