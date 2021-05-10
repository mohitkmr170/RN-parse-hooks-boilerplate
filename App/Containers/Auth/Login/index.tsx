import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Header, FormInput, Button} from 'App/Components';
import {useForm, Controller} from 'react-hook-form';
import {Validators, LocaleString, AppConstants} from 'App/Utils';
import {ILoginProps} from 'App/Interfaces';

export const Login = (props: ILoginProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (value: any) => {
    console.log('onSubmit : value ::', value);
  };

  return (
    <View style={styles.parentContainer}>
      <Header
        title={LocaleString.authLoading.signIn}
        handleLeftButtonClick={() => props.navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: LocaleString.validators.emailRequired,
            },
            pattern: Validators.emailRegex,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <FormInput
              error={errors.email}
              errorText={errors?.email?.message}
              onChangeText={(text: any) => onChange(text)}
              value={value}
              placeholder={LocaleString.placeHolders.email}
            />
          )}
          name={AppConstants.forms.email}
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: LocaleString.validators.passwordRequired,
            },
            minLength: Validators.passwordMinimumLength,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <FormInput
              error={errors.password}
              errorText={errors?.password?.message}
              onChangeText={(text: any) => onChange(text)}
              value={value}
              placeholder={LocaleString.placeHolders.password}
            />
          )}
          name={AppConstants.forms.password}
          defaultValue=""
        />
        <Button
          title={LocaleString.authLoading.signIn}
          buttonStyle={styles.buttonExternalStyle}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};
