import { StyleSheet } from "react-native";
import { METRICKS, Colors, FONTS } from './../../constants';

export default StyleSheet.create({
  container: {
    width: METRICKS.SCREEN_WIDTH,
    height: METRICKS.SCREEN_WIDTH / 2.25,
    borderBottomWidth: 2,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

  },
  firstItem: {
    height: METRICKS.SCREEN_WIDTH / 2.25 + 65,
  },
  image: {
    width: METRICKS.SCREEN_WIDTH,
    height: METRICKS.SCREEN_WIDTH / 2.25,
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  overlayContainerFirst: {
    paddingTop: 12 + 65
  },
  title: {
    color: Colors.white,
    letterSpacing: 1,
    fontFamily: FONTS.BLACK_400,
    fontSize: 22
  },
  date: {
    fontFamily: FONTS.ROBOTO_SLAB_400,
    fontSize: 14,
    letterSpacing: 0.6,
    color: Colors.white,
  },
  location: {
    fontFamily: FONTS.BLACK_400,
    marginLeft: 6,
    fontSize: 14,
    letterSpacing: 0.6,
    color: Colors.white,
  },
  cash: {
    fontFamily: FONTS.ROBOTO_SLAB_700,
    fontSize: 14,
    marginLeft: 5,
    letterSpacing: 0.6,
    color: Colors.white,
  },
  flex3: {
    flex: 3
  },
  additionalInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  row: {
    paddingTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pt2: {
    paddingTop: 2
  }
});
