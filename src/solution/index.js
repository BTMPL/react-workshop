import React from "react";
import { render } from "react-dom";

export const Tweet = () => (
  <div>
    <img src="https://github.com/btmpl.png" width="50" />
    <b>Bartosz Szczeciński</b>
    <time>2017-12-21 19:20</time>
  </div>
)

const App = () => (
  <Tweet />  
)

render(<App />, document.getElementById("root"));

export default App;