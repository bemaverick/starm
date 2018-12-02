import { StyleSheet, Platform } from "react-native";
import { Colors, METRICKS } from './../../constants';

export default StyleSheet.create({
  container: {
    height: 65,
    paddingTop: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: Colors.darkGreen,
    borderBottomWidth: 2,
    borderColor: '#033'
  },
  transparent: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: METRICKS.SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 100,
    borderBottomWidth: 0
  },
  leftBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 36,
    width: 36,
    resizeMode: 'contain'
  },
  centralBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: Colors.white,
    letterSpacing: 1,
    fontSize: 16
  },

});
