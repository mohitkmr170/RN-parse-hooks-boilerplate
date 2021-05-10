import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'App/Components';
import {IAuthLoadingProps} from 'App/Interfaces';
import {LocaleString, NavigationContainerName} from 'App/Utils';
import {MetricsSizes, Colors} from 'App/Theme';

export const AuthLoading = (props: IAuthLoadingProps) => {
  console.log('AuthLoading : props ::', props);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.produceText}>
          {LocaleString.authLoading.produce}
        </Text>
      </View>
      <Button
        buttonStyle={styles.registerButtonExternalStyle}
        titleStyle={styles.registerButtonTitleStyle}
        title={LocaleString.authLoading.register}
        disabled={false}
        loading={false}
        onPress={() =>
          props.navigation.navigate(NavigationContainerName.SignUp)
        }
      />
      <Button
        buttonStyle={styles.signInButtonExternalStyle}
        titleStyle={styles.signInButtonTitleStyle}
        title={LocaleString.authLoading.signIn}
        disabled={false}
        loading={false}
        onPress={() => props.navigation.navigate(NavigationContainerName.Login)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {flex: 1},
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  produceText: {
    fontSize: MetricsSizes.larger,
    lineHeight: MetricsSizes.moderateLarge,
  },
  registerButtonExternalStyle: {
    backgroundColor: Colors.limeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MetricsSizes.regular,
    marginHorizontal: MetricsSizes.larger,
    borderRadius: MetricsSizes.smaller,
  },
  registerButtonTitleStyle: {
    fontSize: MetricsSizes.regular,
    lineHeight: MetricsSizes.large,
    color: Colors.white,
    fontWeight: '500',
  },
  signInButtonExternalStyle: {
    marginTop: MetricsSizes.regular,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: MetricsSizes.regular,
    marginHorizontal: MetricsSizes.larger,
    borderRadius: MetricsSizes.smaller,
  },
  signInButtonTitleStyle: {
    fontSize: MetricsSizes.regular,
    lineHeight: MetricsSizes.large,
    color: Colors.white,
    fontWeight: '500',
  },
});
