import jsdom from "jsdom";
import { mount } from "enzyme";

jsdom.env({  
  html: "<html><body><div id='root'></div></body></html>",
});

import App from "./index.js";

it("komponent App renderuje paragraf", () => {
  //const wrapper = mount(<App />);
  //expect(wrapper.find('p')).toHaveLength(1);
})