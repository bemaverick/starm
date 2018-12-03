import {Platform, StyleSheet} from "react-native";
import { METRICKS, Colors } from './../../constants';

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Platform.OS === 'ios' ? 1.5 : 1,
    borderRadius: 4,
    borderColor: Colors.white,
  },
  textInput: {
    flex: 1,
    color: Colors.white,
    height: 40,
    paddingHorizontal: 10
  },
  leftIcon: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 40,
    width: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }


});


export default styles;
