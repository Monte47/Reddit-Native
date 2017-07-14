import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class SplashPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00bfb2',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
