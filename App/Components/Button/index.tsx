import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';
import {IButtonProps} from 'App/Interfaces';
import {Colors, MetricsSizes} from 'App/Theme';

export function Button(props: IButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={
        props.buttonStyle
          ? [
              props.buttonStyle,
              {
                backgroundColor: props.disabled
                  ? Colors.disabledButton
                  : _.get(props, 'buttonStyle.backgroundColor', null),
              },
            ]
          : [styles.buttonStyle]
      }
      disabled={
        _.get(props, 'disabled', false) || _.get(props, 'loading', false)
      }>
      {_.get(props, 'loading', false) ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <View style={props.internalStyle}>
          <Text style={props.titleStyle}>
            {_.get(props, 'title', '') || 'Click'}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.defaultButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: MetricsSizes.regular,
  },
});
