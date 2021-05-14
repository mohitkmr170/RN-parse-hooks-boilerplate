import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainerName } from 'App/Utils';
import { Dashboard, Profile } from 'App/Containers';

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
        name={NavigationContainerName.Profile}
        component={Profile}
      />
    </StackNavigator.Navigator>
  );
};
