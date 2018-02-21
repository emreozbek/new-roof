import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainMenu from "../../Client/Component/MainMenu/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const mainMenu = shallow(<MainMenu menuState={false} />);
  expect(mainMenu).toMatchSnapshot();
});
