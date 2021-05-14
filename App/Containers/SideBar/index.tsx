import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useSafeArea } from 'react-native-safe-area-context';
import {} from 'react-native-gesture-handler';

interface IProps {
  drawerPosition: any;
  navigation: any;
}

export const SideBar = (props: IProps) => {
  const insets = useSafeArea();
  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: props.drawerPosition === 'left' ? insets.left : 0,
          paddingRight: props.drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={styles.parentContainer}>
      <Text>Side Bar Screen</Text>
    </ScrollView>
  );
};
