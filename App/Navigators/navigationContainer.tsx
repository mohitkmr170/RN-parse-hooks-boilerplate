import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Login, SignUp, Dashboard } from 'App/Containers';
import { AuthLoading } from 'App/Navigators';
import { NavigationContainerName } from 'App/Utils';
import { IRootNavigator } from 'App/Interfaces';
import { useAuthState } from 'App/Context/context';
import _ from 'lodash';

const StackNavigator = createStackNavigator();

export function RootNavigator(props: IRootNavigator) {
  const userDetails = useAuthState();
  const isUserAuthenticated = userDetails.user || false;
  return (
    <NavigationContainer ref={props.navigationRef}>
      <StackNavigator.Navigator
        initialRouteName={
          isUserAuthenticated
            ? NavigationContainerName.Dashboard
            : NavigationContainerName.AuthLoading
        }
        screenOptions={{
          header: () => null,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        mode="modal">
        <>
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
        </>
        <>
          <StackNavigator.Screen
            name={NavigationContainerName.Dashboard}
            component={Dashboard}
          />
        </>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
