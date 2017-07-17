# RedditNative.
RedditNative is a react-native app that lets you browse the front page of reddit. RedditNative was built for both ios and android and utilizes redux to organize its state.

To run RedditNative, clone this repository and then cd into it. Install the required packages, and then run it in either mobile environment. If you do not have react native installed, [head on over to the docs](https://facebook.github.io/react-native/docs/getting-started.html#content).

`git clone https://github.com/Monte47/Reddit-Native.git`

`cd RedditNative`

`npm install`

`react-native run-ios`
or
`react-native run-andriod`

## Features and Functionality.

RedditNative has 3 relevant pages:

- A splash page which fetches relevant data
- A front page that displays a list of Reddit posts
- A post detail page that displays a specific Reddit post

#### Splash

The splash, or loading page, of RedditNative displays while the App fetches the relevant data from Reddit. First the App will check Async Storage for data, and if found it will initialize the redux state with said data and navigate to the next page. Saving data in Async storage allows for much faster reloading times. If there is no relevant data stored in Async Storage, data will be instead fetched from Reddit via an Axios request and initialized into a Redux state. Axios is functionally similar to a Fetch request.


```Javascript
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
```
#### Front Page

![Front-Page](https://i.gyazo.com/bdad504709a96545a425fc80016f40f1.gif)

The main page of RedditNative includes a list of the top 25 posts from Reddit. It implements a scrollable Flatlist component to display posts. This page includes pull to refresh functionality which fetches the most recent data from Reddit and stores it into Redux and Async storage.

#### Post Detail Page

![Post-Detail](https://i.gyazo.com/ed3c6d73b4ba3a41edc52c7d28a8ace5.gif)

Pressing on a list item on the Front Page brings the user to another page in the App which displays similar data. Users can navigate back to the Front Page from this page via the Navigation bar at the top or by swiping the left most part of the screen.
