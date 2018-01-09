import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LayoutLogin from "../../03-Front-end/01-Component/Layouts/Login/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const layoutLogin = shallow(<LayoutLogin />);
  expect(layoutLogin).toMatchSnapshot();
});
