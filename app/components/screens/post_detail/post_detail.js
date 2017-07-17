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
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }

  static navigationOptions = {
      title: "Reddit Native",
      headerStyle: {
        backgroundColor:"#E8F1F2",
      }
   };

   renderImage() {
     let src = this.props.navigation.state.params.state.data.thumbnail;
     let thumbnail;
     if (src === 'default' || src === 'self' || src === 'nsfw') {
       thumbnail = 'https://image.freepik.com/free-icon/reddit-social-logo-character_318-64647.jpg';
     } else {
       thumbnail = src;
     }
     return (
       <Image
         style={{
          alignSelf: 'center',
          height: 150,
          width: 150,
          borderRadius: 5
         }}
         source={{uri: thumbnail}}/>
     )
   }

  render() {
    let data = this.props.navigation.state.params.state.data;
    return(
      <View style={styles.page}>
        <Text style={styles.postTitle}>
          {data.title}
        </Text>
        {this.renderImage()}
        <View style={styles.split}>
          <Text style={styles.postText}>
            Score:
          </Text>
          <Text style={styles.postText}>
            {data.score}
          </Text>
        </View>
        <View style={styles.split}>
          <Text style={styles.postText}>
            Author:
          </Text>
          <Text style={styles.postText}>
            {data.author}
          </Text>
        </View>
        <View style={styles.split}>
          <Text style={styles.postText}>
            Subreddit:
          </Text>
          <Text style={styles.postText}>
            {data.subreddit_name_prefixed}
          </Text>
        </View>
        <Text style={styles.postText}>
          {data.num_comments} comments
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E8F1F2',
    alignItems: 'center',
  },
  postTitle: {
    fontFamily: "Avenir",
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  postText: {
    fontFamily: 'Avenir',
    marginLeft: 10,
    paddingTop: 10
  },
  split: {
    marginTop: 5,
    flexDirection: 'row',
  },

});
