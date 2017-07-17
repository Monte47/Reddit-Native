import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import FrontPageContainer from '../screens/front_page/front_page_container';
import SplashContainer from '../screens/splash/splash_container';
import PostDetail from '../screens/post_detail/post_detail';

export const RedditNav = StackNavigator({
  SplashPage: {
    screen: SplashContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    }
  },
  FrontPageContainer: {
    screen: FrontPageContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    }
  },
  PostDetail: {
    screen: PostDetail,
    headerMode: 'screen'
  }
});
