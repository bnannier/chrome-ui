import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { AppBar, AppBarSection } from "../";

describe("AppBarSection Tests", () => {
  it("Check Sections", function() {
    const wrapper = shallow(
      <div>
        <AppBar fixed>
          <AppBarSection left>Left Side</AppBarSection>
          <AppBarSection right>Right Side</AppBarSection>
        </AppBar>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
