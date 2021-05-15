import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import _ from 'lodash';
import { SideBar } from 'App/Containers';
import { IRootNavigator } from 'App/Interfaces';
import { useAuthState } from 'App/Context/context';
import { AuthStack } from './authStack';
import { AppStack } from './appStack';
import { View, ActivityIndicator } from 'react-native';
import { styles } from 'App/Containers/Auth/Login/styles';
import { getLoggedInUserInfo } from 'App/Services';
import { NavigationContainerName } from 'App/Utils';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const DrawerNavigator = createDrawerNavigator();
/**
 *
 * TODO: Splash screen to be added to handle start-up load & initial n/w calls @ background
 * FIXME: Need to add a better logic (for initial launch) once splash is added
 * @export
 * @param {IRootNavigator} props
 * @return {*} Root Navigation Container
 */
export function RootNavigator(props: IRootNavigator) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);

  const userDetails = useAuthState();
  const StackNavigator = createStackNavigator();

  /**
   *  App start-up function
   */
  const startUp = async () => {
    try {
      const userInfoResponse = await getLoggedInUserInfo();
      if (userInfoResponse) {
        setIsLoading(false);
        setUser(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startUp();
  }, []);

  /**
   *  Drawer wrapper for app
   */
  const AppDrawerNavigator = () => {
    return (
      <DrawerNavigator.Navigator
        drawerContent={(props: any) => <SideBar {...props} />}>
        <DrawerNavigator.Screen
          name={NavigationContainerName.AppStack}
          component={AppStack}
        />
      </DrawerNavigator.Navigator>
    );
  };

  if (isLoading)
    return (
      <View style={styles.mainContainers}>
        <ActivityIndicator size="large" />
      </View>
    );
  else
    return (
      <NavigationContainer ref={props.navigationRef}>
        {userDetails.user ? (
          <StackNavigator.Navigator
            initialRouteName={NavigationContainerName.AppStack}
            screenOptions={{
              header: () => null,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            mode="modal">
            <StackNavigator.Screen
              name={NavigationContainerName.AppStackWithDrawer}
              component={AppDrawerNavigator}
            />
          </StackNavigator.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    );
}
