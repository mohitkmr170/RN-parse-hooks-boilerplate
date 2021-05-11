import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';
import {NavigationContainerName} from 'App/Utils';

interface IHeaderProps {
  handleLeftButtonClick?: () => void;
  title?: string;
}

export function Header(props: IHeaderProps) {
  const route = useRoute();

  const renderLeftItem = () => {
    switch (_.get(route, 'name', '')) {
      case NavigationContainerName.Login:
      case NavigationContainerName.SignUp:
        return (
          <TouchableOpacity
            onPress={props.handleLeftButtonClick}
            style={styles.leftButton}>
            <Icon name="left" size={24} />
          </TouchableOpacity>
        );
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  const renderCenterItem = () => {
    switch (_.get(route, 'name', '')) {
      case NavigationContainerName.Login:
      case NavigationContainerName.SignUp:
        return <Text style={styles.title}>{_.get(props, 'title', null)}</Text>;
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  const renderRightItem = () => {
    switch (_.get(route, 'name', '')) {
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  return (
    <View style={styles.parentContainer}>
      {renderLeftItem()}
      {renderCenterItem()}
      {renderRightItem()}
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  dummyContainer: {height: 24, width: 24},
  leftButton: {},
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
  },
});
