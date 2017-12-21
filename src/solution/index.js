import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

import { Tweet } from "./components/Tweet.js";
import TweetForm from "./components/TweetForm.js";

const userAvatarUrl = 'https://github.com/btmpl.png';
const userName = 'Bartosz Szczeciński';
const time = (new Date()).toString();


const tweets = [0, 1, 2, 3, 4].map(item => ({
  user: {
    userName,
    userAvatar: userAvatarUrl
  },
  text: 'Hello world!',
  date: time,
}));

class App extends React.Component {
  state = {
    tweets: this.props.tweets
  }

  handleSubmit = (text) => {
    this.setState({
      tweets: [
        {
          user: {
            userName,
            userAvatar: userAvatarUrl,
          },
          text,
          date: (new Date()).toString()
        },
        ...this.state.tweets
      ]
    })
  }

  render() {
    return (
      <div style={{padding: '10px'}}>
        <TweetForm onSubmit={this.handleSubmit} />
        {
          (this.state.tweets && this.state.tweets.length > 0)
          ? this.state.tweets.map((item, index) => <Tweet tweet={item} key={index} />)
          : <p>Twój Twiter jest pusty!</p>
        }
      </div>
    )
  }
}

render(<App tweets={tweets} />, document.getElementById("root"));

export default App;