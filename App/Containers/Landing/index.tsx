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
      <Text>{LocaleString.LandingScreen}</Text>
      <View
        style={{
          height: MetricsSizes.extraLargeHumongous,
          width: MetricsSizes.extraLargeHumongous,
          backgroundColor: 'red',
          marginTop: 40,
        }}
      />
    </View>
  );
};
