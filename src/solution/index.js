import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const userAvatarUrl = 'https://github.com/btmpl.png';
const userName = 'Bartosz Szczeciński';
const time = (new Date()).toString();

export const UserDetails = ({userName, userAvatar}) => (
  <div>
    <img src={userAvatar} width="50" />
    <b>{userName}</b>  
  </div>
)

UserDetails.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
}

UserDetails.defaultProps = {
  userName: 'Anonim'
}

export const Tweet = ({tweet}) => (
  <div>
    <UserDetails userName={tweet.user.userName} userAvatar={tweet.user.userAvatar} />
    <time>{tweet.time}</time>
    <p>
      {tweet.text}
    </p>
  </div>
)

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      userName: PropTypes.string,
      userAvatar: PropTypes.string,
    }),
    date: PropTypes.string,
    text: PropTypes.string,
  })
}

export class TweetForm extends React.Component {

  state = {
    text: ''
  }

  static defaultProps = {
    onSubmit: () => {}
  }

  handleChange = (event) => this.setState({
    text: event.target.value
  })

  handleClick = () => {
    this.props.onSubmit(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleClick}>Dodaj Tweet</button>
      </div>
    )
  }
} 

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
      <div>
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