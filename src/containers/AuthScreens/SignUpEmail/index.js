import React from 'react'
import { Image, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';
import { membersRef } from "../../../database/category";


import { ButtonC, TextInputC, IconC, HeaderC } from './../../../components';
import styles from './styles';
import Colors from "../../../constants/colors";
import METRICKS from "../../../constants/metricks";


export default class SignUpEmail extends React.Component {
  state = {
    email: '',
    fio: '',
    lastName: '',
    password: '',
    confirmedPassword: '',
    image: {},
    errorMessage: null
  };

  signUpWithEmail = () => {
    const { email, password } = this.state;
    // TODO: Firebase stuff...
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        this.loadPhoto(user._user.uid);
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };


  loadPhoto = (userID) => {
    firebase
      .storage()
      .ref(`images/memberAvatars/${this.state.fio}_${new Date().getTime()}.jpg`)
      .putFile(decodeURI(this.state.image.path))
      .then(uploadedFile => {

        membersRef.doc(userID).set({
          fio: this.state.fio,
          email: this.state.email,
          password: this.state.password,
          photoURL: uploadedFile.downloadURL
        }).then(() => {
          this.props.navigation.navigate('TabNavigator');
        });
        console.log("Firebase profile photo uploaded successfully")
        console.log(uploadedFile)
      })
      .catch(error => {
        console.log("Firebase profile upload failed: " + error)
      })
  }

  pickPhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({image});
      console.log(image);
    });
  };

  goToNextStep = () => {
    this.scrollView &&
    this.scrollView.scrollToEnd({ animated: true })
  }

  render() {
    const { navigation } = this.props;
    const { fio, confirmedPassword, password, email, errorMessage, image } = this.state;
    const firstInputIcon = (<IconC type="IO" name="ios-mail" color={'black'} size={24} />);
    const secondInputIcon = (<IconC type="MI" name="lock" color={'black'} size={24} />);
    const firsNameIcon = (<IconC type="FE" name="user" color={Colors.black} size={24} />);
    const lastNameIcon = (<IconC type="FE" name="user" color={Colors.black} size={24} />);


    return (
      <View style={styles.container}>

        <HeaderC
          transparent
          leftIcon="back"
          title="Sign Up with Email"
          style={styles.customHeader}
          leftIconAction={() => navigation.goBack()}
        />
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled={true}
          ref={ref => this.scrollView = ref}

        >
          <ScrollView
            style={{
              width: METRICKS.SCREEN_WIDTH,
              flex: 1
            }}
          >
            <View
              style={{
                paddingVertical: 25,
                paddingBottom: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 60,
                  flex: 0,
                  backgroundColor:  '#eee'
                }}
                onPress={this.pickPhoto}
              >
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60
                  }}
                  source={{ uri: image.path}}
                />


              </TouchableOpacity>

            </View>

            <Text style={{textAlign: 'center', color: 'white'}}>Sign Up</Text>
            {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}

            <View style={styles.buttonBlockContainer}>
              <TextInputC
                placeholder="First and last name"
                onChangeText={text => this.setState({ fio: text })}
                value={fio}
                icon={firsNameIcon}
                mb={20}
              />
              <TextInputC
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={email}
                icon={firstInputIcon}
                mb={20}
              />
              <TextInputC
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={password}
                icon={secondInputIcon}
                mb={20}
              />
              <TextInputC
                secureTextEntry
                placeholder="Confirm password"
                autoCapitalize="none"
                onChangeText={text => this.setState({ confirmedPassword: text })}
                value={confirmedPassword}
                icon={secondInputIcon}
                mb={40}
              />
              <Text
                onPress={() => this.setState({isArmwrestler: true})}
                style={{color: Colors.white}}
              >
                i Am armwrestler
              </Text>

              {
                this.state.isArmwrestler ? (
                  <ButtonC
                    inverted
                    title="next"
                    onPress={this.goToNextStep}
                    mb={20}
                  />

                ) : (
                  <ButtonC
                    inverted
                    title="Sign Up"
                    onPress={this.signUpWithEmail}
                    mb={20}
                  />
                )
              }

            </View>




            <Button
              title="Already have an account? Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </ScrollView>
          <ScrollView
            style={{
              width: METRICKS.SCREEN_WIDTH,
              flex: 1
            }}
          >

            <View style={styles.buttonBlockContainer}>
              <TextInputC
                placeholder="First and last name"
                onChangeText={text => this.setState({ fio: text })}
                value={fio}
                icon={firsNameIcon}
                mb={20}
              />
              <TextInputC
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={email}
                icon={firstInputIcon}
                mb={20}
              />
              <TextInputC
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={password}
                icon={secondInputIcon}
                mb={20}
              />
              <TextInputC
                secureTextEntry
                placeholder="Confirm password"
                autoCapitalize="none"
                onChangeText={text => this.setState({ confirmedPassword: text })}
                value={confirmedPassword}
                icon={secondInputIcon}
                mb={40}
              />


                <ButtonC
                  inverted
                  title="Sign Up"
                  onPress={this.signUpWithEmail}
                  mb={20}
                />


            </View>




            <Button
              title="Already have an account? Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </ScrollView>

        </ScrollView>


        {/*<Image*/}
          {/*style={styles.backgroundRootImage}*/}
          {/*blurRadius={Platform.OS === 'ios' ? 8 : 1}*/}

          {/*source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/DSC8815.jpg'}}*/}
         {/*//  http://www.visniaphotos.com/wp-content/uploads/2018/11/DSC9862.jpg*/}
         {/*// source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/JMR7047.jpg'}}*/}

          {/*//source={{uri: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/DSC8815.jpg'}}*/}
        {/*/>*/}


      </View>
    )
  }
}

