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
// import { List, ListItem } from 'react-native-elements';


export default class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.renderFlatListItem = this.renderFlatListItem.bind(this);
    this.viewPost = this.viewPost.bind(this);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: [],
    // };
  }

  componentWillMount() {
    this.props.getPosts();
    console.log("fetched");
  }

  viewPost(item) {
    this.props.navigation.navigate('PostDetail', {state: item});
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
                width: 150
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
      console.log(posts[0].data.title);
      return (
        <View>
          <Text style={styles.title}>
            Reddit Native
          </Text>
          <FlatList
            data={posts}
            renderItem={({item}, i) => this.renderFlatListItem(item)}
            keyExtractor={item => item.data.title}
            />
        </View>
      );
    } else {
      return (
        <View>
          <Text>
            Hello
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Cochin",
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  listItemContainer: {
    marginTop: 30,
    padding: 12,
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
