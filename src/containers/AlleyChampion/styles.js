import { StyleSheet } from "react-native";
import { Colors } from './../../constants';
import FONTS from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fff9",
  },
  champNameBlock: {
    position: 'absolute',
    left: 20,
    bottom: 15,
  },
  championName: {
    fontFamily: FONTS.BLACK_400,
    fontSize: 18,
    color: Colors.white
  },
  imageWrap: {
    borderBottomWidth: 3,
    borderColor: 'transparent',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 1
  },


});
export default styles;
