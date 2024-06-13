import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.backgroundColor,
    position: 'relative',
  },
  botton: {
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
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
