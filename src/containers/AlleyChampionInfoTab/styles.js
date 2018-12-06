import { StyleSheet } from "react-native";
import { Colors } from './../../constants';
import FONTS from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingHorizontal: 20,
    paddingVertical: 20

  },
  text: {
    fontFamily: FONTS.ROBOTO_SLAB_400,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'justify'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 50,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.4
  },
  nickNameBlock: {
    position: 'absolute',
    height: 44,
    backgroundColor: '#084',
    shadowColor: '#084',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    borderRadius: 4,
    top: 10,
    left: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nickNameText: {
    fontFamily: FONTS.ROBOTO_SLAB_400,
    fontSize: 16,
    color: Colors.white
  }

});
export default styles;
