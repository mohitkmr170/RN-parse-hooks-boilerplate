import React from 'react';
import { View, Text, Alert, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { LocaleString, NavigationContainerName } from 'App/Utils';
import Icon from 'react-native-vector-icons/AntDesign';
import { logoutUserTest } from 'App/Context/actions';
import { navigateAndReset } from 'App/Navigators/navigationServices';
import { useAuthDispatch } from 'App/Context/context';
import { appStyles } from 'App/Utils/globalStyles';

/**
 *  Sidebar list items
 *  @type {Array}
 */
const SIDEBAR_ITEMS = [
  {
    label: 'Producers',
    icon: 'contacts',
    route: NavigationContainerName.Dashboard,
  },
  {
    label: 'Orders',
    icon: 'filetext1',
    route: '',
  },
  {
    label: 'My Personal Details',
    icon: 'user',
    route: NavigationContainerName.Profile,
  },
  {
    label: 'Change to Seller',
    icon: 'reload1',
    route: '',
  },
];

interface IProps {
  navigation: any;
}

export const SideBar = (props: IProps) => {
  const dispatch = useAuthDispatch();

  /**
   *  Function to handle LogOut Action
   */
  const handleLogOut = () => {
    try {
      logoutUserTest(dispatch);
      navigateAndReset(NavigationContainerName.Landing);
    } catch (error) {
      Alert.alert('Something went wrong');
    }
  };

  return (
    <View style={appStyles.parentContainerNoMargin}>
      <SafeAreaView style={appStyles.safeAreaTopStyleNoColor} />
      <View style={styles.drawerContent}>
        <Text style={styles.produceText}>{LocaleString.header.produce}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        {SIDEBAR_ITEMS.map((item, index) => (
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name={item.icon} color={color} size={size} />
              )}
              label={item.label}
              onPress={() => {
                item.route ? props.navigation.navigate(item.route) : null;
              }}
            />
          </View>
        ))}
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Log Out"
          onPress={() => handleLogOut()}
        />
      </DrawerContentScrollView>
    </View>
  );
};
