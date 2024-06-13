import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { constants } from "@/constants/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: constants.backgroundColor,
      }}
    >
      <Text style={styles.title}> Task Manager </Text>
      <Link href='/tasks' style={styles.botton}> Tasks </Link>
      <Link href='/list' style={styles.botton}> List </Link>
    </View>
  );
}
