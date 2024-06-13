import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 2,
    backgroundColor: constants.backgroundColor,
  },
  button: {
    width: 200,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: constants.buttonColor,
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
  },
  title: {
    paddingVertical: 8,
    color: '#ffffff',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
