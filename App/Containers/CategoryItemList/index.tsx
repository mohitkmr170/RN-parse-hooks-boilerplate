import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { appStyles } from 'App/Utils/globalStyles';
import { Header } from 'App/Components';
import { ICategoryItemListProps } from 'App/Interfaces';
import { NavigationContainerName } from 'App/Utils';

export const CategoryItemList = (props: ICategoryItemListProps) => {
  const handleCartClick = () => {
    props.navigation.navigate(NavigationContainerName.Cart);
  };
  return (
    <View style={appStyles.parentContainerNoMargin}>
      <SafeAreaView style={appStyles.safeAreaTopStyleWithColor} />
      <Header
        handleLeftButtonClick={() => props.navigation.goBack()}
        handleRightButtonClick={() => handleCartClick()}
      />
      <View style={styles.mainContainer}>
        <Text>Category List Item</Text>
      </View>
    </View>
  );
};
