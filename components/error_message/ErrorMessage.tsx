import { Text, View } from "react-native"
import { styles } from "./styles";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage:React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> { message } </Text>
    </View>
  )
}
