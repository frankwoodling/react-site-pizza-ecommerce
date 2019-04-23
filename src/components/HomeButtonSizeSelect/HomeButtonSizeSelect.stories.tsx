import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HomeButtonSizeSelect, IHomeButtonSizeSelectProps } from "./";

const testFunc = () => {
  console.log("onClick fired");
};

storiesOf("Button", module).add("Size Select, Selected", () => {
  const props: IHomeButtonSizeSelectProps = {
    buttonSize: "50px",
    backgroundColor: "#FFCD00",
    lineHeight: "14px",
    textTop: 22,
    textBottom: "cm",
    onClick: testFunc
  };

  return <HomeButtonSizeSelect {...props} />;
});
storiesOf("Button", module).add("Size Select, Unselected", () => {
  const props: IHomeButtonSizeSelectProps = {
    buttonSize: "50px",
    backgroundColor: "transparent",
    lineHeight: "14px",
    textTop: 22,
    textBottom: "cm",
    onClick: testFunc
  };

  return <HomeButtonSizeSelect {...props} />;
});
