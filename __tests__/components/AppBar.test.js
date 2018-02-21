import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppBar from "../../Client/Component/AppBar/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<AppBar />);
  expect(wrapper).toMatchSnapshot();
});
