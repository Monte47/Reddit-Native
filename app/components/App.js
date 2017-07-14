import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RedditNav } from './config/router';
import { Provider } from 'react-redux';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    window.store = this.store;
  }

  render () {
    window.store = this.store;
    return (
      <Provider store={this.store}>
        <RedditNav />
      </Provider>
    );
  }
}
