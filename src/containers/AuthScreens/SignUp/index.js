import React from 'react'
import { Image, Text, TextInput, View, Button, Platform } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';


export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    // TODO: Firebase stuff...
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('TabNavigator'))
      .catch(error => this.setState({ errorMessage: error.message }));
    console.log('handleSignUp')
  }
  render() {

    return (
      <View style={styles.container}>



        <Image
          style={styles.backgroundRootImage}
          blurRadius={Platform.OS === 'ios' ? 8 : 1}

          source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/11/DSC9862.jpg'}}

         // source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/JMR7047.jpg'}}

          //source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/DSC8815.jpg'}}
        />

        <Text>Sign Up</Text>
        {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

