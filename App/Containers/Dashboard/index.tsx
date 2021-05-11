import React from 'react';
import { View, Text, Alert, AsyncStorage } from 'react-native';
import { styles } from './styles';
import { IDashboardProps } from 'App/Interfaces';
import { Header } from 'App/Components';
import { logoutUserTest } from 'App/Context/actions';
import { useAuthDispatch } from 'App/Context/context';
import { NavigationContainerName } from 'App/Utils';

export const Dashboard = (props: IDashboardProps) => {
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    try {
      logoutUserTest(dispatch);
      props.navigation.navigate(NavigationContainerName.AuthLoading);
    } catch (error) {
      Alert.alert('Something went wrong');
    }
  };
  return (
    <View style={styles.parentContainer}>
      <Header handleRightButtonClick={() => handleLogout()} />
      <View style={styles.mainContainer}>
        <Text>Dashboard Screen</Text>
      </View>
    </View>
  );
};
