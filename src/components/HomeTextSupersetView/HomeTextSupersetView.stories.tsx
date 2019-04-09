import * as React from "react";
import { HomeTextSupersetView, IHomeTextSupersetViewProps } from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("Text", module).add("Text Superset", () => {
  const props: IHomeTextSupersetViewProps = {
    textMain: 12,
    textMainFontSize: "2.1em",
    textMainFontFamily: "Yanone Kaffeesatz",
    textMainColor: "#FFAE00",
    textSuper: 95,
    textSuperFontSize: "1.4em",
    textSuperFontFamily: "Yanone Kaffeesatz",
    textSuperColor: "#FFAE00"
  };

  return <HomeTextSupersetView {...props} />;
});
