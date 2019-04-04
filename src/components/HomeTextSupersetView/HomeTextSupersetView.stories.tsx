import * as React from "react";
import { HomeTextSupersetView, IHomeTextSupersetViewProps } from "./index";
import { storiesOf } from "@storybook/react";



storiesOf("Text", module).add("Text Superset", () => {
  const props: IHomeTextSupersetViewProps = {
    textMain: 12,
    textMainFontSize: '2.5em',
    textMainFontFamily: 'Yanone Kaffeesatz',
    textSuper: 95,
    textSuperFontSize: '1.2em',
    textSuperFontFamily: 'Yanone Kaffeesatz'
  }

  return <HomeTextSupersetView {...props} /> 
}