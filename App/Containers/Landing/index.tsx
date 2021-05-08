import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ILandingProps} from 'App/Interfaces';
import {LocaleString} from 'App/Utils';
import {MetricsSizes} from 'App/Theme';
import {Store} from 'App/Context/Counter/context';
import {incrementCounter} from 'App/Context/Counter/actions';

export const Landing = (props: ILandingProps) => {
  console.log('Landing : props ::', props);
  const [counter, setCounter] = useState(0);

  const {state, dispatch} = useContext(Store);

  const handleIncrement = () => {
    incrementCounter(dispatch, {});
    // setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.parentContainer}>
      <Text>{LocaleString.LandingScreen}</Text>
      <View
        style={{
          height: 3 * MetricsSizes.hugest,
          width: 3 * MetricsSizes.hugest,
          backgroundColor: 'red',
          marginTop: 40,
        }}
      />
      <View style={{marginTop: 40, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => handleDecrement()}
          style={{padding: 20, borderColor: 'red', borderWidth: 1}}>
          <Text style={{fontSize: 24, lineHeight: 28}}>-</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 24, lineHeight: 28, margin: 20}}>
          {counter}
        </Text>
        <TouchableOpacity
          onPress={() => handleIncrement()}
          style={{padding: 20, borderColor: 'red', borderWidth: 1}}>
          <Text style={{fontSize: 24, lineHeight: 28}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
