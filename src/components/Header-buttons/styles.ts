import { StyleSheet } from 'react-native';

export const getStyles = () => StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    position: "absolute",
    top: 50,
    zIndex: 1000
  },
})