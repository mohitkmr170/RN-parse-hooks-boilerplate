import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {ILandingProps} from 'App/Interfaces';

export const Landing = (props: ILandingProps) => {
  console.log('Landing : props ::', props);
  return (
    <View style={styles.parentContainer}>
      <Text>Landing Screen</Text>
    </View>
  );
};
