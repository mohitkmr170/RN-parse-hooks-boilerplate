import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ILandingProps } from 'App/Interfaces';
import { LocaleString } from 'App/Utils';
import { MetricsSizes } from 'App/Theme';
import { Store } from 'App/Context/Counter/context';
import {
  incrementCounter,
  decrementCounter,
} from 'App/Context/Counter/actions';
import { loginUser } from 'App/Services';

export const Landing = (props: ILandingProps) => {
  console.log('Landing : props ::', props);

  const { state, dispatch } = useContext(Store);

  console.log('object ::', state);

  const handleIncrement = () => {
    incrementCounter(dispatch, {});
  };

  const handleDecrement = () => {
    decrementCounter(dispatch, {});
  };

  const handleLogin = async () => {
    const loginUserResponse = await loginUser(
      'francisco@puertoricoproduce.com',
      '2233'
    );
    console.log('handleLogin : loginUserResponse ::', loginUserResponse);
  };

  return (
    <View style={styles.parentContainer}>
      <Text>{LocaleString.LandingScreen}</Text>
      <TouchableOpacity
        onPress={() => handleLogin()}
        style={{
          height: 3 * MetricsSizes.hugest,
          width: 3 * MetricsSizes.hugest,
          backgroundColor: 'red',
          marginTop: 40,
        }}
      />
      <View style={{ marginTop: 40, flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => handleDecrement()}
          style={{ padding: 20, borderColor: 'red', borderWidth: 1 }}>
          <Text style={{ fontSize: 24, lineHeight: 28 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, lineHeight: 28, margin: 20 }}>
          {state.globalCounter}
        </Text>
        <TouchableOpacity
          onPress={() => handleIncrement()}
          style={{ padding: 20, borderColor: 'red', borderWidth: 1 }}>
          <Text style={{ fontSize: 24, lineHeight: 28 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
