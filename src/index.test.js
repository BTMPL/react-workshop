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
const UserDetails = require("./index.js").UserDetails;

it("komponent App renderuje 5 lub więcej Tweetów", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Tweet).length >= 5).toEqual(true);
})

describe("<UserDetails />", () => {
  it("renderuje <img /> oraz <b> ", () => {
    const wrapper = mount(<UserDetails />);
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('b').length).toEqual(1)
  }); 
  
  it("akceptuje userName i userAvatar", () => {
    const userName = "test.username";
    const userAvatar = "test.useravatar";

    const wrapper = mount(<UserDetails userName={userName} userAvatar={userAvatar} />);
    expect(wrapper.html().indexOf(userName) > -1).toEqual(true);
    expect(wrapper.html().indexOf(userAvatar) > -1).toEqual(true);
  }); 
})

describe("<Tweet />", () => {
  it("renderuje <UserDetails> oraz <time>", () => {
    const wrapper = mount(<Tweet />);
    expect(wrapper.find(UserDetails).length).toEqual(1)
    expect(wrapper.find('time').length).toEqual(1)
  });

  it("renderuje aktualną datę", () => {
    const year = (new Date).getFullYear();
    const wrapper = mount(<Tweet />);
    expect(wrapper.find('time').html().indexOf(year) > -1).toEqual(true);
  });

  it("akceptuje userName, userAvatar i text", () => {
    const userName = "test.username";
    const userAvatar = "test.useravatar";
    const text = "test.text";

    const wrapper = mount(<Tweet userName={userName} userAvatar={userAvatar} text={text} />);
    expect(wrapper.html().indexOf(userName) > -1).toEqual(true);
    expect(wrapper.html().indexOf(userAvatar) > -1).toEqual(true);
    expect(wrapper.html().indexOf(text) > -1).toEqual(true);
  });  

})