import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    height: 60,
    maxWidth: 250,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#C95858',
    paddingHorizontal: 5,
  },
  text: {
    fontSize: constants.normalFontSize,
    maxWidth: '98%',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
});