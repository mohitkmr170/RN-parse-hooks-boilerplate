import { StyleSheet } from 'react-native';
import { MetricsSizes, Colors } from 'App/Theme';

export const styles = StyleSheet.create({
  parentContainer: { flex: 1 },
  mainContainer: { flex: 1 },
  produceText: {
    fontSize: MetricsSizes.larger,
    lineHeight: MetricsSizes.moderateLarge,
    marginTop: 24,
    textAlign: 'center',
  },
  registerButtonExternalStyle: {
    backgroundColor: Colors.limeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MetricsSizes.regular,
    marginHorizontal: MetricsSizes.larger,
    borderRadius: MetricsSizes.smaller,
  },
  registerButtonTitleStyle: {
    fontSize: MetricsSizes.regular,
    lineHeight: MetricsSizes.large,
    color: Colors.white,
    fontWeight: '500',
  },
  signInButtonExternalStyle: {
    marginTop: MetricsSizes.regular,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MetricsSizes.regular,
    marginHorizontal: MetricsSizes.larger,
    borderRadius: MetricsSizes.smaller,
  },
  signInButtonTitleStyle: {
    fontSize: MetricsSizes.regular,
    lineHeight: MetricsSizes.large,
    color: Colors.white,
    fontWeight: '500',
  },
  footerStyle: {
    marginBottom: 48,
  },
});
