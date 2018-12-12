import { StyleSheet, Platform } from "react-native";
import { FONTS, Colors } from './../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: Platform.OS === 'ios' ? 2 : 1,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderColor: Colors.white,
  },
  text: {
    fontFamily: FONTS.ROBOTO_SLAB_400,
    color: Colors.white,
    fontSize: 16,
    letterSpacing: 1
  },
  inverted: {
    backgroundColor: Colors.white,
  },
  invertedText: {
    color: Colors.black,
  },
  iconBlock: {
    position: 'absolute',
    height: 40,
    width: 40,
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }

});


export default styles;
