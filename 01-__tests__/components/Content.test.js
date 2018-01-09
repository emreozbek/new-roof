import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Content from "../../03-Front-end/01-Component/Content/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const content = shallow(<Content />);
  expect(content).toMatchSnapshot();
});
