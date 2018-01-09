import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SnackBar from "../../03-Front-end/01-Component/SnackBar/Index";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const snackBar = shallow(<SnackBar open={false} />);
  expect(snackBar).toMatchSnapshot();
});
