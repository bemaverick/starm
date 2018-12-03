import { StyleSheet } from "react-native";
import { METRICKS } from './../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343b44'
  },
  flex1: {
    flex: 1,
  },
  buttonBlockContainer: {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    width: METRICKS.SCREEN_WIDTH,
    paddingHorizontal: 35,
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
