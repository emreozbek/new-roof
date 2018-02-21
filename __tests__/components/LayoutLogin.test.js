import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LayoutLogin from "../../Client/Component/Layouts/Login/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const layoutLogin = shallow(<LayoutLogin />);
  expect(layoutLogin).toMatchSnapshot();
});
