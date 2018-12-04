import { StyleSheet } from "react-native";
import { METRICKS } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
})

export default styles;
