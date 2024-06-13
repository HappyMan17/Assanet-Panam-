import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Two buttons.</Text>
      <Link href='/tasks' style={styles.nav_botton}> Tasks </Link>
      <Link href='/tasks' style={styles.nav_botton}> List </Link>
    </View>
  );
}

const styles = {
  nav_botton: {
    color: 'blue',
    fontSize: 20,
  },
}
