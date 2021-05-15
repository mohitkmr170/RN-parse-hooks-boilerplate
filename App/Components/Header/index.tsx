import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import { NavigationContainerName, LocaleString } from 'App/Utils';
import { MetricsSizes, Colors } from 'App/Theme';

interface IHeaderProps {
  handleLeftButtonClick?: () => void;
  handleRightButtonClick?: () => void;
  title?: string;
}

export function Header(props: IHeaderProps) {
  const route = useRoute();

  const renderLeftItem = () => {
    switch (_.get(route, 'name', '')) {
      case NavigationContainerName.Cart:
      case NavigationContainerName.CategoryItemList:
      case NavigationContainerName.Login:
      case NavigationContainerName.SignUp:
        return (
          <TouchableOpacity
            onPress={props.handleLeftButtonClick}
            style={styles.leftButton}>
            <Icon
              name="left"
              size={24}
              color={
                _.get(route, 'name', '') === NavigationContainerName.Login ||
                _.get(route, 'name', '') === NavigationContainerName.SignUp
                  ? null
                  : Colors.white
              }
            />
          </TouchableOpacity>
        );
      case NavigationContainerName.Profile:
      case NavigationContainerName.Dashboard:
        return (
          <TouchableOpacity
            onPress={props.handleLeftButtonClick}
            style={styles.leftButton}>
            <IconIonicons name="menu-outline" size={24} color={Colors.white} />
          </TouchableOpacity>
        );
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  const renderCenterItem = () => {
    switch (_.get(route, 'name', '')) {
      case NavigationContainerName.Dashboard:
        return (
          <Text style={styles.produceText}>{LocaleString.header.produce}</Text>
        );
      case NavigationContainerName.Cart:
      case NavigationContainerName.Profile:
      case NavigationContainerName.Login:
      case NavigationContainerName.SignUp:
        return (
          <Text
            style={[
              styles.title,
              !(
                _.get(route, 'name', '') === NavigationContainerName.Login ||
                _.get(route, 'name', '') === NavigationContainerName.SignUp
              ) && { color: Colors.white },
            ]}>
            {_.get(props, 'title', null)}
          </Text>
        );
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  const renderRightItem = () => {
    switch (_.get(route, 'name', '')) {
      case NavigationContainerName.CategoryItemList:
      case NavigationContainerName.Dashboard:
        return (
          <TouchableOpacity onPress={props.handleRightButtonClick}>
            <IconIonicons name="basket-sharp" size={24} color={Colors.white} />
          </TouchableOpacity>
        );
      default:
        return <View style={styles.dummyContainer} />;
    }
  };

  return (
    <View
      style={[
        styles.parentContainer,
        {
          backgroundColor:
            _.get(route, 'name', '') === NavigationContainerName.Login ||
            _.get(route, 'name', '') === NavigationContainerName.SignUp
              ? ''
              : Colors.limeGreen,
        },
      ]}>
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
  dummyContainer: { height: 24, width: 24 },
  leftButton: {},
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
  },
  produceText: {
    fontSize: MetricsSizes.larger,
    lineHeight: MetricsSizes.moderateLarge,
    color: Colors.white,
  },
});
