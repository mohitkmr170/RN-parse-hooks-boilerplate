import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors, MetricsSizes} from 'App/Theme';

interface IFormInputProps {
  error?: any;
  errorText?: any;
  style?: any;
}

export function FormInput(props: IFormInputProps) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[
          styles.input,
          props.error && {borderColor: Colors.failed, borderWidth: 1},
          props.style,
        ]}
        {...props}
        autoCapitalize="none"
        autoCompleteType="off"
        placeholderTextColor={Colors.gray}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: MetricsSizes.larger,
  },
  input: {
    fontSize: MetricsSizes.regular,
    lineHeight: MetricsSizes.large,
    backgroundColor: Colors.lightGray,
    borderRadius: MetricsSizes.smaller,
    paddingHorizontal: MetricsSizes.regular,
    paddingVertical: MetricsSizes.small,
  },
  errorText: {color: Colors.failed},
});
