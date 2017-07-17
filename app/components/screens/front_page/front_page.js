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
  ListView,
  RefreshControl
} from 'react-native';


export default class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.renderFlatListItem = this.renderFlatListItem.bind(this);
    this.viewPost = this.viewPost.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }


  viewPost(item) {
    this.props.navigation.navigate('PostDetail', {state: item});
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.getPosts().then((res) => {
      this.props.setItem('redditData', res.posts);
      this.setState({refreshing: false});
    });
  }

  renderFlatListItem(item, i) {
    let thumbnail;
    if (item.data.thumbnail === 'default' || item.data.thumbnail === 'self' || item.data.thumbnail === 'nsfw') {
      thumbnail = 'https://image.freepik.com/free-icon/reddit-social-logo-character_318-64647.jpg';
    } else {
      thumbnail = item.data.thumbnail;
    }
    return(
      <View style={styles.listItemContainer}>
        <TouchableOpacity onPress={() => this.viewPost(item)}>
          <View style={styles.left}>
            <Image
              style={{
                alignSelf: 'center',
                height: 120,
                width: 120,
                marginRight: 10,
                borderRadius: 5
              }}
              source={{uri: thumbnail}}/>
            <View style={styles.right}>
              <Text style={styles.postTitle}>
                {item.data.title}
              </Text>
              <View style={styles.split}>
                <Text style={styles.postText}>
                  Score:
                </Text>
                <Text style={styles.postText}>
                   {item.data.score}
                </Text>
              </View>
              <View style={styles.split}>
                <Text style={styles.postText}>
                  Author:
                </Text>
                <Text style={styles.postText}>
                  {item.data.author}
                </Text>
              </View>
              <View style={styles.split}>
                <Text style={styles.postText}>
                  Subreddit:
                </Text>
                <Text style={styles.postText}>
                  {item.data.subreddit_name_prefixed}
                </Text>
              </View>
              <Text style={styles.postText}>
                {item.data.num_comments} comments
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    let posts = this.props.posts.children;
    if(posts) {
      return (
        <View style={styles.page}>
          <Text style={styles.pageTitle}>
            Reddit Native
          </Text>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                />
            }
            data={posts}
            renderItem={({item}, i) => this.renderFlatListItem(item)}
            keyExtractor={item => item.data.id}
            />
        </View>
      );
    } else {
      return (
        <View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E8F1F2'
  },
  pageTitle: {
    marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  listItemContainer: {
    padding: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: '#555'
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postText: {
    fontFamily: 'Avenir',
    marginLeft: 10
  },
  split: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  postTitle: {
    fontFamily: 'Avenir',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
