import { StyleSheet } from 'react-native';
import { MetricsSizes } from 'App/Theme';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  drawerContent: {
    justifyContent: 'center',
    padding: 16,
  },
  produceText: {
    fontSize: MetricsSizes.larger,
    lineHeight: MetricsSizes.moderateLarge,
  },
  drawerSection: {},
});
