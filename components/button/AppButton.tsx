import { constants } from "@/constants/Colors"
import { Text, TouchableHighlight, StyleSheet } from "react-native"

interface AppButtonProps {
  onPress: () => void,
  title: string,
  customButtonStyle?: Record<string, string | number>,
  customTextStyle?: Record<string, string | number>,
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  customButtonStyle,
  customTextStyle,
}) => {
  return (
    <TouchableHighlight onPress={onPress} style={customButtonStyle ? customButtonStyle : styles.button}>
      <Text style={customTextStyle ? customTextStyle : styles.text}> {title} </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#0A4FC1',
    borderRadius: 6,
    backgroundColor: '#0787B4',
  },
  text: {  
    fontSize: constants.normalFontSize,
    textAlign: 'center',
    color: '#FFFFFF',
  }
})
