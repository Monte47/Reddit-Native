import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import FrontPageContainer from '../screens/front_page/front_page_container';

export const RedditNav = StackNavigator({
  FrontPageContainer: {
    screen: FrontPageContainer
  }
});
