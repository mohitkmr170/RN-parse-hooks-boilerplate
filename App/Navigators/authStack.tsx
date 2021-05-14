import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainerName } from 'App/Utils';
import { Login, SignUp } from 'App/Containers';
import { Landing } from 'App/Containers/Auth/Landing';

const StackNavigator = createStackNavigator();

export const AuthStack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={NavigationContainerName.Landing}
      screenOptions={{
        header: () => null,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      mode="modal">
      <StackNavigator.Screen
        name={NavigationContainerName.Landing}
        component={Landing}
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
