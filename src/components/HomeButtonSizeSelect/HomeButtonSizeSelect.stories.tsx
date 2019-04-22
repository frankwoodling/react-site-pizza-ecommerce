// TODO: Knobs.
// also need an interface that supports multiple sizes
import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  HomeButtonSizeSelect,
  IHomeButtonSizeSelectProps,
  FontWeight
} from "./index";

const testFunc = () => {
  console.log("onClick fired");
};

storiesOf("Button", module).add("Size Select", () => {
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
