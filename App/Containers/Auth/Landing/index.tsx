import React from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { Button } from 'App/Components';
import { ILandingProps } from 'App/Interfaces';
import { LocaleString, NavigationContainerName } from 'App/Utils';
import { styles } from './styles';

export const Landing = (props: ILandingProps) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.appText}>{LocaleString.landing.rn}</Text>
      </View>
      <View style={styles.footerStyle}>
        <Button
          buttonStyle={styles.registerButtonExternalStyle}
          titleStyle={styles.registerButtonTitleStyle}
          title={LocaleString.landing.register}
          disabled={false}
          loading={false}
          onPress={() =>
            props.navigation.navigate(NavigationContainerName.SignUp)
          }
        />
        <Button
          buttonStyle={styles.signInButtonExternalStyle}
          titleStyle={styles.signInButtonTitleStyle}
          title={LocaleString.landing.signIn}
          disabled={false}
          loading={false}
          onPress={() =>
            props.navigation.navigate(NavigationContainerName.Login)
          }
        />
      </View>
    </View>
  );
};
