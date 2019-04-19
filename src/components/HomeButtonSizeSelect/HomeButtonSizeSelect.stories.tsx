// TODO: Knobs.
// also need an interface that supports multiple sizes
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HomeButtonSizeSelect, IHomeButtonSizeSelectProps } from "./index";

storiesOf("Button", module).add("Size Select", () => {
  const props: IHomeButtonSizeSelectProps = {
    backgroundColor: "#FFCD00",
    textTop: 22,
    textTopColor: "black",
    textTopFontSize: "14px", // ex: 15px or .8em
    textTopFontFamily: "Yanone Kaffeesatz",
    textBottom: "cm",
    textBottomColor: "black",
    textBottomFontSize: "14px", // ex: 15px or .8em
    textBottomFontFamily: "Yanone Kaffeesatz"
  };

  return <HomeButtonSizeSelect {...props} />;
});
