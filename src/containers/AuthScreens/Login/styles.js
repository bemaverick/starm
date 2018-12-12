import { StyleSheet } from "react-native";
import { METRICKS, FONTS } from './../../../constants';
import Colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343b44'
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontFamily: FONTS.BLACK_400,
    color: Colors.white,
    fontSize: 48,
  },
  buttonBlockContainer: {
//    backgroundColor: 'rgba(0, 0, 0, .6)',
    justifyContent: 'flex-end',
    width: METRICKS.SCREEN_WIDTH,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  backgroundRootImage: {
    width: METRICKS.SCREEN_WIDTH + 100,
    height: METRICKS.SCREEN_HEIGHT + 100,
    resizeMode: 'cover',
    position: 'absolute',
    top: -100,
    left: -100,
  },
  backArrow: {
    position: 'absolute',
    opacity: 0,
    top: 400,
    left: 35,
    width: 32,
    height: 32,
    justifyContent: 'center',
    zIndex: 100,
  }
});


export default styles;
