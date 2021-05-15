import { StyleSheet } from 'react-native';
import { Colors } from 'App/Theme';

export const appStyles = StyleSheet.create({
  safeAreaTopStyleNoColor: {
    flex: 0,
  },
  safeAreaTopStyleWithColor: {
    flex: 0,
    backgroundColor: Colors.limeGreen,
  },
  parentContainerNoMargin: {
    flex: 1,
  },
});
