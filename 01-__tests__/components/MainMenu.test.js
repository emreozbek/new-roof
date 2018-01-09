import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainMenu from "../../03-Front-end/01-Component/MainMenu/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const mainMenu = shallow(<MainMenu menuState={false} />);
  expect(mainMenu).toMatchSnapshot();
});
