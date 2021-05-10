import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {ILandingProps} from 'App/Interfaces';
import {LocaleString} from 'App/Utils';
import {MetricsSizes} from 'App/Theme';

export const Landing = (props: ILandingProps) => {
  console.log('Landing : props ::', props);
  return (
    <View style={styles.parentContainer}>
      <Text>{LocaleString.landing.landingScreen}</Text>
      <View
        style={{
          height: 3 * MetricsSizes.hugest,
          width: 3 * MetricsSizes.hugest,
          backgroundColor: 'red',
          marginTop: 40,
        }}
      />
    </View>
  );
};
