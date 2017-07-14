import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
  View,
  FlatList,
  ListView
} from 'react-native';

export default class PostDetail extends Component{

  render() {
    let data = this.props.navigation.state.params.state.data;
    return(
      <View>
        <Text>
          Score: {data.score}
        </Text>
        <Text>
          {data.title}
        </Text>
        <Text>
          {data.author}
        </Text>
        <Image
          style={{
            alignSelf: 'center',
            height: 150,
            width: 150
          }}
          source={{uri: data.thumbnail}}/>
        <Text>
          {data.subreddit_name_prefixed}
        </Text>
        <Text>
          {data.num_comments} comments
        </Text>
      </View>
    );
  }
}
