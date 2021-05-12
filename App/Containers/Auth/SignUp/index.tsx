import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header, FormInput, Button } from 'App/Components';
import { useForm, Controller } from 'react-hook-form';
import {
  Validators,
  LocaleString,
  AppConstants,
  NavigationContainerName,
} from 'App/Utils';
import { ISignUpProps } from 'App/Interfaces';
import { signUpUser } from 'App/Context/actions';
import { useAuthDispatch } from 'App/Context/context';

/*
NOTES : Few more validaitons to be added later
*/

export const SignUp = (props: ISignUpProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAuthDispatch();

  const handleSignUp = async (value: any) => {
    console.log('handleSignUp : value ::', value);
    try {
      const signUpResponse = await signUpUser(dispatch, {
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.mobile,
      });
      console.log('signUpResponse ::', signUpResponse);
      props.navigation.navigate(NavigationContainerName.Dashboard);
    } catch (error) {
      console.log('SignUp');
    }
  };

  return (
    <View style={styles.parentContainer}>
      <Header
        title={LocaleString.signUp.registerNow}
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              error={errors.name}
              errorText={errors?.name?.message}
              onChangeText={(text: any) => onChange(text)}
              value={value}
              placeholder={LocaleString.placeHolders.name}
            />
          )}
          name={AppConstants.forms.name}
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: LocaleString.validators.emailRequired,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              error={errors.mobile}
              errorText={errors?.mobile?.message}
              onChangeText={(text: any) => onChange(text)}
              value={value}
              keyboardType="phone-pad"
              placeholder={LocaleString.placeHolders.mobile}
            />
          )}
          name={AppConstants.forms.mobile}
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: LocaleString.validators.emailRequired,
            },
            pattern: Validators.emailRegex,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
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
          render={({ field: { onChange, onBlur, value } }) => (
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
          title={LocaleString.signUp.register}
          buttonStyle={styles.buttonExternalStyle}
          onPress={handleSubmit(handleSignUp)}
        />
      </View>
    </View>
  );
};
