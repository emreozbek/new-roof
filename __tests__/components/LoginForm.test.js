import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoginForm from "../../Client/Component/LoginForm/Index";
import * as actions from "../../Client/Action/Token";
import Routes from "../../Config/Routes";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const loginForm = shallow(
    <LoginForm actions={actions} url={Routes.user.login} />
  );
  expect(loginForm).toMatchSnapshot();
});
