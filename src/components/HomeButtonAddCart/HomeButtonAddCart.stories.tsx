// TODO: ButtonCart knobs.
// also need an interface that supports multiple sizes
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HomeButtonAddCart } from "./index";

storiesOf("Button", module).add("Add to Cart", () => <HomeButtonAddCart />);
