import { StyleSheet, Platform } from "react-native";
import { METRICKS, Colors } from './../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: Platform.OS === 'ios' ? 1.5 : 1,
    borderRadius: 4,
    borderColor: Colors.white,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    letterSpacing: 1

  }

});


export default styles;
