import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoginForm from "../../03-Front-end/01-Component/LoginForm/Index";
import * as actions from "../../03-Front-end/04-Action/Token";
import Routes from "../../04-Config/Routes";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const loginForm = shallow(
    <LoginForm actions={actions} url={Routes.user.login} />
  );
  expect(loginForm).toMatchSnapshot();
});
