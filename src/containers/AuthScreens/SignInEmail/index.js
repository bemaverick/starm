import React from 'react'
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import { ButtonC, TextInputC, IconC, HeaderC } from './../../../components';
import {Colors} from "../../../constants";
import styles from './styles';

export default class SignInEmail extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  onChangeText = (text, field) => {
      this.setState({[field]: text})
  };

  signIn = () => {
    const { navigation } = this.props;
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('TabNavigator'))
      .catch(error => this.setState({ errorMessage: error.message }))
  };



  render() {
    const { navigation } = this.props;
    const { email, password, errorMessage } = this.state;

    const emailPlaceholder = "Email";
    const passwordPlaceholder = "password";

    const emailIcon = (<IconC type="IO"  name="ios-mail" color={Colors.black} size={24}/>);
    const passwordIcon = (<IconC type="MI"  name="lock" color={Colors.black}  size={24}/>);

    return (
      <View style={styles.container}>
        <HeaderC
          transparent
          leftIcon="back"
          title="Sign in with Email"
          style={styles.customHeader}
          leftIconAction={() => navigation.goBack()}
        />
        <View style={styles.contentContainer}>
          <TextInputC
            onChangeText={(text) => this.onChangeText(text, "email")}
            value={email}
            keyboardType={"email-address"}
            placeholder={emailPlaceholder}
            icon={emailIcon}
            mb={20}
          />
          <TextInputC
            onChangeText={(text) => this.onChangeText(text, "password")}
            secureTextEntry
            value={password}
            placeholder={passwordPlaceholder}
            icon={passwordIcon}
            mb={20}
          />
          {
            !!errorMessage && (
              <Text>
                {errorMessage}
              </Text>
            )
          }
          <ButtonC
            inverted
            title="Sign In"
            onPress={() => this.signIn("Email")}
            mb={20}
          />
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
