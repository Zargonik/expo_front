import { StyleSheet } from 'react-native';

export const getStyles = (buttonColor, buttonBackground) => StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonBackground ? buttonBackground : "#283075",
  },
  title: {
    fontSize: 15,
    color: buttonColor ? buttonColor : "white",
  }
})