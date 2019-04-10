import * as React from "react";
import { ImageView, IImageProps } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Image", module).add("Image", () => {
  const props: IImageProps = {
    height: 320,
    width: 360,
    backgroundColor: "black",
    image: "images/image_component_story.png",
    stretch: false
  };

  return <ImageView {...props} />;
});
