import React from 'react';
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import { IDashboardProps } from 'App/Interfaces';
import { Header } from 'App/Components';
import { openDrawer } from 'App/Navigators/navigationServices';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainerName } from 'App/Utils';
import { appStyles } from 'App/Utils/globalStyles';

const ITEM_CATEGORY = [
  {
    image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3781454.jpg',
    name: 'Fruits and vegetables',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFscW6SJBCZdogLG9h1lS3_pxdJ-CSV97Jlg&usqp=CAU',
    name: 'Prepared',
  },
  {
    image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3781454.jpg',
    name: 'Cupboard and others',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIn4ouj-MgF4M-JbjYK_383iwrxsVgEQGBw&usqp=CAU',
    name: 'Snacks and bread',
  },
  {
    image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3781454.jpg',
    name: 'Drinks',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIn4ouj-MgF4M-JbjYK_383iwrxsVgEQGBw&usqp=CAU',
    name: 'Alcohol',
  },
  {
    image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3781454.jpg',
    name: 'Meat and fish',
  },
];

export const Dashboard = (props: IDashboardProps) => {
  /**
   * Function to render category item
   * @param {object} { item, index }
   * @return {React.FC}
   */
  const renderCategoryItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() =>
          props.navigation.navigate(NavigationContainerName.CategoryItemList)
        }>
        <Text style={styles.categoryItemText}>{item.name}</Text>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.categoryItemImage}
          resizeMethod="scale"
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  const handleCartClick = () => {
    props.navigation.navigate(NavigationContainerName.Cart);
  };

  return (
    <View style={appStyles.parentContainerNoMargin}>
      <SafeAreaView style={appStyles.safeAreaTopStyleWithColor} />
      <Header
        handleLeftButtonClick={() => openDrawer()}
        handleRightButtonClick={() => handleCartClick()}
      />
      <View style={styles.mainContainer}>
        <FlatList
          data={ITEM_CATEGORY}
          extraData={props}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCategoryItem}
        />
      </View>
    </View>
  );
};
