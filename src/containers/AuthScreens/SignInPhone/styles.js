import { StyleSheet } from "react-native";
import { METRICKS, FONTS } from './../../../constants';
import Colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#343b44',
    backgroundColor: '#222',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  customHeader: {
    position: 'relative'
  }
});


export default styles;
