import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "../../03-Front-end/01-Component/Layouts/Global/Index";
import * as actions from "../../03-Front-end/04-Action/Token";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const layout = shallow(<Layout actions={actions} />);
  expect(layout).toMatchSnapshot();
});
