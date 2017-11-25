import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

/**
 * Z uwagi na sposób w jaki powstaje nasza aplikacja - linijka render() jest wywoływana
 * także w testach i aplikacja próbuje się wyrenderować. W normalnych aplikacjach, 
 * podzielonych na pliki taka sytuacja nie miała by miejsca, ale na potrzeby testu
 * musimy niestety utworzyć ten element DOM
 */
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const App = require("./index.js").default;
const Tweet = require("./index.js").Tweet;

it("komponent App renderuje Tweet", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Tweet).length).toEqual(1)
})

describe("<Tweet />", () => {
  it("renderuje <img />, <b> oraz <time>", () => {
    const wrapper = mount(<Tweet />);
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('b').length).toEqual(1)
    expect(wrapper.find('time').length).toEqual(1)
  });

  it("renderuje aktualną datę", () => {
    const year = (new Date).getFullYear();
    const wrapper = mount(<Tweet />);
    expect(wrapper.find('time').html().indexOf(year) > -1).toEqual(true);
  })
})