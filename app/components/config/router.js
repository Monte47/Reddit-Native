import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import FrontPageContainer from '../screens/front_page/front_page_container';
import SplashContainer from '../screens/splash/splash_container';
import PostDetail from '../screens/post_detail/post_detail';

export const RedditNav = StackNavigator({
  SplashPage: {
    screen: SplashContainer
  },
  FrontPageContainer: {
    screen: FrontPageContainer
  },
  PostDetail: {
    screen: PostDetail
  }
});
