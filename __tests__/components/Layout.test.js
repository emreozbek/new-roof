import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "../../Client/Component/Layouts/Global/Index";
import * as actions from "../../Client/Action/Token";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const layout = shallow(<Layout actions={actions} />);
  expect(layout).toMatchSnapshot();
});
