import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainerName } from 'App/Utils';
import { AuthLoading } from './authLoading';
import { Login, SignUp } from 'App/Containers';

const StackNavigator = createStackNavigator();

export const AuthStack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={NavigationContainerName.AuthLoading}
      screenOptions={{
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      mode="modal">
      <StackNavigator.Screen
        name={NavigationContainerName.AuthLoading}
        component={AuthLoading}
      />
      <StackNavigator.Screen
        name={NavigationContainerName.Login}
        component={Login}
      />
      <StackNavigator.Screen
        name={NavigationContainerName.SignUp}
        component={SignUp}
      />
    </StackNavigator.Navigator>
  );
};
