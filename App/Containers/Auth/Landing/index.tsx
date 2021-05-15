import React from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { Button } from 'App/Components';
import { ILandingProps } from 'App/Interfaces';
import { LocaleString, NavigationContainerName } from 'App/Utils';
import { styles } from './styles';
import { Colors } from 'App/Theme';

export const Landing = (props: ILandingProps) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri:
              'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3781454.jpg',
          }}
          resizeMethod="scale"
          resizeMode="cover"
          style={{ width: '100%', height: '80%' }}
        />
        <Text style={styles.produceText}>{LocaleString.landing.produce}</Text>
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
