import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A4A4A4',
    borderRadius: 6,
    backgroundColor: '#DCDCDC',
  },
  text: {
    fontSize: constants.normalFontSize,
  },
  sub_text: {
    fontSize: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
  }
})
