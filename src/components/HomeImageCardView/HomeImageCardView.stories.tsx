import * as React from "react";
import { HomeImageCardView, IHomeImageCardViewProps } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Card: Product", module).add("Image", () => {
  const props: IHomeImageCardViewProps = {
    image: "https://via.placeholder.com/360x320/"
  };

  return <HomeImageCardView {...props} />;
});
