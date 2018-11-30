import { StyleSheet } from "react-native";
import { Meticks, Colors } from './../../constants';

export default StyleSheet.create({
  container: {
    width: Meticks.SCREEN_WIDTH / 3,
    height: (Meticks.SCREEN_WIDTH / 3) + 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: (Meticks.SCREEN_WIDTH * 0.67) / 3,
    width: (Meticks.SCREEN_WIDTH * 0.67) / 3,
    borderRadius: (Meticks.SCREEN_WIDTH * 0.67) / 6
  },
  text: {
    paddingTop: 5,
    color: Colors.white,
    letterSpacing: 1
  }
});
