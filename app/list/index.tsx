import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Tasks() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Fetching tasks.</Text>
      <Link href='/' style={styles.nav_botton}> Home </Link>
    </View>
  );
}

const styles = {
  nav_botton: {
    color: 'blue',
    fontSize: 20,
  },
}
