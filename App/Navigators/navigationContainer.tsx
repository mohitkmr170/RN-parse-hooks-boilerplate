import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import _ from 'lodash';
import { SideBar } from 'App/Containers';
import { IRootNavigator } from 'App/Interfaces';
import { useAuthState } from 'App/Context/context';
import { AuthStack } from './authStack';
import { AppStack } from './appStack';

const DrawerNavigator = createDrawerNavigator();

/**
 *
 * TODO: User verification based Auth-App Stack
 * @export
 * @param {IRootNavigator} props
 * @return {*} Root Navigation Container
 */
export function RootNavigator(props: IRootNavigator) {
  const [isLoading, setIsLoading] = useState(true);
  const userDetails = useAuthState();

  // useEffect(() => {
  //   const isUserAuthenticated = userDetails.user || false;
  //   if (isUserAuthenticated) setIsLoading(false);
  //   // else setIsLoading(false);
  // }, [userDetails]);
  // if (isLoading)
  //   return (
  //     <View style={styles.mainContainers}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // else
  return (
    <NavigationContainer ref={props.navigationRef}>
      {true ? (
        <DrawerNavigator.Navigator
          drawerContent={(props: any) => <SideBar {...props} />}>
          <DrawerNavigator.Screen name="AppStateScreen" component={AppStack} />
        </DrawerNavigator.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
