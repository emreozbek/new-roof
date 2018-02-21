import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SnackBar from "../../Client/Component/SnackBar/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const snackBar = shallow(<SnackBar open={false} />);
  expect(snackBar).toMatchSnapshot();
});
