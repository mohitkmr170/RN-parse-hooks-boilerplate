import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface IProps {}

export const Profile = (props: IProps) => {
  return (
    <View style={styles.parentContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
};
