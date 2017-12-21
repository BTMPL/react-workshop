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

  render() {
    return (
      <div>
        {this.state.tweets.map((item, index) => <Tweet tweet={item} key={index} />)}
      </div>
    )
  }
}

render(<App tweets={tweets} />, document.getElementById("root"));

export default App;