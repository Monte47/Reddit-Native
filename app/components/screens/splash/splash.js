import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class SplashPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts()
    .then(() => this.props.navigation.navigate('FrontPageContainer'));
  }

  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Reddit Native</Text>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#98DFAF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Cochin-Bold',
    fontSize: 30
  }
});
