// TODO: Knobs.
// also need an interface that supports multiple sizes
import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  HomeButtonSizeSelect,
  IHomeButtonSizeSelectProps,
  FontWeight
} from "./index";

storiesOf("Button", module).add("Size Select", () => {
  const props: IHomeButtonSizeSelectProps = {
    buttonSize: "50px",
    backgroundColor: "#FFCD00",
    lineHeight: "14px",
    textTop: 22,
    textTopColor: "black",
    textTopFontSize: "14px", // ex: 15px or .8em
    textTopFontFamily: "Yanone Kaffeesatz",
    textTopFontWeight: FontWeight.BOLDER,
    textBottom: "cm",
    textBottomColor: "black",
    textBottomFontSize: "14px", // ex: 15px or .8em
    textBottomFontFamily: "Yanone Kaffeesatz",
    textBottomFontWeight: FontWeight.NORMAL
  };

  return <HomeButtonSizeSelect {...props} />;
});
