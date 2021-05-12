import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Login, SignUp, Dashboard } from 'App/Containers';
import { AuthLoading } from 'App/Navigators';
import { NavigationContainerName } from 'App/Utils';
import { IRootNavigator } from 'App/Interfaces';
import _ from 'lodash';
import { useAuthState } from 'App/Context/context';
import { View, ActivityIndicator } from 'react-native';
import { styles } from 'App/Containers/Auth/Login/styles';

const StackNavigator = createStackNavigator();

export function RootNavigator(props: IRootNavigator) {
  const [isLoading, setIsLoading] = useState(true);
  const userDetails = useAuthState();
  useEffect(() => {
    const isUserAuthenticated = userDetails.user || false;
    if (isUserAuthenticated) setIsLoading(false);
    // else setIsLoading(false);
  }, [userDetails]);
  if (isLoading)
    return (
      <View style={styles.mainContainers}>
        <ActivityIndicator size="large" />
      </View>
    );
  else
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
