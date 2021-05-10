import {StyleSheet} from 'react-native';
import {Colors, MetricsSizes} from 'App/Theme';

export const styles = StyleSheet.create({
  parentContainer: {flex: 1},
  mainContainer: {flex: 1, marginHorizontal: MetricsSizes.larger},
  buttonExternalStyle: {
    marginTop: MetricsSizes.larger,
    backgroundColor: Colors.limeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MetricsSizes.small,
    borderRadius: MetricsSizes.smaller,
  },
});
