import { StyleSheet } from "react-native";
import { METRICKS, FONTS } from "../../../constants";

const LetterSize = 600;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  maskedViewStyle: {

    width: METRICKS.SCREEN_WIDTH,
    height: METRICKS.SCREEN_HEIGHT,
  },
  maskElement: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: 'transparent',
    width: METRICKS.SCREEN_WIDTH,
    height: METRICKS.SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: LetterSize * 0.1,
    fontSize: LetterSize,
    position: 'absolute',
    fontFamily: FONTS.NOVA_SOLID,
  },
  image: {
    width: METRICKS.SCREEN_WIDTH,
    height: METRICKS.SCREEN_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  }

});

export default styles;
