import { StyleSheet } from 'react-native';
import { backgrounds } from '../../../styles/backgrounds';

export const getStyles = () => StyleSheet.create({
  container: {
    backgroundColor: backgrounds.mainTheme,
    height: "100%",
  },
  contentWrapper: {
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 80,

  },
  touchElement: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: backgrounds.tomato,
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    color: backgrounds.light
  }
});