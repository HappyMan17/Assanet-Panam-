import { store } from "@/state/store";
import { Stack } from "expo-router";
import { View } from "react-native";
import { Provider } from "react-redux";
import { styles } from "./styles";
import { constants } from "@/constants/Colors";

export default function Layout() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false, headerStyle: { backgroundColor: constants.navBackgroundColor } }}>
          <Stack.Screen name="index" options={{ headerShown: false }}/>
          <Stack.Screen name="tasks/index" options={{ title: 'Tasks', headerShown: true }}/>
          <Stack.Screen name="list/index" options={{ title: 'List', headerShown: true }}/>
        </Stack>
      </View>
    </Provider>
  );
}
