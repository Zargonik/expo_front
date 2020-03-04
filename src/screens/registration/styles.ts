import { StyleSheet } from 'react-native';
import { backgrounds } from '../../styles/backgrounds';

export const getStyles = () => StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: backgrounds.mainTheme
  },
  titleWrapper: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: backgrounds.light
  }
});