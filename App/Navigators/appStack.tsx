import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainerName } from 'App/Utils';
import { Dashboard, Profile, CategoryItemList, Cart } from 'App/Containers';

const StackNavigator = createStackNavigator();

export const AppStack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={NavigationContainerName.Dashboard}
      screenOptions={{
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      mode="modal">
      <StackNavigator.Screen
        name={NavigationContainerName.Dashboard}
        component={Dashboard}
      />
      <StackNavigator.Screen
        name={NavigationContainerName.CategoryItemList}
        component={CategoryItemList}
      />
      <StackNavigator.Screen
        name={NavigationContainerName.Profile}
        component={Profile}
      />
      <StackNavigator.Screen
        name={NavigationContainerName.Cart}
        component={Cart}
      />
    </StackNavigator.Navigator>
  );
};
