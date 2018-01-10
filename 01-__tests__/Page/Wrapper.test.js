import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Wrapper from "../../03-Front-end/00-Page/Wrapper/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<Wrapper />);
  expect(wrapper).toMatchSnapshot();
});
