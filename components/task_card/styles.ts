import { constants } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    maxWidth: '100%',
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A4A4A4',
    borderRadius: 6,
    backgroundColor: '#DCDCDC',
    overflow: 'hidden',
    paddingHorizontal: 5,
  },
  text: {
    fontSize: constants.normalFontSize,
    maxWidth: '95%',
    textAlign: 'left',
  },
  sub_text: {
    fontSize: 15,
    textAlign: 'left',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
  }
})
