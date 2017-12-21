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

export const Tweet = (props) => (
  <div>
    <UserDetails userName={props.userName} userAvatar={props.userAvatar} />
    <time>{time}</time>
    <p>
      {props.text}
    </p>
  </div>
)

Tweet.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  text: PropTypes.string,
}

Tweet.defaultProps = {
  userName: 'Anonim'
}

const App = () => (
  <div>
    {
      [0, 1, 2, 3, 4].map(item => <Tweet userName={userName} userAvatar={userAvatarUrl} key={item} text="Lorem ipsum" />)
    } 
  </div>
)

render(<App />, document.getElementById("root"));

export default App;