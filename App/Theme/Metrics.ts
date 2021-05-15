import { moderateScale } from 'react-native-size-matters/extend';

/**
 * TODO: Add better nomenclature (i.e, ms24)
 */

export const MetricsSizes = {
  tiny: moderateScale(4),
  smaller: moderateScale(8),
  modarateSmall: moderateScale(10),
  small: moderateScale(12),
  belowRegular: moderateScale(14),
  regular: moderateScale(16),
  aboveRegular: moderateScale(18),
  large: moderateScale(20),
  larger: moderateScale(24),
  moderateLarge: moderateScale(26),
  largest: moderateScale(28),
  extraLarge: moderateScale(30),
  huge: moderateScale(32),
  huger: moderateScale(36),
  hugest: moderateScale(40),
  humongous: moderateScale(44),
  extraHumongous: moderateScale(48),
  extraLargeHumongous: moderateScale(56),
};
