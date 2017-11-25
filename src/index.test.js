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

  it("definiuje propTypes i defaultProps", () => {
    expect(UserDetails.propTypes.userName).toBeDefined();
    expect(UserDetails.propTypes.userAvatar).toBeDefined();

    expect(UserDetails.defaultProps.userName).toBeDefined();
  });  
})

describe("<Tweet />", () => {
  const date = new Date().toString()
  const tweet = {
    user: {
      userName: 'test.userName',
      userAvatar: 'test.userAvatar',
    },
    date: date,
    text: 'test.text'
  };

  it("renderuje <UserDetails> oraz <time>", () => {
    const wrapper = mount(<Tweet tweet={tweet} />);
    expect(wrapper.find(UserDetails).length).toEqual(1)
    expect(wrapper.find('time').length).toEqual(1)
  });


  it("akceptuje prop 'tweet'", () => {
    const wrapper = mount(<Tweet tweet={tweet} />);
    expect(wrapper.html().indexOf(tweet.user.userName) > -1).toEqual(true);
    expect(wrapper.html().indexOf(tweet.user.userAvatar) > -1).toEqual(true);
    expect(wrapper.html().indexOf(tweet.text) > -1).toEqual(true);
  });
  
  it("definiuje propTypes dla propy 'tweet'", () => {
    expect(Tweet.propTypes.tweet).toBeDefined();
  });

})