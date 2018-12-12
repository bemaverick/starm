import { StyleSheet } from "react-native";
import { METRICKS } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233'
  },
  customHeader: {
    position: 'relative'
  },
  backgroundRootImage: {
    width: METRICKS.SCREEN_WIDTH + 100,
    height: METRICKS.SCREEN_HEIGHT + 100,
    resizeMode: 'cover',
    position: 'absolute',
    top: -100,
    left: -100,
  },
  buttonBlockContainer: {
    width: METRICKS.SCREEN_WIDTH,
    paddingHorizontal: 35,
    paddingVertical: 30
  },
})

export default styles;
