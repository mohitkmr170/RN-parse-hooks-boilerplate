import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {IDashboardProps} from 'App/Interfaces';

export const Dashboard = (props: IDashboardProps) => {
  return (
    <View style={styles.parentContainer}>
      <Text>Dashboard Screen</Text>
    </View>
  );
};
