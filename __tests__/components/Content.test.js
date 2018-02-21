import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Content from "../../Client/Component/Content/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const content = shallow(<Content />);
  expect(content).toMatchSnapshot();
});
