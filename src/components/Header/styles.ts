import { StyleSheet } from 'react-native';
import { backgrounds } from '../../styles';

export const getStyles = ({
  titleColor,
  background
}) => StyleSheet.create({
  container: {
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: background ? background : backgrounds.tomato,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 25,
    color: titleColor ? titleColor : backgrounds.light,
    paddingBottom: 5
  },
  buttonWrapper: {
    height: 40,
    width: 40,
  }
})