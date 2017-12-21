import React from "react";
import { render } from "react-dom";


render(React.createElement(
  'p',
  {},
  'Witaj na ',
  React.createElement(
    'b',
    {}, 
    'Warsztatach React'
  ), '!'
), document.getElementById("root"));