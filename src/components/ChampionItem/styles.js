import { StyleSheet } from "react-native";
import { METRICKS, Colors } from './../../constants';

export default StyleSheet.create({
  container: {
    width: METRICKS.SCREEN_WIDTH / 3,
    height: (METRICKS.SCREEN_WIDTH / 3) + 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: (METRICKS.SCREEN_WIDTH * 0.67) / 3,
    width: (METRICKS.SCREEN_WIDTH * 0.67) / 3,
    borderRadius: (METRICKS.SCREEN_WIDTH * 0.67) / 6
  },
  text: {
    paddingTop: 5,
    color: Colors.white,
    letterSpacing: 1
  }
});
