import React from "react";
import { render } from "react-dom";

const userAvatarUrl = 'https://github.com/btmpl.png';
const userName = 'Bartosz Szczeciński';
const time = (new Date()).toString();

export const UserDetails = ({userName, userAvatar}) => (
  <div>
    <img src={userAvatar} width="50" />
    <b>{userName}</b>  
  </div>
)

export const Tweet = (props) => (
  <div>
    <UserDetails userName={props.userName} userAvatar={props.userAvatar} />
    <time>{time}</time>
    <p>
      {props.text}
    </p>
  </div>
)

const App = () => (
  <div>
    {
      [0, 1, 2, 3, 4].map(item => <Tweet userName={userName} userAvatar={userAvatarUrl} key={item} text="Lorem ipsum" />)
    } 
  </div>
)

render(<App />, document.getElementById("root"));

export default App;