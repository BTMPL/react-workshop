import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from "./index.js";

it("komponent App renderuje paragraf", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('p').length).toEqual(1)
})