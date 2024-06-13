import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.backgroundColor,
    opacity: 0.9,
  },
  card: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',

  },
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#20232a',
    backgroundColor: '#F8F8F8',
    marginBottom: 14,
  },
  title: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  close_button: {
    width: 100,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#3D656A',
    borderRadius: 6,
    backgroundColor: '#B74A4A',
  },
});