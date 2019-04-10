import * as React from "react";
import { ImageView, IImageProps } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Card: Product", module).add("Image", () => {
  const props: IImageProps = {
    height: 720,
    width: 640,
    image: "https://via.placeholder.com/360x320/"
  };

  return <ImageView {...props} />;
});
