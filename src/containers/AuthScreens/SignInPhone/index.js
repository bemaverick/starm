import React from 'react'
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import { ButtonC, TextInputC, IconC, HeaderC } from './../../../components';
import {Colors} from "../../../constants";
import styles from './styles';

export default class SignInPhone extends React.Component {
  state = {
    phone: '',
    code: '',
    errorMessage: '',
    codeSended: false,
    confirmResult: {}
  };

  onChangeText = (text, field) => {
      this.setState({[field]: text})
  };

  sendVerificationCode = () => {
    const { confirmResult, code } = this.state;
    confirmResult
      .confirm(code)
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


    const phoneNumber = this.state.phone;
    console.log(phoneNumber)
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then((confirmResult) => {
        this.setState({
          confirmResult,
          codeSended: true
        });
        // This means that the SMS has been sent to the user
        // You need to:
        //   1) Save the `confirmResult` object to use later
        //   2) Hide the phone number form
        //   3) Show the verification code form
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message)
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };




  render() {
    const { navigation } = this.props;
    const { phone, code, errorMessage } = this.state;

    const emailPlaceholder = "Phone";
    const passwordPlaceholder = "code";
    const sendButtonText = 'Send code';
    const signInButtonText = 'Sign In';


    const mobileIcon = (<IconC type="SLI"  name="screen-smartphone" color={Colors.black} size={24}/>);
    const codeIcon = (<IconC type="MI"  name="input" color={Colors.black}  size={24}/>);

    return (
      <View style={styles.container}>
        <HeaderC
          transparent
          leftIcon="back"
          style={styles.customHeader}
          leftIconAction={() => navigation.goBack()}
        />
        <View style={styles.contentContainer}>
          {
            this.state.codeSended ? (
              <TextInputC
                onChangeText={(text) => this.onChangeText(text, "code")}
                value={code}
                placeholder={passwordPlaceholder}
                icon={codeIcon}
                mb={20}
              />
            ) : (
              <TextInputC
                onChangeText={(text) => this.onChangeText(text, "phone")}
                value={phone}
                keyboardType={"email-address"}
                placeholder={emailPlaceholder}
                icon={mobileIcon}
                mb={20}
              />
            )
          }
          {
            !!errorMessage && (
              <Text>
                {errorMessage}
              </Text>
            )
          }
          {
            this.state.codeSended ? (
              <ButtonC
                title={signInButtonText}
                onPress={this.sendVerificationCode}
                mb={20}
              />
            ) : (
              <ButtonC
                title={sendButtonText}
                onPress={this.onLoginOrRegister}
                mb={20}
              />
            )
          }

        </View>

        {/*<Image*/}
          {/*style={styles.backgroundRootImage}*/}
          {/*blurRadius={Platform.OS === 'ios' ? 8 : 1}*/}
          {/*source={signInBackground}*/}
        {/*/>*/}

      </View>
    )
  }
}
