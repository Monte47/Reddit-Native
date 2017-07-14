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
    this.props.getPosts().then(() => {
      console.log("refreshing");
      this.setState({refreshing: false});
    });
  }

  renderFlatListItem(item, i) {
    return(
      <View style={styles.listItemContainer}>
        <TouchableOpacity onPress={() => this.viewPost(item)}>
          <View style={styles.left}>
            <Image
              style={{
                alignSelf: 'center',
                height: 150,
                width: 150,
                marginRight: 10
              }}
              source={{uri: item.data.thumbnail}}/>
            <View style={styles.right}>
              <Text>
                Score: {item.data.score}
              </Text>
              <Text>
                {item.data.title}
              </Text>
              <Text>
                {item.data.author}
              </Text>
              <Text>
                {item.data.subreddit_name_prefixed}
              </Text>
              <Text>
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
          <Text style={styles.title}>
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
            keyExtractor={item => item.data.title}
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
  title: {
    marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  listItemContainer: {
    marginTop: 15,
    padding: 12,
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
  }
});
