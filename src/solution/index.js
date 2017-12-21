import React from "react";
import { render } from "react-dom";

const App = () => (
  <p>
    Witaj na <b>Warsztatach React</b>!
  </p>   
)

render(<App />, document.getElementById("root"));

export default App;