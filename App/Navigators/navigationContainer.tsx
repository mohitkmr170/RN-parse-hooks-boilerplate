import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Landing} from 'App/Containers';
import {AuthLoading} from 'App/Navigators/authLoading';
import {NavigationContainerName} from 'App/Utils';
import {IRootNavigator} from 'App/Interfaces';

const StackNavigator = createStackNavigator();

export function RootNavigator(props: IRootNavigator) {
  console.log('RootNavigator', typeof props.navigationRef);
  return (
    <NavigationContainer ref={props.navigationRef}>
      <StackNavigator.Navigator
        initialRouteName={NavigationContainerName.AuthLoading}
        screenOptions={{
          header: () => null,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        mode="modal">
        <>
          <StackNavigator.Screen
            name={NavigationContainerName.Landing}
            component={Landing}
          />
          <StackNavigator.Screen
            name={NavigationContainerName.AuthLoading}
            component={AuthLoading}
          />
        </>
        <></>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
