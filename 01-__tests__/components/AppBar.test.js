import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppBar from "../../03-Front-end/01-Component/AppBar/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<AppBar />);
  expect(wrapper).toMatchSnapshot();
});
