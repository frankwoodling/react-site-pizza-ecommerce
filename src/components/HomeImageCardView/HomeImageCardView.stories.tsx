import * as React from "react";
import { HomeImageCardView } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Card: Product", module).add("Image", () => {
  return <HomeImageCardView />;
});
