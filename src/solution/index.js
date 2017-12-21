import React from "react";
import { render } from "react-dom";

const userAvatarUrl = 'https://github.com/btmpl.png';
const userName = 'Bartosz Szczeciński';
const time = (new Date()).toString();

export const UserDetails = () => (
  <div>
    <img src={userAvatarUrl} width="50" />
    <b>{userName}</b>  
  </div>
)

export const Tweet = () => (
  <div>
    <UserDetails />
    <time>{time}</time>
  </div>
)

const App = () => (
  <div>
    <Tweet />  
    <Tweet />  
    <Tweet />  
    <Tweet />  
    <Tweet />  
  </div>
)

render(<App />, document.getElementById("root"));

export default App;