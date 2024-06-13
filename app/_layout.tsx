import { store } from "@/state/store";
import { Slot } from "expo-router";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
