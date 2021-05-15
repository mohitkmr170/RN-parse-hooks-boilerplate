import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { appStyles } from 'App/Utils/globalStyles';
import { Header } from 'App/Components';
import { ICartProps } from 'App/Interfaces';
import { openDrawer } from 'App/Navigators/navigationServices';

export const Cart = (props: ICartProps) => {
  return (
    <View style={appStyles.parentContainerNoMargin}>
      <SafeAreaView style={appStyles.safeAreaTopStyleWithColor} />
      <Header
        title="My order"
        handleLeftButtonClick={() => props.navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        <Text>Cart Screen</Text>
      </View>
    </View>
  );
};
