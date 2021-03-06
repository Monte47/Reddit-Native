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
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData()
    .then(() => {
      this.props.navigation.navigate('FrontPageContainer')
    })
  }

  async getData() {
    let redditData = await this.props.getItem('redditData');
    if (redditData) {
      this.props.receivePosts(redditData);
    } else {
      this.props.getPosts()
      .then(res => {
        this.props.setItem('redditData', res.posts)
      })
    }
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
