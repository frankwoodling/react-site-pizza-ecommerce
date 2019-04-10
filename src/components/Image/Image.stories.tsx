import * as React from "react";
import { ImageView, IImageProps } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Image", module).add("Image", () => {
  const props: IImageProps = {
    height: 320,
    width: 360,
    backgroundColor: "black",
    image: "https://via.placeholder.com/360x320/",
    stretch: false
  };

  return <ImageView {...props} />;
});
