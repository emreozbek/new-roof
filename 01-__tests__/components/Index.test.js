import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Index from "../../03-Front-end/00-Page/Wrapper";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toMatchSnapshot();
});