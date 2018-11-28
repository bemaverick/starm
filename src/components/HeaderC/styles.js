import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    height: 65,
    paddingTop: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: '#021',
    borderBottomWidth: 2,
    borderColor: '#043'
  },
  leftBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 36,
    width: 36,
    resizeMode: 'contain'
  },
  centralBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: "#fff",
    letterSpacing: 1,
    fontSize: 16
  },

});
