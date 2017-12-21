import React from "react";
import { render } from "react-dom";

const userAvatarUrl = 'https://github.com/btmpl.png';
const userName = 'Bartosz Szczeciński';
const time = (new Date()).toString();

export const Tweet = () => (
  <div>
    <img src={userAvatarUrl} width="50" />
    <b>{userName}</b>
    <time>{time}</time>
  </div>
)

const App = () => (
  <Tweet />  
)

render(<App />, document.getElementById("root"));

export default App;