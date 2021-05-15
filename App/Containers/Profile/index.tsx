import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { appStyles } from 'App/Utils/globalStyles';
import { Header } from 'App/Components';
import { IProfileProps } from 'App/Interfaces';
import { openDrawer } from 'App/Navigators/navigationServices';

export const Profile = (props: IProfileProps) => {
  return (
    <View style={appStyles.parentContainerNoMargin}>
      <SafeAreaView style={appStyles.safeAreaTopStyleWithColor} />
      <Header title="Settings" handleLeftButtonClick={() => openDrawer()} />
      <View style={styles.mainContainer}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};
