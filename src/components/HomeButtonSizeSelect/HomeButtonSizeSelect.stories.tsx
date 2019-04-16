// TODO: Knobs.
// also need an interface that supports multiple sizes
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HomeButtonSizeSelect } from "./index";

storiesOf("Button", module).add("Size Select", () => <HomeButtonSizeSelect />);
