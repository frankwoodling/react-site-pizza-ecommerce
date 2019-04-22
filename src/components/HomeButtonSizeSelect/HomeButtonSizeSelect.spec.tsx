import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HomeButtonSizeSelect } from "./index";

describe("HomeButtonSizeSelect", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });
  it("should render a button with 50px height and width", () => {
    // arrange
    const props = {
      buttonSize: "50px",
      backgroundColor: "#FFCD00",
      lineHeight: "14px",
      textTop: 22,
      textBottom: "cm"
    };

    const component = mount(<HomeButtonSizeSelect {...props} />);

    // act
    component.update();

    //assert
    console.log(component.debug());
    expect(component.prop("height")).toEqual("50px");
  });
});
