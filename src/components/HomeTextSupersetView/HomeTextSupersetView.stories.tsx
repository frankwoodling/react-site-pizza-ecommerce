import * as React from "react";
import { HomeTextSupersetView } from "./";
// import { IHomeTextSupersetViewProps } from "./";

import { storiesOf } from "@storybook/react";
import { ButtonCart } from "../";

storiesOf("Text", module).add("Text Superset", () => {
  const props /*: IHomeTextSupersetViewProps*/ = {
    textMain: 12,
    textMainFontSize: "2.3em",
    textMainFontFamily: "Yanone Kaffeesatz",
    textSuper: 95,
    textSuperFontSize: "1.5em",
    textSuperFontFamily: "Yanone Kaffeesatz"
  };

  return <HomeTextSupersetView {...props} />;
});

storiesOf("Test", module).add("Cart", () => <ButtonCart />);
