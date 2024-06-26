/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = () => {
  const colorScheme = useColorScheme();
  const COLORS = {
    light: {
      text: '#11181C',
      titleFontSize: 40,
      background: '#fff',
      tint: tintColorLight,
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: '#ECEDEE',
      titleFontSize: 40,
      background: '#151718',
      tint: tintColorDark,
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDark,
    },
  }

  return COLORS[colorScheme ?? 'light'];
};

export const constants = {
  titleFontSize: 40,
  titleFontWeight: 'bold',
  titleMarginTop: 16,
  normalFontSize: 20,
  navBackgroundColor: '#81E7B7',
  backgroundColor: '#E5FAF0',
  buttonColor: '#3D656A',
}
