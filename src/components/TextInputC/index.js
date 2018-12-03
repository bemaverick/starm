import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native';
import { Colors } from './../../constants';

import styles from './styles';

export default class TextInputC extends React.Component {
  state = {
    text: '',
  };

  onChangeText = (text: string) => {
    this.props.onChangeText(text);
    this.setState({text})
  }


  render() {
    const { mb, icon, value } = this.props;
    return (
      <View style={[
        styles.container,
        mb && { marginBottom: mb }
      ]}>
        {
          <View style={styles.leftIcon}>
            {
              icon
            }
          </View>
        }
        <TextInput
          keyboardAppearance="dark"
          selectionColor={Colors.white}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
          {...this.props}
          style={styles.textInput}
          onChangeText={text => this.onChangeText(text)}
          value={value}
        />
      </View>
    )
  }
}
